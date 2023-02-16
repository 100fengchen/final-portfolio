import React ,{useState} from 'react';


export default function ServiceDesignMenu (props) {
  // const[isSubHovering, setisSubHovering] = useState(false);
  // const[IsSubClicked, setIsSubClicked  ] = useState(false);
  const [color, setColor] = useState("var(--black)")
  const click =color=>{
    setColor(color)
  }



  return (
    <div class="Menu" style={{
      'display': props.isHovering  || props.isClicked ? 'block' : 'none', 
      }} >
        <div class="MenuItem" 
        onClick={() => props.itemlcik()}
        > Example 1 </div>
        <div class="MenuItem"> Example 1 </div>
        <div class="MenuItem"> Example 1 </div>
    </div>
  )
}
