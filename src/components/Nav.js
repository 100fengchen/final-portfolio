import React from 'react'

import linkedinLogo from '../visual/Logo_linkedin.svg';
import IGLogo from '../visual/Logo_IG.svg';




export default function Nav() {  
  return (
    <nav>
       
        <div class="NavContainer">
                    <img class="smallogo" src={linkedinLogo} alt="This is Linkedin logo"/>
                    <img class="smallogo" src={IGLogo} alt="This is IG logo"/>
                    <sectoin class="link">Home</sectoin>
                    <sectoin class="link">About</sectoin>
                    <sectoin class="link">Contact</sectoin>
                    <button >Contact</button>
                    <div id="menuToggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                </div>
                
    </nav>
  )
}
