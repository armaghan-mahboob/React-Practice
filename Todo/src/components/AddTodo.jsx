import React, { useEffect, useRef, useState } from "react";
import { Input } from "./index";
import { useDispatch } from "react-redux";
import { addTodo, upDateTodo } from "../store/todoSlice";

function AddTodo({ editingTodo, setEditingTodo }) {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  useEffect(() => {
    if (editingTodo) {
      setInput(editingTodo.text);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    }
  }, [editingTodo]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!input) return alert("Please enter a todo");
    if (editingTodo) {
      dispatch(upDateTodo({ id: editingTodo.id, text: input }));
      setEditingTodo(null);
    } else {
      dispatch(addTodo(input));
    }
    setInput("");
  };

  return (
    <>
      <h1 className="text-4xl text-center text-lime-300 mb-10 font-bold">
        Todo with Redux Toolkit
      </h1>
      <form
        onSubmit={handleAddTodo}
        className="flex flex-row gap-4 justify-center items-center"
      >
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          ref={inputRef}
        />
        <button
          type="submit"
          className={`rounded-2xl px-8 py-5 text-base font-medium tracking-wide
    border transition-all duration-200 cursor-pointer
    ${
      editingTodo
        ? "bg-yellow-300/15 border-yellow-400/40 text-yellow-300 hover:bg-yellow-500/25 hover:border-yellow-300/70 hover:shadow-[0_0_20px_rgba(167,139,250,0.3)]"
        : "bg-emerald-500/30 border-emerald-400/40 text-emerald-300 hover:bg-emerald-500/25 hover:border-emerald-300/70 hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]"
    }`}
        >
          {editingTodo ? "Update" : "Add"}
        </button>
      </form>
    </>
  );
}

export default AddTodo;
