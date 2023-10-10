import { DisplayIdeas } from './DisplayIdeas';
import { Grid, GridItem } from '@chakra-ui/react';
import { TaskCard } from './addTaskCard';

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
          <div id='_taskCard'>

          </div>
      </div>
      
    )
  } 
 
}