import React, {useState} from "react";
import "./App.css"
import Nav from './components/Nav';
import SubNav from "./components/SubNav";
import Article from "./components/Article";

function App() {
  return (
    <>
    <body>
      <Nav />
      <SubNav />
      <Article />
    </body>
    </>
  );
}

export default App;
