import React from "react";
import Header from "../layout/Header";
import Banner from "./Banner";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div>
        <Banner />
      </div>
    </div>
  );
}

export default App;
