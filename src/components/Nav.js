import React from "react";

import linkedinLogo from "../visual/Logo_linkedin.svg";
import PersonalLogo from "../visual/Logo_PF.svg";

export default function Nav() {
  return (
    <nav>
      <div className="NavContainer">
        <div className="Top-logo-container">
          <img
            src={PersonalLogo}
            alt="This is my personal logo"
            className="pLogo"
          />
          <div className="P-Text">Pai-Feng Chen's Work </div>
        </div>
        <div id="menuToggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
