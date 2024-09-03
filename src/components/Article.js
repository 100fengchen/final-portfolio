import React from 'react'
import Portrait from '../visual/Potrait.png'

export default function Article({isHovering, setIsHovering, itemClick}) {

  return ( 
    <div class="AllContentContainer">
            <div class="TextContentContainer">
                <article>
                    {/* <h1>Free lancer</h1>  */}
                    <h1>Based in Finland and Taiwan</h1> 
                    <h1 >
                    I possess a blend of practical and explorative thinking. My diverse design background, coupled with a keen interest in understanding human behavior, interactions, and our environment, has shaped my journey to where I am today. While pursuing Collaborative and Industrial Design at Aalto University, I honed my skills in Service Design, System Thinking and Interaction Design through hands-on experiences in digital production.                    
                    </h1>
                    <h1 >
                    I am an enthusiastic designer, eager to contribute to interdisciplinary projects aimed at developing effective and sustainable solutions that cater to diverse needs.                    </h1>
                    
                </article>
                
                
            </div>
            <div id = "potraitbox">
           <img class="Portrait" src={Portrait} alt="My handsome selfie hehe"/>
            <div className='nameBox'>
              <div id="rectangle"><button class="BigName">陳</button></div>
              <div id="rectangle"><button class="BigName">百峰</button></div>
            </div>
            </div>
            
            {/* <footer>2022 All rights reserved @Pai-Feng, Chen</footer>   */}
        
    </div>
  )
}