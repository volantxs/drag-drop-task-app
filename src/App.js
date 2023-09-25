import './App.css';
import * as React from 'react';
import { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import {Droppable} from './Droppable';
import {Draggable} from './Draggable';

function App() {
  const [idea, setIdea] = useState("");
  const [ideaArr, setIdeaArr] = useState([])
  const [isDropped, setIsDropped] = useState(false);

  function handleBuild(idea) {
    if (idea !== "") {
      const temp = ideaArr.slice();
      const newIdeaArr = [...temp, idea];
      setIdeaArr(newIdeaArr);
      setIdea("");
    } else {
    }
  }

  function handleDragEnd(event) {
    if (event.over && event.over.id === 'droppable') {
      setIsDropped(true);
    }
  }
  return (
    <DndContext onDragEnd={handleDragEnd}>
    <div className="App">
      <header >
        <h1>Brain storme</h1>
      </header>
      <div className='input-wrapper'>
        <input 
          className='inputBuild'
          type='text' 
          name='idea' 
          placeholder='Jot down an idea'
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleBuild(idea)}
          required
          />
        <button 
          className='buildBtn' 
          onClick={() => handleBuild(idea)}>
          Build
        </button>
      </div>
      <div>
        <Draggable ideaArr={ideaArr} setIdeaArr={setIdeaArr} />
      </div>

    </div>
    </DndContext>

  );
}

export default App;
