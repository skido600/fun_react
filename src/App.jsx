import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./Components/Form";
import Todo from "./Components/Todo";
function App() {
  return (
    <>
      <div className="grid lg:flex lg:justify-center h-screen items-center    bg-slate-500">
        <Form />
        <Todo />
      </div>
    </>
  );
}

export default App;
