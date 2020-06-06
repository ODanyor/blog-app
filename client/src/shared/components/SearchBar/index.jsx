import React, { useState } from "react";
import { SearchBar, SearchIcon, SearchInput } from "./styles";

// Hooks
import { useFocusHandle } from "../../hooks";

const index = () => {
  const [focused, setFocused] = useState(false);
  const focusHandle = () => setFocused(!focused);

  return (
    <SearchBar focus={focused}>
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
