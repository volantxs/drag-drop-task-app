export function DisplayIdeas(props) {
    function handleDelete(text) {
        const temp = props.ideaArr.filter((idea) => {
          return idea !== text
        });
        props.setIdeaArr(temp);
      }
      function onDragStart(e) {
        e.dataTransfer.setData("text", e.target.id);
      }
      if (props.ideaArr.length > 0) {
        return (
         props.ideaArr.map((idea, index) => (
        <dd 
          key={index}  
          className='alert alert-primary' 
          draggable="true"
          onDragStart={(e) => onDragStart(e)}
          id={"drag-"+ (new Date()).getTime()}>
        {/* <button className='deleteBtn' onClick={() => handleDelete(idea)}>x</button> */}
        {idea}
        </dd>
        ))
        )
      } else {
        return (
        <div class="alert alert-danger" role="alert">
          No tasks yet! -- Create card and assign tasks to get started
        </div>
        )
      
      }

}
