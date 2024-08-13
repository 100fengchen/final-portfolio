import React from 'react';

export default function ServiceDesignMenu({ onMouseEnter, onMouseLeave, onCreatingJourneyEnter, onCreatingJourneyLeave}) { 
  return (
    <div className="Menu"  
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      <div className = "Gap"> </div>
      <section  type="button" className="MenuItem" 
      onMouseEnter={onCreatingJourneyEnter}
      onMouseLeave={onCreatingJourneyLeave}
        > Creating an informed journey </section >
      <section  type="button" className="MenuItem"> Meet Luotsi </section > 
      <section  type="button" className="MenuItem"> SpotOn </section >
    </div>
  );
}
