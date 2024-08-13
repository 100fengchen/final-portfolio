import React, { useState } from 'react';
import Arrow from '../visual/Arrow.svg';
import ServiceDesignMenu from './ServiceDesignMenu';

export default function SubNav({ setIsHovering, isHovering, itemClick }) {

    // const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

    const handleMouseEnterButton = (e) => {
        setIsHovering(true);
    };  

    const handleMouseLeaveButton = () => {
        setTimeout(setIsHovering(false) , 1000); // Small delay to allow the mouse to move to the dropdown menu
    };

    const handleMouseEnterMenu = () => {
        setIsHovering(true); // Keep the menu open when the mouse is over it
    };

    const handleMouseLeaveMenu = () => {
        setIsHovering(false); // Close the menu when the mouse leaves it
    };

    return (
        <div className="subnavcontainer">
            <div className="line"></div>
            <div className="SubNav">
                <div className="Pbutton" id="mywork">
                    <div className="PBox">My Work</div>
                </div>
                <div className="Itemshow">
                    <div className="ProductContainer">
                        <div className="Vrt endline front"></div>
                        <section
                            className="Pbutton"
                            onMouseEnter={handleMouseEnterButton}
                            onMouseLeave={handleMouseLeaveButton}
                        >
                            <div className="PBox">Service Design</div>
                            <img className="Arrow" src={Arrow} alt="This is an arrow" /> 
                        </section>
                        {isHovering && (
                            <ServiceDesignMenu
                                onMouseEnter={handleMouseEnterMenu}
                                onMouseLeave={handleMouseLeaveMenu}
                                isClick={itemClick}
                            />
                            )}
                        <div className="testbox"></div>
                        <div className="Vrt"></div>
                        <section className="Pbutton">
                            <div className="PBox">Interaction Design</div>
                            <img className="Arrow" src={Arrow} alt="This is an arrow" />
                        </section>
                        <div className="Vrt"></div>
                        <section className="Pbutton">
                            <div className="PBox">Industrial Design</div>
                            <img className="Arrow" src={Arrow} alt="This is an arrow" />
                        </section>
                        <div className="Vrt endline"></div>
                    </div>
                </div>
            </div>
            <div className="line"></div>
        </div>
    );
}