import { Stack } from "@fluentui/react";
import React from "react";
import Logo from "../images/Logo.svg";
import Facebook from "../images/facebook.png";
import Twitter from "../images/twitter.png";
import Instagram from "../images/INSTAGRAM.png";
import Linkedin from "../images/linkdin.png";
export default function Footer() {
  return (
    <>
      <Stack className="footer">
        <Stack className="footer1">
          <Stack className="flogo">
            <img src={Logo} />
          </Stack>
        </Stack>
        <Stack className="footer1">
          <a className="aHeadFoot">COMPANY</a>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Service</a>
          <a href="">Blog</a>
          <a href="">Contact</a>
        </Stack>
        <Stack className="footer1">
          <a className="aHeadFoot">ACCOUNTING</a>
          <a href="">Limited</a>
          <a href="">Company</a>
          <a href="">Sole Trader</a>
          <a href="">Article</a>
        </Stack>
        <Stack className="footer1">
          <a className="aHeadFoot">LOCATION</a>
          <a className="ahov">
            Seven Start Accounting <br/>Basement Suite, 42-44<br/> Bishopgate <br/>London
            EC2N4AH
          </a>
          <a className="aHeadFoot">E-MAIL</a>
          <a href="mailto:info@sevenstartaccounting.com" style={{color:"#0263ee"}}>
            info@sevenstartaccounting.com
          </a>
        </Stack>
        <Stack className="footer1">
          <Stack className="socialIcon">
              <a href="">
              <img src={Facebook}/> Facebook
              </a> 
          </Stack>
          <Stack className="socialIcon">
              <a href="">
              <img src={Twitter}/> Twitter
              </a> 
          </Stack>
          <Stack className="socialIcon">
              <a href="">
              <img src={Instagram}/> Instagram
              </a> 
          </Stack>
          <Stack className="socialIcon">
              <a href="">
              <img src={Linkedin}/> Linkedin
              </a> 
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
