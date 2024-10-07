import React from "react";
import "../../css/Footer.css" 

import Footer0 from "./FooterParts/Footer0.js";
import Footer1 from "./FooterParts/Footer1.js";
import Footer2 from "./FooterParts/Footer2.js";
import Footer3 from "./FooterParts/Footer3.js";
import Footer00 from "./FooterParts/Footer00.js";


function MainFooter() {
  return (
    <div class="footer">
     
   <Footer00/>
   <Footer0/>
   <Footer1/>
   <Footer2/>
   <Footer3/>

    </div>
);
}

export default MainFooter;
