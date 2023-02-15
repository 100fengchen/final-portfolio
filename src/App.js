import React, {useState} from "react";
import "./App.css"
import Nav from './components/Nav';
import SubNav from "./components/SubNav";
import Article from "./components/Article";
import ServiceDesignMenu from './components/ServiceDesignMenu'

function App() {
  return (
    <>
    <body>
      <Nav />
      <SubNav />
      <Article />
      <ServiceDesignMenu />
    </body>
    </>
  );
}

export default App;
