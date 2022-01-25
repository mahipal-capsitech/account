import { Stack } from "@fluentui/react";
import React from "react";
import secPhoto from "../images/Sec1.svg";
export default function Section_1() {
  return (
    <>
      <Stack className="SectionContainer" horizontal>
        <Stack className="SectionContainerLeft">
          <a className="padmar">Service beyond</a>
          <a className="padmar">Conventional Boundaries</a>
          <p className="padmar">Excellence in Accounting,Taxation and Advisory</p>
          <button type="button" className="btn-p setTopMar">Read More</button>
        </Stack>
        <Stack className="SectionContainerRight">
          <img src={secPhoto} />
        </Stack>
      </Stack>
    </>
  );
}
