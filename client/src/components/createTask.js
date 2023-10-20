import { useState } from "react";
import { useNavigate } from "react-router";

export function TaskCard() {
  const [card, setCard] = useState({
    title: "",
    subtitle: "",
    tasks: [],
  });

  const navigate = useNavigate();

    // These methods will update the state properties.
 function updateForm(value) {
  return setCard((prev) => {
    return { ...prev, ...value };
  });
}

// on submit
async function onSubmit(e) {
  e.preventDefault();
  // post request sent to create record url will add a record to the mongo database 
  const newCard = {...card};
  await fetch("http://localhost:5000/record/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCard),
  })
  .catch(err => {
    window.alert(err);
    return;
  });
  alert("Submitted!")

  navigate('/');

  setCard({
    title: "",
    subtitle: "",
    tasks: [],
  })

}

    function handleDrop(e) {
        e.preventDefault();
        var data = e.dataTransfer.getData("text");
        e.target.appendChild(document.getElementById(data));
      }
      function handleOnDragover(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move"
        }


      return (
        <div className="container-fluid">
          <div className="row g-2">
          <div
            className="col-sm-2"
            style={{width: '18rem'}}
           >
              <div className="card " >
              <div className="card-body">
              <h5 className="card-title" placeholder="Task">{card.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted fw-normal">{card.subtitle}</h6>
                <form className="form-group p-3" onSubmit={onSubmit} method="POST">
                <input className="form-control rounded-pill border-0 mb-3 " type="text" placeholder="Title" value={card.title} onChange={(e) => updateForm({title: e.target.value})} />
                <input className="form-control rounded-pill border-0 mb-3" type="text" placeholder="Sub Title" value={card.subtitle} onChange={(e) => updateForm({subtitle: e.target.value })} />
                <button type="submit" className="btn btn-dark ">Add Card</button>
                </form>
                <dl className="list-group list-group-flush p-2 "  id="droppable"  onDrop={(e) => handleDrop(e)} onDragOver={(e) => handleOnDragover(e)}    >
                </dl>
              </div>
            </div>
            </div>
          </div>
        </div>


        );
}
