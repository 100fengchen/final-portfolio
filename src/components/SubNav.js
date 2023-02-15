import React from 'react'
import Arrow from '../visual/Arrow.svg'


export default function SubNav() {
  return (
    <div class="subnavcontainer">
        <div class="line"></div>
        <div class="SubNav">
            <div class="Pbutton" id="mywork">
                <div class="PBox" >My Work</div>
            </div>
            <div class="ProductContainer">
                <div class="Vrt endline" ></div>
               <div class="Pbutton">
                   <div class="PBox">Service Design</div>
                   
                   <img class="Arrow" src={Arrow} alt="This is an arrow"/>
               </div>
               <div class="Vrt"></div>
               <div class="Pbutton">
                   <div class="PBox">Interaction Design</div>
                   <img class="Arrow" src={Arrow} alt="This is an arrow"/>
               </div>
               <div class="Vrt"></div>
               <div class="Pbutton">
                   <div class="PBox">Indutrial Design</div>
                   <img class="Arrow" src={Arrow} alt="This is an arrow"/>
               </div> 
               <div class="Vrt endline" ></div> 
           </div>
        </div>
            <div class="line"></div> 
    </div>
  )
}
