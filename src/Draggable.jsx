import React from 'react';
import GridLayout from "react-grid-layout";
import styled from "styled-components";

export function Draggable(props) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: toString(props.idea.length),
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };

  const OnDragStart = {
    ondragstart(id) {
      return 'picked up'
    }
  }

  

}
