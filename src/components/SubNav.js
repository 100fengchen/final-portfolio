import React, { useState, useEffect ,useRef } from 'react';
import Arrow from '../visual/Arrow.svg';
import ServiceDesignMenu from './ServiceDesignMenu';
import PersonalLogo from '../visual/Logo_PF.svg';

export default function SubNav({ setIsHovering, isHovering,setIsCreatingJourneyHovered, hoveredItem, sethoveredItem, setIsClicked}) {

    const productContainerRef = useRef(null); // Create a ref for the ProductContainer
    const [containerWidth, setContainerWidth] = useState(0); // State to store the width


    const updateWidth = () => {
        if (productContainerRef.current) {
            setContainerWidth(productContainerRef.current.offsetWidth);
            console.log('width is', productContainerRef.current.offsetWidth )
        }
    };

    useEffect(() => {
        // Initial width update
        updateWidth();

        // Add event listener for window resize
        window.addEventListener('resize', updateWidth);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateWidth);
        };
    }, []);



    
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

    const handleMouseEnterJourney = () => {
        setIsCreatingJourneyHovered(true);
    };

    const handleMouseLeaveJourney = () => {
        setIsCreatingJourneyHovered(false);
    };



    return (
        <div className="subnavcontainer">
            <div className="line"></div>
            <div className="SubNav">
                <div className="Pbutton" id="mywork">
                    <img src={PersonalLogo} alt="This is my personal logo" className='pLogo' /> 
                    <div className="PBox">Pai-Feng Chen's Work  (work in progres) </div>  
                </div>
                <div className="Itemshow">
                    <div className="ProductContainer"  ref={productContainerRef}>
                        <div className="Vrt endline front"></div>
                        <div
                            className="Pbutton"
                            onMouseEnter={handleMouseEnterButton}
                            onMouseLeave={handleMouseLeaveButton}
                        >
                            {isHovering && (
                            <ServiceDesignMenu
                                hoveredItem={hoveredItem}
                                sethoveredItem={sethoveredItem} 
                                onMouseEnter={handleMouseEnterMenu}
                                onMouseLeave={handleMouseLeaveMenu}
                                setIsClicked={setIsClicked}
                                containerWidth = {containerWidth}
                                
                                />
                            )}
                            <div className="PBox">Service Design & UXUI</div>
                            <img 
                            className="Arrow" 
                            src={Arrow} 
                            alt="This is an arrow" 
                            style={{
                                transform: isHovering ? 'rotate(180deg)' : 'rotate(0deg)',
                              }}
                            /> 
                        </div>
                        <div className="testbox"></div>
                        <div className="Vrt"></div>
                        <div className="Vrt"></div>
                        <div className="Pbutton">
                            <div className="PBox">Industrial Design</div>
                            <img className="Arrow" src={Arrow} alt="This is an arrow" />
                        </div>
                        <div className="Vrt endline"></div>
                    </div>
                </div>
            </div>
            <div className="line"></div>
        </div>
    );
}