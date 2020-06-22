import React from "react";
import { SearchModule } from "./styles";

// Components
import { Input } from "shared/components";
import { search } from "static/icons";

const index = () => {
  return (
    <SearchModule>
      <Input icon={search} placeholder="Search here ..." />
    </SearchModule>
  );
};

export default index;
