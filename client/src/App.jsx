import './App.css'

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
        <li>
          <h2>{data[0].title}</h2>
          <p>Description: {data[0].description}</p>
          <p>Time: {data[0].time}</p>
        </li>
        <li>
          <h2>{data[1].title}</h2>
          <p>Description: {data[1].description}</p>
          <p>Time: {data[1].time}</p>
        </li>
        <li>
          <h2>{data[2].title}</h2>
          <p>Description: {data[2].description}</p>
          <p>Time: {data[2].time}</p>
        </li>
      </ol>
    </>
  )
}

export default App
