import React, { useEffect, useRef, useState } from 'react'
import { Todo } from './Model'

type props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({ todo, todos, setTodos }: props) => {

    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    const inputRef = useRef<HTMLInputElement>(null)

    const handleDone = (id: Number) => setTodos(todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))

    const handleDelete = (id: number) => setTodos(todos.filter((todo) => todo.id !== id));

    const handelEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo)))
        setEdit(false)
    }

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit])

    return <form
        onSubmit={(e) => handelEdit(e, todo.id)}
        className='todos_single mb-3'>
        <div className="flexdiv flex w-full justify-between p-4 rounded-lg bg-yellow-400">
            {edit ? (
                <input
                    className=' bg-white p-1 rounded w-1/2 outline-0 border'
                    onChange={(e) => setEditTodo(e.target.value)}
                    value={editTodo}
                    ref={inputRef}
                />
            ) : (
                todo.isDone ? (<s className="todos_single_text">{todo.todo}</s>)
                    : (<span className="todos_single_text">{todo.todo}</span>)
            )}


            <div className="icns_wrapper flex gap-2">
                <span className=" cursor-pointer hover:text-white edit"
                    onClick={() => {
                        if (!edit && !todo.isDone) { setEdit(!edit) }

                    }}
                >Edit</span>
                <span className=" cursor-pointer hover:text-white delete"
                    onClick={() => handleDelete(todo.id)}
                >Delete</span>
                <span className=" cursor-pointer hover:text-white done"
                    onClick={() => handleDone(todo.id)}
                >Done</span>
            </div>
        </div>
    </form >

}

export default SingleTodo