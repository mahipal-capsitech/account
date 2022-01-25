import { Stack } from "@fluentui/react";
import React from "react";
import { FourBePartRow } from "./FourBePartRow";
import { FourBePartRowDatabase } from "./FourBePartRowData";

export default function FourBePart() {
  return (
    <>
    <Stack className="car_head">
      <a>Be a Part of the Nest-generation Accounting</a>
    </Stack> 
      <Stack className="FourBePart">
        {FourBePartRowDatabase.map((item) => [
          <FourBePartRow key={item.id} image={item.images} head={item.head} />,
        ])}
      </Stack>
    </>
  );
}
