import './css/App.css';
import * as React from 'react';
import { useState } from 'react';
import { DragAndDrop } from './components/DragAndDrop';
import { Navbar } from './components/Navbar';
import { Center, ChakraProvider, Container } from '@chakra-ui/react';
import { Input, Button, ButtonGroup, Stack, Grid, GridItem } from '@chakra-ui/react'


function App() {
  const [idea, setIdea] = useState("");
  const [ideaArr, setIdeaArr] = useState([])
  function handleBuild(idea) {
    if (idea !== "") {
      const temp = ideaArr.slice();
      const newIdeaArr = [...temp, idea];
      setIdeaArr(newIdeaArr);
      setIdea("");
    } else {
    }
  }
  return (
    <ChakraProvider>
      <Navbar/>
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
          variant='solid' 
          onClick={() => handleBuild(idea)}>
          Build
        </Button>
        </Stack>
        </Center>
      <DragAndDrop ideaArr={ideaArr} setIdeaArr={setIdeaArr} />
      </Container>

    </ChakraProvider>
  );
}

export default App;
