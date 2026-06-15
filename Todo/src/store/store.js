// import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from "./todoSlice";

// const store = configureStore({ reducer: { todo: todoReducer } });
// export default store;

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

const loadState = () => {
  try {
    const serialized = localStorage.getItem("todos");
    return serialized ? { todo: JSON.parse(serialized) } : undefined;
  } catch {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    localStorage.setItem("todos", JSON.stringify(state.todo));
  } catch {}
};

const store = configureStore({
  reducer: { todo: todoReducer },
  preloadedState: loadState(),
});

store.subscribe(() => saveState(store.getState()));

export default store;
