import React, { useState } from 'react'
import './App.css'
import InputField from './components/InputField'
import { Todo } from './components/Model'
import TodoList from './components/TodoList'

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }])
    setTodo("");
  }

  return (
    <div className='App flex justify-center items-center h-svh w-full bg-cyan-600 text-center'>
      <div className='centerd_div'>
        <div className='heade_section'>
          <h1 className="text-3xl uppercase text-center text-white mb-3">taskify</h1>
          <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        </div>
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  )
}

export default App
