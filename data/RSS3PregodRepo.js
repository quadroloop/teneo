import axios from "axios";

export const initialFeedURLs = [
  axios.get(
    "https://pregod.rss3.dev/v0.4.0/account:0xD9DEC6E6C0EdC4ac808b6Db497fC8732BBE26B27@ethereum/notes?limit=1000&exclude_tags=POAP&latest=false"
  ),
  axios.get(
    "https://pregod.rss3.dev/v0.4.0/account:0xcb482005596F52839AE4505D73164027aD103376@ethereum/notes?limit=1000&exclude_tags=POAP&latest=false"
  ),
];
