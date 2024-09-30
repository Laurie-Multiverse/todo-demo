import './App.css'
import ListItem from './components/ListItem'

function App() {
  const data = [
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
  ];
  
  return (
    <>
      <h1>To Do List</h1>
      <ol>
        <ListItem data={data[0]}/>
        <ListItem data={data[1]}/>
        <ListItem data={data[2]}/>
      </ol>
    </>
  )
}

export default App
