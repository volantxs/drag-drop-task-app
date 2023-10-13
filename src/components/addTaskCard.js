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
        <div className="container-fluid">
          <div className="row g-2">
         {props.cardsID.map((cardID => {
          return (
          <div
            key={cardID}
            className="col-sm-2"
            style={{width: '18rem'}}
            id='droppable' 
            onDrop={(e) => handleDrop(e)} 
            onDragOver={(e) => handleOnDragover(e)}>
              <div className="card " >
                <div className="">
                </div>
              <div className="card-body">
                <h5 className="card-title">Task Title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Task subtitle</h6>
                <dl className="list-group list-group-flush">
                </dl>
                <a href="#" className="card-link">Build Link</a>
              </div>
            </div>
            </div>)
         }))} 
          </div>
        </div>


        );
    }   
}
