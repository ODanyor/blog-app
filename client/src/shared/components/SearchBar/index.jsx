import React, { useState } from "react";
import { SearchBar, SearchIcon, SearchInput } from "./styles";

const index = () => {
  const [focused, setFocused] = useState(false);
  const focusHandle = () => setFocused(!focused);

  return (
    <SearchBar focused={focused}>
      <SearchIcon>🔍</SearchIcon>
      <SearchInput
        placeholder="Search here ..."
        onFocus={focusHandle}
        onBlur={focusHandle}
      />
    </SearchBar>
  );
};

export default index;
