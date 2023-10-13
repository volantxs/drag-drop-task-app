import './css/App.css';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { DragAndDrop } from './components/DragAndDrop';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DisplayIdeas } from './components/DisplayIdeas';
import { TaskCard } from './components/addTaskCard';


function App() {
  const [cardsID, setCardsID] = useState([]);
  const [idea, setIdea] = useState("");
  const [ideaArr, setIdeaArr] = useState([]);

  function handleBuild(idea) {
    if (idea !== "") {
      const temp = ideaArr.slice();
      const newIdeaArr = [...temp, idea];
      setIdeaArr(newIdeaArr);
      setIdea("");
    } else {
    }
  }

  function handleClick(e) {
    e.preventDefault();
    let temp = cardsID.slice();
    const newID = (new Date()).getTime()
    temp.push(newID)
    setCardsID(temp);
  }


  return (
    <div>
      <nav className='navbar navbar-light bg-secondary-subtle '>
      <button 
      className='btn btn-dark m-2' 
      onClick={(e) => handleClick(e)}>
        New Card
    </button>
      </nav>
      <div className='container-fluid pt-5'>
        <form className='form-inline mx-auto pb-4' style={{width: '50%'}}>
          <div className='input-group'>
        <input
          className='form-control'
          type='text' 
          name='idea' 
          placeholder='Jot down a task'
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleBuild(idea)}
          required
          />
          <div className='input-group-append'>
        <button 
          className='btn btn-outline-dark '
          type='button'
          onClick={() => handleBuild(idea)}>
          Build
        </button>
        </div>
        </div>
        </form>
        <div className='container-fluid mx-auto row text-center'>
        <div className='col-md-10'>
        <DisplayIdeas ideaArr={ideaArr} setIdeaArr={setIdeaArr} />
        <TaskCard cardsID={cardsID}/>
        </div>
        <div className='col-md-1'>
          <h1 className='text-center'>Teams</h1>
        </div>
      
        </div>

      </div>
      </div>      
  );
}

export default App;
