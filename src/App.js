import React, { useState } from "react";
import "./App.css";
import Nav from './components/Nav';
import SubNav from "./components/SubNav";
import Article from "./components/Article";
import CreatingAnInfromedJourney from "./components/Projects/CreatingAnInfromedJourney";
import SpotOn from "./components/Projects/SpotOn";
import SpotOnContent from "./components/Projects/SpotOnContent";
import MeetLuotsi from "./components/Projects/MeetLuotsi";
import HopeaLinja from "./components/Projects/HopeaLinja";
import Panorama from "./components/Projects/Panorama";

function App() {
  const [isHovering, setIsHovering] = useState(false);
  
  const [isClickedItem, setIsClicked] = useState(null);

  const [isCreatingJourneyHovered, setIsCreatingJourneyHovered] = useState(false);

  const [isVisible, setIsVisible] = useState(true);
  
  const [hoveredItem, sethoveredItem] = useState(null);

  const shouldHideArticle = hoveredItem
  


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
        {!shouldHideArticle && <Article
                                isHovering={isHovering}
                                setIsHovering={setIsHovering}
                                />
        }

        {hoveredItem === 'CreatingAnInformedJourney' && <CreatingAnInfromedJourney />}
        {hoveredItem === 'SpotOn' && <SpotOn />}
        {hoveredItem === 'MeetLuotsi' && <MeetLuotsi />}
        {hoveredItem === 'HopeaLinja' && <HopeaLinja />}
        {hoveredItem === 'Panorama' && <Panorama />}
        {/* {isClickedItem === 'SpotOnContent' && <SpotOn />} */}
      </body>
    </>
  );
}

export default App;


// "homepage": "https://100fengchen.github.io/final-portfolio", in pachaje.json