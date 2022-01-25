import { Stack } from "@fluentui/react";
import React from "react";

export default function FirstSevenStar() {
  return (
    <>
      <Stack horizontal className="seventStar">
        <Stack className="seventStarLeft">
          <a>Seven Star <br/>  Accounting</a>
        </Stack>
        <Stack className="seventStarRight">
          <p>
            Seven Star Accounting is an eminent name in the field of providing
            exceptional services to the clients. Having an adept team of
            professional accountants and skilled business advisors, we are able
            to serve as a one-stop solution to all your accounting and taxation
            needs. We understand the convoluted business processes of our
            clients and strive to develop a mechanism that is well-equipped with
            all the essentials that are required.
          </p>
        </Stack>
      </Stack>
    </>
  );
}
