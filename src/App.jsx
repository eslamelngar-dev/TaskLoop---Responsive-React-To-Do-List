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
import Snackbars from "./SnackBar";
import { SnackBarContext } from "./Contexts/SnackBarContext";

function App() {
  const [todos, setToDos] = useState([]);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  function showSnackBar(msg) {
    setMessage(msg)
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    },3500);
  }
  return (
    <>
      <CssBaseline />
      <todosContext.Provider value={{ todos, setToDos }}>
        <SnackBarContext.Provider value={{ showSnackBar }}>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              {/* To-Do List  */}
              <Route path="/todolist" element={<ToDoList />} />
              {/* About  */}
              <Route path="/about" element={<About />} />
              {/* Error Page  */}
              <Route path="*" element={<Page404 />} />
            </Routes>
            {/* SnackBar Message  */}
            <Snackbars open={open} message={message} />
            {/* Footer  */}
            <Footer />
          </BrowserRouter>
        </SnackBarContext.Provider>
      </todosContext.Provider>
    </>
  );
}

export default App;
