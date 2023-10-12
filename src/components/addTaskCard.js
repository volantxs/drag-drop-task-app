import { Container, Grid, GridItem } from '@chakra-ui/react';

export function TaskCardnew(isClicked) {
    function handleDrop(e) {
        e.preventDefault();
        var data = e.dataTransfer.getData("text");
        e.target.appendChild(document.getElementById(data));
      }
      function handleOnDragover(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move"
      }
    if (isClicked == true) {
      return (
      <GridItem 
        margin={5}
        padding={5}
        width={'320px'}
        borderRadius={10}
        bg={'gray.100'}
        id='droppable' 
        onDrop={(e) => handleDrop(e)} 
        onDragOver={(e) => handleOnDragover(e)}>
        </GridItem>
        );
    }   
}
