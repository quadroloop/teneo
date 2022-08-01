import { useContext } from "react";
import { FeedDataContext } from "./AppContext";
import Logo from "./Logo";
import axios from "axios";
import { db } from "../firebase/firebaseClient";
import { fetchTopSearches } from "../data/TeneoDataRepo";

const Header = () => {
  const { setFeedData } = useContext(FeedDataContext);

  const topSearches = fetchTopSearches();

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
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm"
      id="mainNav"
    >
      <div className="container px-5">
        <Logo />

        <input
          className="search-bar"
          type="text"
          placeholder="Search Address / ENS Address"
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              searchRSS3(e.target.value);
            }
          }}
        ></input>

        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
            <li className="nav-item">
              <a className="nav-link me-lg-3" href="#top-stories">
                Top Stories
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link me-lg-3" href="#feed">
                Main Feed
              </a>
            </li>
          </ul>
          <a href="https://rss3.io/about" target="_blank">
            <button className="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0">
              <span className="d-flex align-items-center">
                <i className="bi-hexagon me-2" />
                <span className="small">Powered by RSS3</span>
              </span>
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
