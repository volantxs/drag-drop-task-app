import { useState } from "react";

export function TaskCard(props) {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
    function handleDrop(e) {
        e.preventDefault();
        var data = e.dataTransfer.getData("text");
        if (e.target.id == 'droppable'){
        e.target.appendChild(document.getElementById(data));
        } else {alert("Non-droppable zone" + (e.target.id))}
      }
      function handleOnDragover(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move"
        }
      function handleTitle(e) {
        e.preventDefault();
        setTitle(e.target.value);
      }
      function handleSubTitle(e) {
        e.preventDefault();
        setSubTitle(e.target.value);
      }
      function handleAdd(e) {
        const removeInput = document.getElementById(e.target.parentElement.id)
        removeInput.style.display = "none";

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
            onDrop={(e) => handleDrop(e)} 
            onDragOver={(e) => handleOnDragover(e)}>
              <div className="card " >
                <div className="">
                </div>
              <div className="card-body">
                <div className="input-group mb-3" id={"t" + (new Date).getSeconds()}>
                <input className="form-control rounded-pill border-0 border-bottom" type="text" placeholder="Title" onChange={(e) => handleTitle(e)} />
                 <button className="btn fw-bold text-success" onClick={(e) => {handleAdd(e)}}>[+]</button>
                </div>
                <h5 className="card-title" placeholder="Task">{title}</h5>
                <div className="input-group mb-3" id={"st" + (new Date).getMilliseconds()}>
                <input className="form-control rounded-pill border-0 border-bottom" type="text" placeholder="Sub Title" onChange={(e) => handleSubTitle(e)} />
                 <button className="btn fw-bold text-success " onClick={(e) => {handleAdd(e)}}>[+]</button>
                </div>
                <h6 className="card-subtitle mb-2 text-muted fw-normal">{subTitle}</h6>
              <hr></hr>
                <ol className="list-group list-group-flush" id="droppable">
                  <p className="text-center text-secondary">drop here</p>
                </ol>
              </div>
            </div>
            </div>)
         }))} 
          </div>
        </div>


        );
    }   
}
