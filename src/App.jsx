import { useState } from "react";
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask";


const pendingTasks = [
  {
    id: 1,
    notas: 'Comprar leche y pan',
    dia: '2023-04-23',
    recordar: true
  },
  {
    id: 2,
    notas: 'Llamar al dentista para pedir cita',
    dia: '2023-04-25',
    recordar: false
  },
  {
    id: 3,
    notas: 'Enviar el informe al jefe',
    dia: '2023-04-28',
    recordar: true
  },
  {
    id: 4,
    notas: 'Comprar regalo de cumpleaños para mi hermana',
    dia: '2023-05-01',
    recordar: true
  }
]


function App() {

  const [showAddTask, SetShowAddTask] = useState(false);
  const [tasks, setTasks] = useState(pendingTasks);

  //Function add task
  const addTask = (task) =>{
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    console.log(newTask);
    setTasks([...tasks, newTask]);
  }


  //Function delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  //Function toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? {
          ...task, recordar:
            !task.recordar
        } : task
      )
    )
  }

  return (
    <div className="container">
      <Header 
      onAdd={()=>SetShowAddTask(!showAddTask)}
      showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />)
        : ('No hay tareas pendientes'
        )}
        
    </div>
  )
}

export default App
