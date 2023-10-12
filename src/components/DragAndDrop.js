import { DisplayIdeas } from './DisplayIdeas';
import * as React from 'react';
import { Grid, GridItem, Button } from '@chakra-ui/react';


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
      <Grid templateRows={'repeat(2, 1fr)'} gap={4}>
      {props.cards.map((card) => 
       {
        return(card);
       }
      )}
      </Grid> 
      </div>
    )
}

