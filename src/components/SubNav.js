import React,{useState} from 'react'
import Arrow from '../visual/Arrow.svg'


// test test
export default function SubNav(props) {
    return (
    <div class="subnavcontainer">
        <div class="line"></div>
        <div class="SubNav">
            <div class="Pbutton" id="mywork">
                <div class="PBox" >My Work</div>
            </div>
            <div class="ProductContainer">
                <div class="Vrt endline" ></div>
               <section class="Pbutton"
               >
                   <div 
                        class="PBox" 
                        onClick={() => props.clickFunction()}   
                        onMouseEnter={() => props.hoverFunction(true)} 
                        onMouseLeave={() => props.hoverFunction(false)}
                        >
                            Service Design
                    </div>
                   
                   <img class="Arrow" src={Arrow} alt="This is an arrow"/>
               </section>
               <div class="Vrt"></div>
               <section class="Pbutton" >
                   <div class="PBox"
                   onMouseEnter={() => props.hoverFunction(true)} 
                   onMouseLeave={() => props.hoverFunction(false)}
                   >Interaction Design</div>
                   <img class="Arrow" src={Arrow} alt="This is an arrow"/>
               </section>
               <div class="Vrt"></div>
               <section class="Pbutton">
                   <div class="PBox"
                   onMouseEnter={() => props.hoverFunction(true)} 
                   onMouseLeave={() => props.hoverFunction(false)}
                   >Indutrial Design</div>
                   <img class="Arrow" src={Arrow} alt="This is an arrow"/>
               </section> 
               <div class="Vrt endline" ></div> 
           </div>
        </div>
            <div class="line"></div> 
    </div>
  )
}
