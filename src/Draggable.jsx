import React from 'react';
import GridLayout from "react-grid-layout";
import styled from "styled-components";

const layout = [
  { i: "blue-eyes-dragon", x: 0, y: 0, w: 1, h: 1 },
  { i: "dark-magician", x: 1, y: 0, w: 1, h: 1 },
  { i: "kuriboh", x: 2, y: 0, w: 1, h: 1 },
  { i: "spell-caster", x: 3, y: 0, w: 1, h: 1 },
  { i: "summoned-skull", x: 4, y: 0, w: 1, h: 1 }
];

const GridItemWrapper = styled.div`
  background: #f5f5f5;
`;

const GridItemContent = styled.div`
  padding: 8px;
`;

const Root = styled.div`
  padding: 16px;
`;

export const Grid = () => {
  return (
    <Root>
      <GridLayout layout={layout} cols={5} rowHeight={300} width={1000}>
        <GridItemWrapper key="blue-eyes-dragon">
          <GridItemContent>Blue Eyes Dragon</GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="dark-magician">
          <GridItemContent>Dark Magician</GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="kuriboh">
          <GridItemContent>Kuriboh</GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="spell-caster">
          <GridItemContent>Spell Caster</GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="summoned-skull">
          <GridItemContent>Summoned Skull</GridItemContent>
        </GridItemWrapper>
      </GridLayout>
    </Root>
  );
};

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
