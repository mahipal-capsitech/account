import { Stack } from "@fluentui/react";
import { SecondIconRow } from "./SecondIconRow";
import { SecondIcondatabase } from "./SecondIconRowdata";

export default function SecondIcon() {
  console.log(SecondIcondatabase);

  return (
    <>
      <Stack className="SecondIcon">
        {SecondIcondatabase.map((item: any) => [
          <SecondIconRow
            key={item.id}
            image={item.images}
            head={item.head}
            para={item.para}
          />,
        ])}
      </Stack>
    </>
  );
}
