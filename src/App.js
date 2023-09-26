import './css/App.css';
import * as React from 'react';
import { useState } from 'react';
import { DragAndDrop } from './components/DragAndDrop';


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
      <DragAndDrop ideaArr={ideaArr} setIdeaArr={setIdeaArr} />
      </div>

  );
}

// function handleDragStart(e) {
//   e.dataTransfer.setData("text/plain", e.target.id);
// }

// function handleDragOver(e) {
//   e.preventDefault();
//   e.dataTransfer.dropEffect = "move";
// }

// function handleDrop(e) {
//   e.preventDefault();
//   const ideaID = e.dataTransfer.getData("text/plain");
//   e.target.appendChild(document.getElementById(ideaID));
// }

// window.addEventListener("DOMContentLoaded", () => {
//   const element = document.querySelectorAll("ideaSpeck");
//   element.addEventListener("dragstart", handleDragStart);
// });



export default App;
