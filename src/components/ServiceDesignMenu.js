import React ,{useState} from 'react';


export default function ServiceDesignMenu (props) {
  // const[isSubHovering, setisSubHovering] = useState(false);
  // const[IsSubClicked, setIsSubClicked  ] = useState(false);
 
 


  return (
    <div class="Menu" style={{
      'display': props.isHovering  || props.isClicked ? 'block' : 'none', 
      }} >
        <section class="MenuItem" 
        onClick={() => props.itemlcik()}
        > Example 1 </section>
        <section class="MenuItem"> Example 1 </section>
        <section class="MenuItem"> Example 1 </section>
    </div>
  )
}
