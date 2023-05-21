import React from "react";
import './App.css';
import { Navbar } from './components/Navbar';
import { LeftSidebar } from "./components/LeftSidebar";
import { Main } from "./components/Main";
import { RightSidebar } from "./components/RightSidebar";

function App() {
  return (
    <>
      <Navbar/>
      <div className="container">
      <LeftSidebar/>
      <Main/>
      <RightSidebar/>
      </div>
    </>
  );
}

export default App;
