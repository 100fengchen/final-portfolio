import React, { useState } from "react";
import "./App.css";
import Nav from './components/Nav';
import SubNav from "./components/SubNav";
import Article from "./components/Article";
import CreatingAnInfromedJourney from "./components/Projects/CreatingAnInfromedJourney"


function App() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isCreatingJourneyHovered, setIsCreatingJourneyHovered] = useState(false);


  return (
    <>
      <body>
        <Nav />
        <div style={{ position: "relative" }}>
          <SubNav
            isHovering={isHovering}
            setIsHovering={setIsHovering}
            setIsCreatingJourneyHovered={setIsCreatingJourneyHovered}
          />
        </div>
        <Article
        isHovering={isHovering}
        setIsHovering={setIsHovering}
        
         />
         {isCreatingJourneyHovered && <CreatingAnInfromedJourney/>}
      </body>
    </>
  );
}

export default App;