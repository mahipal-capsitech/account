import { Stack } from "@fluentui/react";
import React from "react";
import Sec2 from "../images/sec2.svg";
import Bull from '../images/bulla.png';
export default function ThirdExploring() {
  return (
    <>
      <Stack className="ThirdEx">
        <Stack className="ThirdExLeft">
            <Stack className="ThirdExLeftImg">
            <img src={Sec2} />
            </Stack>
         
        </Stack>
        <Stack className="ThirdExRight">
          <a>Exploring the Possibilities <br/> in the Accounting World</a>
          <ul>
            <li><img src={Bull}/>Assimilating Bussiness Demands</li>
            <li><img src={Bull}/>Creating Ultimate Solutions</li>
            <li><img src={Bull}/>Digitalising the Approach</li>
            <li><img src={Bull}/>Providing Exemplary Support</li>
          </ul>
        </Stack>
      </Stack>
    </>
  );
}
