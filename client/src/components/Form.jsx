import { useState } from 'react';

function Form({data, setData, toggleShowForm}) {
    const [ title, setTitle ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ time, setTime ] = useState("");

    function submitHandler(e) {
        e.preventDefault();
        const newTask = {title, description, time};

        // data.push(newTask)
        setData([ ...data, newTask]);
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