import React from "react";
import web from "../src/images/img1.svg" 

import Common from "./Common";

const Home=()=>{
    return(
        <>
          
<Common
name='Build Your Professional Resume With' 
imgsrc={web} 
visit='/service' 
btnname="Get Started" />


        </>
    );
};

export default Home;