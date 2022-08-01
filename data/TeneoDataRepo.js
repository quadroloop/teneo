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

export const fetchTopFeed = () => {
  let Feeds = [];
  const [topData, topDataLoading] = useCollection(
    db.collection("top-feeds"),
    {}
  );

  if (!topDataLoading && topData) {
    let feedList = topData.docs.map((doc) => doc.data());
    Feeds = feedList;
  }

  Feeds = Feeds.sort((a, b) => a.votes - b.votes);

  return Feeds;
};
