import React from 'react'
import Portrait from '../visual/Potrait.png'

export default function Article() {
  return ( 
    <div class="AllContentContainer">
            <div class="TextContentContainer">
                <article>
                    <h1>Free lancer</h1> 
                    <h1>Based in Finland and Taiwan</h1> 
                    <h1>
                    I find that garments have this element of being timeless in terms of design and fabric, and there is a desire to be able to wear and use the garment for a lifetime. I do not believe in the concept of a perfect garment, only in the knowledge that you can be absolutely hideous and still look good. I also believe at the end of the day that it’s about the satisfaction of being able to wear something that you love, and not the piece that you wore for eight years.
                    </h1>
                </article>
                
                <div id="rectangle"><button class="BigName">Pai-Feng, Chen</button></div>
            </div>
            <div id = "potraitbox">
            <img class="Portrait" src={Portrait} alt="My handsome selfie hehe"/>
            </div>
            <footer>2022 All rights reserved @Pai-Feng, Chen</footer>  
    </div>
  )
}
