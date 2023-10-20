import './css/App.css';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'; 
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DisplayIdeas } from './components/DisplayIdeas';
import { TaskCard } from './components/createTask';
import Navbar from './components/Navbar';
import Edit from './components/edit';
import RecordList from './components/AllRecords';


const App = () => {
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
    let obj = {
      id: "card-" + new Date().getTime(),
      title: "" ,
      subtitle: "" ,
    }
    temp.push(obj)
    setCardsID(temp);
  }

  return (
    <div>
      {/* <nav className='navbar navbar-light bg-secondary-subtle '>
      <button 
      className='btn btn-dark m-2' 
      onClick={(e) => handleClick(e)}>
        New Card
    </button>
      </nav> */}
      <Navbar/>
      

      <div className='container-fluid pt-5'>
        <form className='form-inline mx-auto pb-4' style={{width: '70%'}}>
        <div className='input-group shadow rounded'>
        <input
          className='form-control  border-0'
          type='text' 
          name='idea' 
          placeholder='Jot down a task'
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleBuild(idea)}
          required
          />
        <button 
          className='btn btn-primary'
          type='button'
          onClick={() => handleBuild(idea)}>
          Build
        </button>
        </div>
        </form>
        <div className='container mx-auto'>
        <DisplayIdeas ideaArr={ideaArr} setIdeaArr={setIdeaArr} />

        <Routes>
        <Route exact path="/" element={<RecordList/>}/>
        <Route exact path="/edit/:id" element={<Edit/>}/>
        <Route exact path="/create" element={<TaskCard/>}/>
      </Routes>
        </div>
      </div>
      </div>      
  );
}

export default App;
