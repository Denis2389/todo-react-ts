import { useEffect, useState } from "react"
import TodoItem from '../TodoItem/TodoItem'
import styles from './TodoList.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface Todo {
    id: number,
    text: string,
}

function TodoList () {

const [todos, setTodos] = useState<Todo[]>([]);
const [value, setValue] = useState<string>('');

useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
        setTodos(JSON.parse(storedTodos))
    }
}, [])

const handleAdd = () => {
    if (value.trim()) {
        const item = {
          id: Date.now(),
          text: value,
        };
        const newTodos = [...todos, item]
        setTodos(newTodos)
        toast.success('Task added', {
          progressClassName: 'custom-toast-progress'
        })
        setValue('')

        localStorage.setItem('todos', JSON.stringify(newTodos))
    }
}

const handleDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
    toast.success('Task delete', {
      progressClassName: 'custom-toast-progress'
    })
}

const handleKeyDows = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        handleAdd();
    }
}

    return (
      <div className={styles.todo}>
        <div className={styles.wrapper}>
          <input
            type="text"
            value={value}
            placeholder="Add todos.."
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDows}
          />
          <button className={styles.dltBtn} onClick={handleAdd}>
            Add
          </button>
          <ToastContainer
            position="top-right"
            autoClose={1500}
            hideProgressBar={true}
            pauseOnHover={true}
            closeButton={false}
          />

          <ul>
            {todos.length === 0 ? (
              <p>You dont have tasks, relax...</p>
            ) : (
              <TodoItem todos={todos} handleDelete={handleDelete} />
            )}
          </ul>
        </div>
      </div>
    );
}

export default TodoList