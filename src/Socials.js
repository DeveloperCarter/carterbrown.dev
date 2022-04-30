import React from "react";
import github from "./github.png";
import linkedin from "./linkedin.png";
import instagram from "./instagram.png"
const Socials = () => {
    return (
        <div>
           <a id="logo1" href="http://github.com/developercarter/" class="fa"><img src={github}/></a>
           <a id="logo2" href="https://www.linkedin.com/in/carterbrown2/" class="fa"><img src={linkedin}/></a>
           <a id="logo3" href="https://www.instagram.com/__carterbrown/" class="fa"><img src={instagram}/></a>
           <p id="email">devcarterbrown@gmail.com</p>
        </div>
    )
}

export default Socials;