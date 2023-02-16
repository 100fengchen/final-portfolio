import React from 'react';

export default function ServiceDesignMenu (props) {
  return (
    <div class="Menu" style={{
      'display': props.isHovering || props.isClicked ? 'block' : 'none', 
      }} >
        
        <div class="MenuItem" 
        onClick={() => {
          console.log('clicked')
          props.itemlcik()}}  
        > Example 1 </div>
        <div class="MenuItem"> Example 1 </div>
        <div class="MenuItem"> Example 1 </div>
    </div>
  )
}
