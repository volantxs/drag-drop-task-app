import './App.css';
import { useState } from 'react';

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

  function handleDelete(index) {
    const temp = ideaArr.slice();
    const delIdea = delete temp[index];
    setIdeaArr(temp);
  }

  if (ideaArr.length > 0) {
    return (
    <div className='ideaBlob'>
    {ideaArr.map((idea, index) => (
    <div key={index}>
    <h1 >{idea}</h1>
    <button className='delete' onClick={() => handleDelete(index)}>delete</button>
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
