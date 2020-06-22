import React from "react";
import { PageHead, PageTitle, PageSubTitle } from "./styles";

const index = ({ title, subTitle, border }) => {
  return (
    <PageHead border={border}>
      <PageTitle>{title}</PageTitle>
      <PageSubTitle>{subTitle}</PageSubTitle>
    </PageHead>
  );
};

export default index;
