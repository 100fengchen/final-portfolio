import React from 'react';

export default function ServiceDesignMenu({ onMouseEnter, onMouseLeave, onCreatingJourneyEnter, onCreatingJourneyLeave, hoveredItem, sethoveredItem ,setIsClicked}) { 
  
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
      onMouseLeave={onMouseLeave}>
      <div className = "Gap"> </div>
      <button  type="button" className="MenuItem" 
      onMouseEnter={onCreatingJourneyEnter}
      onMouseLeave={onCreatingJourneyLeave}
        > Creating an informed journey </button >

      <button  type="button" className="MenuItem"> Meet Luotsi </button > 

      <button  
      type="button" 
      className="MenuItem"
      onMouseEnter={() => handleMouseEnter('SpotOn')}
      onMouseLeave={handleMouseLeave}
      onClick={()=>handleMousecliked('SpotOn')}
      > 
      SpotOn 
      </button >
    </div>
  );
}
