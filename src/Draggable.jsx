import React from 'react';
import {useDraggable} from '@dnd-kit/core';

export function Draggable({ideaArr, setIdeaArr}) {

  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: ideaID,
  });
  const style = {
    transform: CSS.Translate.toString(transform),
    transition: transition
} 
  function handleDelete(text) {
    const temp = ideaArr.filter((idea) => {
      return idea !== text
    });
    // const delIdea =  filter.temp;
    setIdeaArr(temp);
  }

  if (ideaArr.length > 0) {
    return (
     ideaArr.map((idea, index) => (
    <div key={idea} ref={setNodeRef} style={style} {...listeners} {...attributes}  className='ideaSpeck' id={index}>
    <button className='deleteBtn'  onClick={() => handleDelete(idea)}>x</button>
    <p>{idea}</p>
    </div>
    ))

    )
  } else {
    return (
    <div>
      <p>No ideas yet</p>
    </div>
    )
  
  }

}
