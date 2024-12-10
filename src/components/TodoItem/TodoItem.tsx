interface Todo {
    id: number,
    text: string,
}

interface TodoItemProps {
    todos: Todo[],
    handleDelete: (id: number) => void
}


const TodoItem: React.FC<TodoItemProps> = ({ todos, handleDelete}) => {
    return (
      <>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </>
    );
}

export default TodoItem