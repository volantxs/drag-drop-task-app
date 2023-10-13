export function TaskCard(props) {
    function handleDrop(e) {
        e.preventDefault();
        var data = e.dataTransfer.getData("text");
        e.target.appendChild(document.getElementById(data));
      }
      function handleOnDragover(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move"
        }

    if ((props.cardsID).length > 0) {
      return (
          <div  className="row g-2 align-self-center">
         {props.cardsID.map((cardID => {
          return (<div
            key={cardID}
            className='_taskCard col-sm-3'
            id='droppable' 
            onDrop={(e) => handleDrop(e)} 
            onDragOver={(e) => handleOnDragover(e)}>
            </div>)
         }))} 
          </div>

        );
    }   
}
