import React from 'react';
import {useDroppable} from '@dnd-kit/core';

export function Droppable(props) {
  const {setNodeRef} = useDroppable({
    id: toString(props.id),
  });
  
  return (
    <div className='dropArea' ref={setNodeRef} id={props.id}>
      {props.ideas.map((idea, index) => (
        <div key={index} className='drop'>
          Drop here
        </div>
      ))}
    </div>
  );
}