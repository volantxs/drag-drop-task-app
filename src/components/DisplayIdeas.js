export function DisplayIdeas(props) {
    function handleDelete(text) {
        const temp = props.ideaArr.filter((idea) => {
          return idea !== text
        });
        props.setIdeaArr(temp);
      }
    
      if (props.ideaArr.length > 0) {
        return (
         props.ideaArr.map((idea, index) => (
        <div 
          key={index}  
          className='ideaSpeck' 
          draggable="true"
          onDragStart={props.onDragStart} 
          id={"drag-"+ (new Date()).getTime()}>
        <button className='deleteBtn' onClick={() => handleDelete(idea)}>x</button>
        <p>{idea}</p>
        </div>
        ))
    
        )
      } else {
        return (
        <div>
          <p>No ideas yet</p>
        </div>
        )
      
      }

}
