import "./App.css";
import Page404 from "./Components/Page404/Page404";
import ToDoList from "./Components/ToDoList";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { todosContext } from "./Contexts/todosContext";
import Footer from "./Footer";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import About from "./About";

function App() {
  const [todos, setToDos] = useState([]);

  return (
    <>
      <CssBaseline />
      <todosContext.Provider value={{ todos, setToDos }}>
        <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/todolist" element={<ToDoList />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </todosContext.Provider>
    </>
  );
}

export default App;
