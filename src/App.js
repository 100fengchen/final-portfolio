import React, { useState } from "react";
import "./App.css";
import Nav from './components/Nav';
import SubNav from "./components/SubNav";
import Article from "./components/Article";

// import Example_product from './components/Example_product';

function App() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isItemClicked, setIsItemClicked] = useState(false);


  return (
    <>
      <body>
        <Nav />
        <div style={{ position: "relative" }}>
          <SubNav
            isHovering={isHovering}
            setIsHovering={setIsHovering}
            itemClick={isItemClicked}
          />
        </div>
        <Article
        isHovering={isHovering}
        setIsHovering={setIsHovering}
        itemClick={isItemClicked}
         />
        
      </body>
    </>
  );
}

export default App;