import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Sidebar/>
    </React.Fragment>
  );
}

export default App;
