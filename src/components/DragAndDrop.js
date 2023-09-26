import { DisplayIdeas } from './DisplayIdeas';

export function DragAndDrop(props) {
  function handleDrop(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));

  }
  function handleOnDragover(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move"
  }
  function onDragStart(e) {
    e.dataTransfer.setData("text", e.target.id);
  }

  if (props.ideaArr.length > 0) {
    return (
      <div>
        <DisplayIdeas 
          ideaArr={props.ideaArr} 
          setIdeaArr={props.setIdeaArr}
          onDragStart={(e)=> onDragStart(e)} />
        <div 
        className='dropArea'
        id='droppable' 
        onDrop={(e) => handleDrop(e)} 
        onDragOver={(e) => handleOnDragover(e)}>
        Drag over here
      </div>
      </div>
      
    )
  } else {
    return (
      <div>
        <h1>Wanna see something fun? Create an idea</h1>
      </div>
    )
  }
 
}