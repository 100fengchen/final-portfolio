import React from 'react'

import linkedinLogo from '../visual/Logo_linkedin.svg';
import IGLogo from '../visual/Logo_IG.svg';


export default function Nav() {  
  return (
    <nav>
       
        <div class="NavContainer">
                    <button class="smallogo" src={linkedinLogo} alt="This is Linkedin logo"/>
                    <button class="smallogo" src={IGLogo} alt="This is IG logo"/>
               
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
