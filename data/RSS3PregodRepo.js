import axios from "axios";

export const initialFeedURLs = [
  axios.get(
    "https://pregod.rss3.dev/v0.4.0/account:0xcb482005596F52839AE4505D73164027aD103376@ethereum/notes?limit=1000&exclude_tags=POAP&latest=false"
  ),
  axios.get(
    "https://pregod.rss3.dev/v0.4.0/account:0xbf08ec81a63f33f50e7d23ba06ccf2e80c4891f3@ethereum/notes?limit=1000&exclude_tags=POAP&latest=false"
  ),
];
