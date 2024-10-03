import { useState } from 'react';

function Form({setNewPost, toggleShowForm}) {
    const [ title, setTitle ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ time, setTime ] = useState("");

    async function submitHandler(e) {
        e.preventDefault();
        const newTask = {title, description, time};

        // send (or POST) our new task to the back end
        await fetch("http://localhost:3000/todos", {
            method: "POST",
            body: JSON.stringify(newTask),
            headers: {'Content-Type': 'application/json'}
        })

        setNewPost(true);

        toggleShowForm();

        // clear out the fields
        setTitle("");
        setDescription("");
        setTime("");
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="Title" value={title} onChange={ (e) => setTitle(e.target.value)}/>
            <input type="text" placeholder="Description" value={description}  onChange={ (e) => setDescription(e.target.value)}/>
            <input type="text" placeholder="Time" value={time}  onChange={ (e) => setTime(e.target.value)}/>
            <button type="submit">add new task</button>
        </form>
    )

}

export default Form;