import { useContext } from "react";
import { fetchTopSearches } from "../data/TeneoDataRepo";
import axios from "axios";
import { FeedDataContext } from "./AppContext";
import { db } from "../firebase/firebaseClient";

const FeedInfos = () => {
  const topSearches = fetchTopSearches();
  const { setFeedData } = useContext(FeedDataContext);

  const searchRSS3 = async (query) => {
    if (query.trim() !== "") {
      setFeedData(null);

      axios
        .get(
          `https://pregod.rss3.dev/v0.4.0/account:${query}@ethereum/notes?limit=1000&exclude_tags=POAP&latest=false`
        )
        .then(async (res) => {
          setFeedData(res.data.list);

          if (res.data.list.length > 0) {
            let searchInstance = topSearches.find((x) => x.query === query);
            // save to top searches
            if (!searchInstance) {
              await db.collection("top-searches").doc(query).set({
                query: query,
                count: 1,
              });
            } else {
              await db
                .collection("top-searches")
                .doc(query)
                .update({
                  count: searchInstance.count + 1,
                });
            }
          }
        })
        .catch(() => {
          setFeedData([]);
        });
    }
  };

  return (
    <div className="feed-infos">
      <p className="news-header-text headline">
        <i className="bi-circle-fill text-info" /> Popular Feeds
      </p>
      <div className="media-grid">
        <div className="media-item">
          <img src="https://images.pexels.com/photos/2694037/pexels-photo-2694037.jpeg" />
          <div className="media-info">
            <span>
              <i className="bi-eye text-info" /> 1.2K
            </span>
          </div>
        </div>

        <div className="media-item">
          <img src="https://images.pexels.com/photos/2873669/pexels-photo-2873669.jpeg?cs=srgb&dl=pexels-guillaume-meurice-2873669.jpg&fm=jpg" />
          <div className="media-info">
            <span>
              <i className="bi-eye text-info" /> 2.2K
            </span>
          </div>
        </div>

        <div className="media-item">
          <img src="https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          <div className="media-info">
            <span>
              <i className="bi-eye text-info" /> 32K
            </span>
          </div>
        </div>
      </div>

      <div className="top-searches">
        {topSearches
          .sort((a, b) => b.count - a.count)
          .map((search) => {
            return (
              <div
                className="searched-item"
                title="Click to Search"
                onClick={() => {
                  console.log(search.query);
                  searchRSS3(search.query);
                }}
              >
                <img
                  src={`https://avatars.dicebear.com/api/jdenticon/${search.query}.svg`}
                  className="avatar"
                />

                <div className="search-info">
                  <span>{search.query.substring(0, 30)}..</span>
                  <small>
                    <i className="bi-search"></i> {search.count} searches
                  </small>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FeedInfos;
