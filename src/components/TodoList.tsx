import React from 'react'
import { Todo } from './Model'
import SingleTodo from './SingleTodo';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    return (
        <div className='todoList mt-5 grid grid-cols-2 gap-5'>
            {todos.map((todo) => {
                return (
                    <SingleTodo
                        key={todo.id}
                        todo={todo}
                        todos={todos}
                        setTodos={setTodos}
                    />
                )
            })}
        </div>
    )
}

export default TodoList