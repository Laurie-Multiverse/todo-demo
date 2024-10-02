import './App.css'
import { useState } from 'react'
import ListItem from './components/ListItem'
import Form from './components/Form'

function App() {
  const [ showList, setShowList ] = useState( true )
  const [ showForm, setShowForm ] = useState( false)

  const [data, setData] = useState([
    {
      id: 1,
      title: "Have Breakfast",
      description: "2 eggs on toast",
      time: "7am",
    },
    {
      id: 2,
      title: "Cardio",
      description: "Jog 5km",
      time: "8am",
    },
    {
      id: 3,
      title: "Start Work",
      description: "Log onto machine and open all relevant software",
      time: "9am",
    },
    {
      id: 4,
      title: "Coffee Break",
      description: "mmm good",
      time: "10am"
    }
  ]);

  function handleClick() {
    setShowList( !showList );
  }

  function toggleShowForm() {
    setShowForm( !showForm )
  }
  
  return (
    <>
      <h1>To Do List</h1>
      <button onClick={handleClick}>{showList ? "Hide" : "Show"} List</button>
      <button onClick={toggleShowForm}>add new item</button>
      {
        showForm &&
        <Form data={data} setData={setData} toggleShowForm={toggleShowForm} />
      }
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

export default App
