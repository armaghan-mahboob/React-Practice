import { Provider } from "react-redux";
import { AddTodo, Input, Todos } from "./components/index";
import store from "./store/store";
import { useState } from "react";

function App() {
  const [editingTodo, setEditingTodo] = useState(null);
  return (
    <Provider store={store}>
      <div
        className="min-h-screen p-10 bg-[radial-gradient(ellipse_at_top,#2d1b69_30%,#1e1b4b_50%,#1a1035_75%,#0f0a1e_100%)]
 bg-fixed"
      >
        <AddTodo editingTodo={editingTodo} setEditingTodo={setEditingTodo} />
        <Todos editingTodo={editingTodo} setEditingTodo={setEditingTodo} />
      </div>
    </Provider>
  );
}

export default App;
