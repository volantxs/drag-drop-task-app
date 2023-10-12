import './css/App.css';
import * as React from 'react';
import { useState } from 'react';
import { DragAndDrop } from './components/DragAndDrop';
import { Navbar } from './components/Navbar';
import { Center, ChakraProvider, Container } from '@chakra-ui/react';
import { Input, Button, ButtonGroup, Stack, Grid, GridItem } from '@chakra-ui/react'


function App() {
  const [cards, setCards] = useState([]);

  const [idea, setIdea] = useState("");
  const [ideaArr, setIdeaArr] = useState([])
  // const [count, setCount] = useState(0);

  function handleBuild(idea) {
    if (idea !== "") {
      const temp = ideaArr.slice();
      const newIdeaArr = [...temp, idea];
      setIdeaArr(newIdeaArr);
      setIdea("");
    } else {
    }
  }
  
  function handleDrop(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
  }
  function handleOnDragover(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move"
  }

  function handleClick(e, count) {
    e.preventDefault();
    let temp = cards;
    temp.push(   
    <GridItem 
      key={count}
      margin={3}
      padding={5}
      width={'300px'}
      height={'300px'}
      borderRadius={10}
      bg={'gray.100'}
      id='droppable' 
      onDrop={(e) => handleDrop(e)} 
      onDragOver={(e) => handleOnDragover(e)}>
      </GridItem>)
      setCards(temp);
      // setCount(count + 1)
  }

  return (
    <ChakraProvider>
       <Button 
      margin={7} 
      bg={"purple.200"} 
      color={"purple.600"} 
      onClick={(e) => handleClick(e)}>
        New Card
    </Button>
      <Container centerContent>
      <Center>
        <Stack align='center' direction='row'  spacing={4}>
        <Input
          type='text' 
          name='idea' 
          width='auto'
          placeholder='Jot down a task'
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleBuild(idea)}
          required
          />
        <Button 
          colorScheme='gray'
          onClick={() => handleBuild(idea)}>
          Build
        </Button>
        </Stack>
        </Center>
      <DragAndDrop ideaArr={ideaArr} setIdeaArr={setIdeaArr} cards={cards} />
      </Container>
    </ChakraProvider>
  );
}

export default App;
