import './css/App.css';
import * as React from 'react';
import { useState } from 'react';
import { DragAndDrop } from './components/DragAndDrop';
import { Navbar } from './components/Navbar'


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
    <div className="App">
      <Navbar/>
      <header >
        <h1>Brain storm</h1>
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
      <DragAndDrop ideaArr={ideaArr} setIdeaArr={setIdeaArr} />
      </div>

  );
}

export default App;
