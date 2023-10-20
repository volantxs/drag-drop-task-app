import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const Record = (props) => (
      <div className="card col-sm-2" style={{width: '18rem'}} >
        <Link className='btn btn-link' to={'edit/${props.record._id}'}>Edit</Link>
        <button className="btn btn-link"
       onClick={() => {
         props.deleteRecord(props.record._id);
       }}
     >Delete</button>
      <div className="card-body">
      <h5 className="card-title" placeholder="Task">{props.record.title}</h5>
      <h6 className="card-subtitle mb-2 text-muted fw-normal">{props.record.subtitle}</h6>

        <dl className="list-group list-group-flush p-2 "  id="droppable"  >
        </dl>
        <input type="submit" value="Add card" className="btn btn-dark "/>
      </div>
    </div>
   
);

export default function RecordList() {
    const [records, setRecords] = useState([]);
    // Fetching data from the database
    useEffect(() => {
        async function getRecords() {
            const response = await fetch('http://localhost:5000/record/');
            if (!response.ok) {
                const message = 'An arror occured: ${response.statusText}';
                alert(message);
                return;
            }
            const records = await response.json();
            setRecords(records);
        }
        getRecords();
        return;
    }, [records.length]);

    async function deleteRecord(id) {
        await fetch('http://localhost:5000/${id}', {
            method: 'DELETE'
        });
        const newRecords = records.filter((item) => item._id !== id);
        setRecords(newRecords);
    }

    function displayRecords() {
        return records.map((record) => {
            return (
                <Record
                  record= {record}
                  deleteRecord={() => deleteRecord(record._id)}
                  key={record._id}  
                    />
            );
        });
    }

    
}

