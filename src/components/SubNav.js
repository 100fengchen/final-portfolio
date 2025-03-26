import React, { useState, useEffect, useRef } from "react";
import Arrow from "../visual/Arrow.svg";
import ServiceDesignMenu from "./ServiceDesignMenu";
import IndustrialDesignMenu from "./IndustrialDesignMenu";
import PersonalLogo from "../visual/Logo_PF.svg";

export default function SubNav({
  setIsHovering,
  isHovering,
  setIsCreatingJourneyHovered,
  hoveredItem,
  sethoveredItem,
  setIsClicked,
}) {
  const productContainerRef = useRef(null); // create a ref for the ProductContainer

  const [containerWidth, setContainerWidth] = useState(0);

  const [hoveredMenu, setHoveredMenu] = useState(null);

  const updateWidth = () => {
    if (productContainerRef.current) {
      setContainerWidth(productContainerRef.current.offsetWidth);
      console.log("width is", productContainerRef.current.offsetWidth);
    }
  };

  useEffect(() => {
    // Initial width update
    updateWidth();

    // Add event listener for window resize
    window.addEventListener("resize", updateWidth);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  const handleMouseEnterButton = (menuName) => {
    setHoveredMenu(menuName);
    setIsHovering(true);
  };

  const handleMouseLeaveButton = () => {
    setIsHovering(false);
    setHoveredMenu(null);
  };

  return (
    <div className="subnavcontainer">
      <div className="line"></div>
      <div className="SubNav">
        <div className="Pbutton" id="mywork">
          <img
            src={PersonalLogo}
            alt="This is my personal logo"
            className="pLogo"
          />
          <div className="P-Text">Pai-Feng Chen's Work </div>
        </div>
        <div className="Itemshow">
          <div className="ProductContainer" ref={productContainerRef}>
            <div className="Vrt endline front"></div>

            {/* Service Design Button */}
            <div
              className="Pbutton"
              onMouseEnter={() => handleMouseEnterButton("ServiceDesignMenu")}
              onMouseLeave={handleMouseLeaveButton}
            >
              {hoveredMenu === "ServiceDesignMenu" && (
                <ServiceDesignMenu
                  hoveredItem={hoveredItem}
                  sethoveredItem={sethoveredItem}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  setIsClicked={setIsClicked}
                  containerWidth={containerWidth}
                />
              )}
              <div className="P-Text">Service Design & UXUI</div>
              <img
                className="Arrow"
                src={Arrow}
                alt="This is an arrow"
                style={{
                  transform:
                    hoveredMenu === "ServiceDesignMenu"
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                }}
              />
            </div>

            <div className="Vrt"></div>

            {/* Industrial Design Button */}

            <div
              className="Pbutton secondPbutton"
              onMouseEnter={() =>
                handleMouseEnterButton("IndustrialDesignMenu")
              }
              onMouseLeave={handleMouseLeaveButton}
            >
              {hoveredMenu === "IndustrialDesignMenu" && (
                <IndustrialDesignMenu
                  hoveredItem={hoveredItem}
                  sethoveredItem={sethoveredItem}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  setIsClicked={setIsClicked}
                  containerWidth={containerWidth}
                />
              )}
              <div className="P-Text">Industrial Design</div>
              <img
                className="Arrow"
                src={Arrow}
                alt="This is an arrow"
                style={{
                  transform:
                    hoveredMenu === "IndustrialDesignMenu"
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                }}
              />
            </div>

            <div className="Vrt endline"></div>
          </div>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
}
