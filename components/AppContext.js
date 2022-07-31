import React, { useState } from "react";

// create context
export const SearchQueryContext = React.createContext(null);
export const SelectFeedContext = React.createContext(null);
export const FeedDataContext = React.createContext(null);

function AppContextProvider(props) {
  const [feedData, setFeedData] = useState(null);
  const [searchQuery, setSearchQuery] = useState(null);
  const [selectedFeedItem, selectFeedItem] = useState(null);

  return (
    <FeedDataContext.Provider value={{ feedData, setFeedData }}>
      <SearchQueryContext.Provider value={{ searchQuery, setSearchQuery }}>
        <SelectFeedContext.Provider
          value={{ selectedFeedItem, selectFeedItem }}
        >
          {props.children}
        </SelectFeedContext.Provider>
      </SearchQueryContext.Provider>
    </FeedDataContext.Provider>
  );
}

export default AppContextProvider;
