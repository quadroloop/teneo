import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase/firebaseClient";

export const fetchTopSearches = () => {
  let Searches = [];
  const [searchData, searchDataLoading] = useCollection(
    db.collection("top-searches"),
    {}
  );

  if (!searchDataLoading && searchData) {
    let searchList = searchData.docs.map((doc) => doc.data());
    Searches = searchList;
  }

  Searches = Searches.sort((a, b) => b.count - a.count);

  return Searches;
};
