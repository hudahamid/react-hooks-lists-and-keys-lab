import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{/* display an <a> tag for each link here */}
                {links.map((link,index)=>{
                 return( <a href={`#${link}`} key={index}>{link}</a>)
                }
                )
                }
                {/* <a href="#home">home</a>
                <a href="#about">about</a>
                <a href="#projects">projects</a> */}
  
  
  </nav>;
}

export default NavBar;
