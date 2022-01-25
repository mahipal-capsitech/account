import { IStackStyles, IStyle, Stack } from "@fluentui/react";
import React from "react";
import logo from "../images/Logo.svg";
export default function Header() {
  const root: Partial<IStackStyles> = {
    root: {
      
    },
  };
  return (
    <>
      <Stack styles={root} horizontal className="head">
        <Stack className="leftHead">
          <img src={logo} />
        </Stack>
        <Stack className="rightHead" horizontal>
          <a href="#home" >HOME</a>
          <a href="#home">ABOUT</a>
          <a href="#home">SERVICE</a>
          <a href="#home">BLOG</a>
          <a href="#home">CONTACT</a>
        
        </Stack>
        <Stack className="mobHead">
            <a className="padmar" style={{textDecoration:"none"}}>
              <span>020</span>
              <span>3960</span>
              <span>5080</span>
            </a>
          </Stack>
          <Stack className="menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
<Stack className="mobileNav">
  <Stack className="MobLogo">
      <img src={logo}/>
      {/* <span className="closeNav">&#xd7;</span> */}
  </Stack>
          <a href="#home" >HOME</a>
          <a href="#home">ABOUT</a>
          <a href="#home">SERVICE</a>
          <a href="#home">BLOG</a>
          <a href="#home">CONTACT</a>
          </Stack>
          </Stack>
        
      </Stack>
    </>
  );
}
