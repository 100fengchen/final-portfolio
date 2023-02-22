import React from 'react'
import Bendarc from '../visual/Bendarc_7.jpg'
import Product1 from '../visual/Product1.png'
import Product2 from '../visual/Product2.png'

export default function example_product(props) {
  return (
    <div class="example_product" style={{
        'display': props.IsItemClicked ? 'block' : 'none' 
        }}>
        <div class="line"></div>
        <div class='content'>
            <img src={Bendarc} id="Bednarc" alt="This is example work"/>
            <p>
                <li>Bendarc</li>
                <text>Being an all-in-one (AiO) PC means the monitor is conveniently integrated into the system so it is space saving, just as it frees user from messy cables. Crafted in sleek aluminum and textile, BendStudio Arc is a stunning AiO that not only encompasses such benefits, its monitor holds an engineering marvel that displays a curved screen at R1500 when upright but pulls down flat at an angle for an unrivaled 29” drafting experience. Made for the mixed-use convenience of the modern family, the beveled touch screen can be adjusted for height ergonomics and immersive viewing or convert to work effortlessly with the stylus over a large, flat surface.
                </text>
            </p>
        </div>
        <img src={Product1} class ="productphoto" id="Product1" alt="This is example work"/>
        <div class="quote">“This folding feature will effectively reduce its volume”</div>
        <img src={Product2} class ="productphoto" id="Product2" alt="This is example work"/>
        
    </div>
  )
}
