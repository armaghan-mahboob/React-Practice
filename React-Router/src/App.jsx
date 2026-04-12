import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-1 flex justify-center items-center bg-slate-600 text-amber-50">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
