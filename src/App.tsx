import React from "react";
import { Stack } from "@fluentui/react";
import "./App.css";
import './Media.css'
import Header from "./Components/Header";
import Section_1 from "./Components/Section_1";
import FirstSevenStar from "./Components/FirstSevenStar";
import SecondIcon from "./Components/SecondIcon";
import ThirdExploring from "./Components/ThirdExploring";
import FourBePart from "./Components/FourBePart";
import Footer from "./Components/Footer";
import Carousel_fst from "./Components/Carousel_fst";

export const App: React.FunctionComponent = () => {
  return (
    <>
      <Stack className="boxSet">
        <Stack className="container_c">
          <Header />
          <Section_1 />
        </Stack>
      </Stack>
      <Stack className="boxSet" style={{ backgroundColor: "#e7f5fe" }}>
        <Stack className="container_c">
          <FirstSevenStar />
        </Stack>
      </Stack>
      <Stack className="boxSet">
        <Stack className="container_c">
          <SecondIcon />
        </Stack>
      </Stack>

      <Stack className="boxSet" style={{ backgroundColor: "#e7f5fe" }}>
        <Stack className="container_c">
          <ThirdExploring />
        </Stack>
      </Stack>
      <Stack className="boxSet">
        <Stack className="container_c">
          <FourBePart />
        </Stack>
      </Stack>

      <Stack className="boxSet">
        <Stack className="container_c">
          <Carousel_fst />
        </Stack>
      </Stack>

      <Stack className="boxSet" style={{ backgroundColor: "#e7f5fe" }}>
        <Stack className="container_c">
          <Footer />
        </Stack>
      </Stack>
    </>
  );
};
