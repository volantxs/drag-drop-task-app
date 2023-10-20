import React, { useState, useEffect} from'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function Edit() {
    const [card, setCard] = useState({
        title: "",
        subtitle: "",
        tasks: [],
    });
    // getting parameters from the route
    const params = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        async function fetchData() {
            const id = params.id.toString();
            const response = await fetch('http://localhost:5000/record/${params.id.toString()}');
            if (!response.ok) {
                const message = 'An error occured: ${response.statusText}';
                alert(message);
                return;
            }
            const record = await response.json();
            if (!record) {
                alert("Record with id ${id} not found");
                navigate('/');
                return;
            }
            setCard(record);
        }
        fetchData();
        return;
    }, [params.id, navigate]);

    function updateCard(value) {
        return setCard((prev) => {
            return {...prev, ...value};
        });
    }

    async function onSubmit(e) {
        e.preventDefault();
        const editedCard = {
            title: card.title,
            subtitle: card.subtitle,
            tasks: []
        };

        await fetch('http://localhost:5000/update/${params.id}', {
            method: "POST",
            body: JSON.stringify(editedCard),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        navigate('/');
    }

    return (
        <div>
            <h3>Update Card</h3>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='title'>Title</label>
                    <input
                      type='text'
                      className='form-control'
                      id='title'
                      value={card.title}
                      onChange={(e) => updateCard({title: e.target.value})}
                      />
                </div>
                <div className='form-group'>
                    <label htmlFor='subtitle'>Subtitle</label>
                    <input
                      type='text'
                      className='form-control'
                      id='subtitle'
                      value={card.subtitle}
                      onChange={(e) => updateCard({subtitle: e.target.value})}
                      />

                </div>
                <div className='form-group'>
                    <input type='submit' value="Update Card" className='btn btn-dark'/>
                </div>
            </form>
        </div>
    )


}