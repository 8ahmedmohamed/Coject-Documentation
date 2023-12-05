import React from "react";

import RouteProvider from './Routes/RouteProvider'

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <RouteProvider>
      </RouteProvider>
    </React.Fragment>
  );
}

export default App;
