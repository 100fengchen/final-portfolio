import React from 'react';

export default function ServiceDesignMenu({ onMouseEnter, onMouseLeave }) { 
  return (
    <div className="Menu"  
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      <div className = "Gap"> </div>
      <section  type="button" className="MenuItem" onMouseEnter={onMouseEnter}> Creating an informed journey </section >
      <section  type="button" className="MenuItem"> Meet Luotsi </section > 
      <section  type="button" className="MenuItem"> SpotOn </section >
    </div>
  );
}
