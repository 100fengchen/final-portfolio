import React, { useState } from "react";
import "./App.css";
import Nav from './components/Nav';
import SubNav from "./components/SubNav";
import Article from "./components/Article";
import CreatingAnInfromedJourney from "./components/Projects/SpotOn"
import SpotOn from "./components/Projects/SpotOn"
import SpotOnContent from "./components/Projects/SpotOnContent"


function App() {
  const [isHovering, setIsHovering] = useState(false);
  
  const [isClickedItem, setIsClicked] = useState(null);

  const [isCreatingJourneyHovered, setIsCreatingJourneyHovered] = useState(false);
  
  const [hoveredItem, sethoveredItem] = useState(null);
  


  return (
    <>
      <body>
        <Nav />
        <div style={{ position: "relative" }}>
          <SubNav
            isHovering={isHovering}
            setIsHovering={setIsHovering}
            setIsCreatingJourneyHovered={setIsCreatingJourneyHovered}
            hoveredItem = {hoveredItem}
            sethoveredItem = {sethoveredItem}
            setIsClicked = {setIsClicked}
            
          />
        </div>
        <Article
        isHovering={isHovering}
        setIsHovering={setIsHovering}
         />
         {isCreatingJourneyHovered && <CreatingAnInfromedJourney/>}
         {hoveredItem === 'SpotOn' && <SpotOn />}
         {isClickedItem === 'SpotOnContent' && <SpotOn />}
         

      </body>
    </>
  );
}

export default App;