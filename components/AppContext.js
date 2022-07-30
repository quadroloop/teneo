import React, { useState } from "react";

// create context
export const SearchQueryContext = React.createContext(null);
export const SelectFeedContext = React.createContext(null);

function AppContextProvider(props) {
  const [searchQuery, setSearchQuery] = useState(null);
  const [selectedFeedItem, selectFeedItem] = useState(null);

  return (
    <SearchQueryContext.Provider value={{ searchQuery, setSearchQuery }}>
      <SelectFeedContext.Provider value={{ selectedFeedItem, selectFeedItem }}>
        {props.children}
      </SelectFeedContext.Provider>
    </SearchQueryContext.Provider>
  );
}

export default AppContextProvider;
