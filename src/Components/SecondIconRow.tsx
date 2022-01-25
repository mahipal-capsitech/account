import React from "react";
import { Stack } from "@fluentui/react";
import Bulb from "../images/bulb.png";
import Solution from "../images/solution.png";
import Quality from "../images/quality.png";
interface Props {
  image: string;
  head: string;
  para: string;
}

export const SecondIconRow: React.FC<Props> = ({ image, head, para }) => {
  if (image == "1") { image = Bulb; } else if (image == "2") {
    image = Solution;} else { image = Quality;}
  return (
    <>
      <Stack className="SecondIcon1">
        <Stack className="secimg">
          <img src={image} />
        </Stack>
        <a>{head}</a>
        <p>{para}</p>
      </Stack>
    </>
  );
};
