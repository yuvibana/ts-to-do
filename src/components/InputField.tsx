import React, { useRef } from 'react'


interface props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}


const InputField: React.FC<props> = ({ todo, setTodo, handleAdd }) => {
    // const InputField = ({ todo, setTodo }: props) => {

    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <form
            className=' w-full inputForm'
            onSubmit={(e) => {
                handleAdd(e)
                inputRef.current?.blur();
            }}
        >
            <div className='inputbox_wrapper relative'>
                <input
                    className='input_Box w-full bg-white rounded-3xl text-2xl border-0  py-5 px-4 outline-0 placeholder:text-black text-black'
                    placeholder='Enter a Task'
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    ref={inputRef}
                />
                <button
                    className='input_submit py-2 px-5 text-2xl bg-cyan-600 absolute ring-0 text-white'
                >Go</button>
            </div>
        </form>
    )
}

export default InputField