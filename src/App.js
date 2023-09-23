import './App.css';
import * as React from 'react';
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

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
      <DisplayIdeas ideaArr = {ideaArr} setIdeaArr={setIdeaArr} />
    </div>
  );
}


function DisplayIdeas({ideaArr, setIdeaArr}) {
  function handleDelete(text) {
    const temp = ideaArr.filter((idea) => {
      return idea !== text
    });
    // const delIdea =  filter.temp;
    setIdeaArr(temp);
  }

  if (ideaArr.length > 0) {
    return (
    <div className='ideaBlob'>
    {ideaArr.map((idea, index) => (
    <div key={index} className='ideaSpeck'>
    <button className='deleteBtn'  onClick={() => handleDelete(idea)}>x</button>
    <p>{idea}</p>
    </div>
    ))}
  </div>
    )

  } else {
    return (
    <div>
      <p>No ideas yet</p>
    </div>
    )
  
  }
 
}

  

export default App;
