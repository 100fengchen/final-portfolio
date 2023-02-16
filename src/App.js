import React, {useState} from "react";
import "./App.css"
import Nav from './components/Nav';
import SubNav from "./components/SubNav";
import Article from "./components/Article";
import ServiceDesignMenu from './components/ServiceDesignMenu'
import Example_product from './components/Example_product';

function App() {
  const[isHovering, setisHovering] = useState(false);
  const[IsClicked, setIsClicked  ] = useState(false);

  const[IsItemClicked, setIsItemClicked  ] = useState(false);

  return (
    <>
    <body>
    
      <Nav />
      <SubNav hover={isHovering} hoverFunction={setisHovering} clickFunction={() => {setIsClicked(!IsClicked)}} itemclick = {IsItemClicked}/>
      <Article />
      <ServiceDesignMenu  isHovering={isHovering} isClicked={IsClicked} itemlcik={() => setIsItemClicked(!IsItemClicked)} />
      <Example_product IsItemClicked={IsItemClicked}/>
    </body>
    </>
  );
}

export default App;
