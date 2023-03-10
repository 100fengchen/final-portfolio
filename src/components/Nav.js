import React from 'react'
import PersonalLogo from '../visual/Logo_PF.svg';
import linkedinLogo from '../visual/Logo_linkedin.svg';
import IGLogo from '../visual/Logo_IG.svg';




export default function Nav() {  
  return (
    <nav>
       <img src={PersonalLogo} alt="This is my personal logo"/> 
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
