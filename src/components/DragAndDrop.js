import { DisplayIdeas } from './DisplayIdeas';
import { CreateCard } from './addTaskCard';

export function DragAndDrop(props) {
  function onDragStart(e) {
    e.dataTransfer.setData("text", e.target.id);
  }
    return (
      <div>
        <DisplayIdeas 
          ideaArr={props.ideaArr} 
          setIdeaArr={props.setIdeaArr}
          onDragStart={(e)=> onDragStart(e)} />
      <div id='cards'>
      </div>
      <CreateCard/>
      </div>
    )
}