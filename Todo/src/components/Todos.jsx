import React from "react";
import { Input } from "./index";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../store/todoSlice";

function Todos({ editingTodo, setEditingTodo }) {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center items-center mt-10">
      <div
        className="w-2/4 flex flex-col rounded-3xl p-6 gap-4 mt-10
          bg-linear-to-b from-[#1c1917] to-[#261f1c]
          border border-white/10
          shadow-[0_32px_64px_rgba(0,0,0,0.5)]"
      >
        {!todos.length ? (
          <h1 className="text-stone-500 text-3xl text-center font-light tracking-widest py-10 uppercase">
            No todos to show
          </h1>
        ) : (
          todos?.map((todo) => {
            return (
              <div key={todo?.id} className="w-full flex flex-row gap-3 p-2">
                {/* Todo text card */}
                <div
                  className="w-full h-16 px-5 
                    bg-white/5 border border-white/10
                    rounded-2xl
                    flex items-center
                    text-stone-200 text-sm font-light tracking-wide
                    shadow-inner"
                >
                  {todo?.text}
                </div>

                {/* Edit button */}
                <button
                  className={`rounded-2xl px-5 py-4 text-base
                    border transition-all duration-200
                    ${
                      editingTodo?.id === todo.id
                        ? "bg-white/5 border-white/10 text-stone-600 cursor-not-allowed"
                        : "bg-amber-500/10 border-amber-500/30 text-amber-400 hover:bg-amber-500/20 hover:border-amber-400/60 hover:shadow-[0_0_16px_rgba(245,158,11,0.2)] cursor-pointer"
                    }`}
                  onClick={() => setEditingTodo(todo)}
                  disabled={editingTodo?.id === todo.id}
                >
                  ✏️
                </button>

                {/* Delete button */}
                <button
                  disabled={editingTodo?.id === todo.id}
                  className={`px-5 py-4 rounded-2xl
                    border transition-all duration-200
                    ${
                      editingTodo?.id === todo.id
                        ? "bg-white/5 border-white/10 text-stone-600 cursor-not-allowed"
                        : "bg-rose-500/10 border-rose-500/30 text-rose-400 hover:bg-rose-500/20 hover:border-rose-400/60 hover:shadow-[0_0_16px_rgba(244,63,94,0.2)] cursor-pointer"
                    }`}
                  onClick={() => {
                    dispatch(removeTodo(todo?.id));
                  }}
                >
                  ❌
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Todos;
