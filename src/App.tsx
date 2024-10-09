import React, { FC, ChangeEvent ,useState } from "react"
 
const App: FC = () => {

  const [task, setTask] = useState<string>("")
  const [deadlint, setDeadline] = useState<number>(0)
  const [todo, setTodoList] = useState([])

  const handleChange = (event :ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === 'task') {
      setTask(event.target.value)
    } else {
      setDeadline(Number(event.target.value))
    }
  }

  const addTask = (): void => {
    
  }

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
        <input type='text' placeholder="Task..." name='task' onChange={handleChange}/>
        <input type='number' placeholder="Deadlint (in Days)..." name="deadline" onChange={handleChange}/>
        </div>
        <button>Add Task</button>
      </div>
      <div className="todolist"></div>
    </div>
  )
}

const Todolist = () => {

}


export default App
