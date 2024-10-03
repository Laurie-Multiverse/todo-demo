/* eslint-disable */

import './App.css'
import { useState, useEffect } from 'react'
import ListItem from './components/ListItem'
import Form from './components/Form'

function App() {
  const [ showList, setShowList ] = useState( true )
  const [ showForm, setShowForm ] = useState( false)
  const [ newPost, setNewPost ] = useState(false)

  const [data, setData] = useState([]);

  function handleClick() {
    setShowList( !showList );
  }

  function toggleShowForm() {
    setShowForm( !showForm )
  }

  async function fetchTodos() {
    const response = await fetch("http://localhost:3000/todos");
    const todos = await response.json();
    setData(todos);
  }

  // fetchTodos();
  // To fix the problem of each fetch triggering a new update that triggers a new fetch, we need useEffect
  useEffect( () => { fetchTodos() }, [newPost])
  
  return (
    <>
      <h1>To Do List</h1>

      {
        showForm
        ? <Form setNewPost={setNewPost} toggleShowForm={toggleShowForm} />
        : (
          <> {/* Main View */ }
            <button onClick={toggleShowForm}>add new item</button>
            <button onClick={handleClick}>{showList ? "Hide" : "Show"} List</button>
            {
              showList && 
              <ol>
              {
                data.map( task => ( <ListItem key={task.id} data={task}/> ))
              }
              </ol>
            }
          </>
        )
      }
    </>
  )
}

export default App
