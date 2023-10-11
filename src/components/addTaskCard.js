import { Container, Grid, GridItem } from '@chakra-ui/react';
import { useState } from 'react';

function TaskCardnew() {
    function handleDrop(e) {
        e.preventDefault();
        var data = e.dataTransfer.getData("text");
        e.target.appendChild(document.getElementById(data));
      }
      function handleOnDragover(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move"
      }
    return (
        <Container>
        <Grid templateColumns='repeat(4, 1fr)' gap={4}>
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
        </Grid> 
        </Container>
    )
}

export function CreateCard(TaskCardnew) {
    const cardDiv = document.getElementById('cards')
    const [taskCard, setTaskCard] = useState([]);
    const temp = taskCard;
    // cardDiv.appendChild(TaskCardnew);
    // temp.push(TaskCardnew)
    // setTaskCard(temp);
    // taskCard.map((cards => {
    //     cardDiv.appendChild(cards);
    // }))
  }
  