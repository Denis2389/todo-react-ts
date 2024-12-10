import { useEffect, useState } from "react"
import TodoItem from '../TodoItem/TodoItem'
import styles from './TodoList.module.css'

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
        setValue('')

        localStorage.setItem('todos', JSON.stringify(newTodos))
    }
}

const handleDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
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

          <ul>
            <TodoItem todos={todos} handleDelete={handleDelete} />
          </ul>
        </div>
      </div>
    );
}

export default TodoList