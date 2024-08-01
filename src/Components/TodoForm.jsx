import React, { useState } from 'react';
import { useTodo } from '../Contexts/TodoContext';

function TodoForm() {

    const [todo, setTodo] = useState("");
    const { addTodo } = useTodo();

    const add = (e) => {
        e.preventDefault();
        if (!todo) {
            return
        }
        addTodo({ todo, completed: false });
        setTodo("")
    }

    return (
        <form className="flex" onSubmit={add}>
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-slate-200 focus:border-slate-500 rounded-l-lg px-3 outline-none duration-150 bg-zinc-800 py-1.5  shadow-2xl placeholder:text-slate-300"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-zinc-900 border text-white shrink-0 focus:border-slate-500">
                Add
            </button>
        </form>
    );
}

export default TodoForm;