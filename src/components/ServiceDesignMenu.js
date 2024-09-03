import React from 'react';

export default function ServiceDesignMenu({ onMouseEnter, onMouseLeave, onCreatingJourneyEnter, onCreatingJourneyLeave, hoveredItem, sethoveredItem ,setIsClicked, containerWidth}) { 
  
  const handleMouseEnter =(itemId)=>{
    sethoveredItem (itemId);
  }
  
  const handleMouseLeave = ()=>{
    sethoveredItem (null);
  }  

  const handleMousecliked = (itemId) => {
    console.log("Clicked item:", itemId);
    setIsClicked(itemId);
  };
  
  return (
    <div className="Menu"  
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        width:containerWidth
      }}
      >
      <div className = "Gap"> </div>
      <button  
        type="button" 
        className="MenuItem" 
        onMouseEnter={() => handleMouseEnter('CreatingAnInformedJourney')}
        onMouseLeave={handleMouseLeave}
        >Creating an informed journey
        </button >
      <button  
        type="button" 
        className="MenuItem"
        onMouseEnter={() => handleMouseEnter('MeetLuotsi')}
        onMouseLeave={handleMouseLeave}
        > Meet Luotsi </button > 

      <button  
      type="button" 
      className="MenuItem"
      onMouseEnter={() => handleMouseEnter('SpotOn')}
      onMouseLeave={handleMouseLeave}
      onClick={()=>handleMousecliked('SpotOn')}
      > 
      SpotOn 
      </button >

      <button  
      type="button" 
      className="MenuItem"
      // onMouseEnter={() => handleMouseEnter('SpotOn')}
      // onMouseLeave={handleMouseLeave}
      // onClick={()=>handleMousecliked('SpotOn')}
      > 
      Hopealinja 
      </button >

      <button  
      type="button" 
      className="MenuItem"
      // onMouseEnter={() => handleMouseEnter('SpotOn')}
      // onMouseLeave={handleMouseLeave}
      // onClick={()=>handleMousecliked('SpotOn')}
      > 
      Panorama 
      </button >


    </div>
  );
}
