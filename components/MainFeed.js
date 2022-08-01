import FeedCard from "./FeedCard";
import Fade from "react-reveal/Fade";
import FeedInfos from "./FeedInfos";
import { useContext, useEffect } from "react";
import { FeedDataContext } from "./AppContext";
import axios from "axios";
import { initialFeedURLs } from "../data/RSS3PregodRepo";
import FeedSkeleton from "./FeedSkeleton";

const MainFeed = () => {
  const { feedData, setFeedData } = useContext(FeedDataContext);

  useEffect(() => {
    // axios.all(initialFeedURLs).then(
    //   axios.spread((feed1, feed2) => {
    //     const initialFeed = [...feed1.data.list, ...feed2.data.list];
    //     console.log(initialFeed);
    //     setFeedData(initialFeed);
    //   })
    // );
  }, []);

  return (
    <>
      <section id="feed">
        <div className="main-feed container">
          <div className="feed-items">
            {feedData &&
              feedData.map((item) => {
                return <FeedCard data={item} />;
              })}

            {feedData === null && <FeedSkeleton />}

            {feedData && feedData.length === 0 && (
              <div className="no-results fade-in-bottom">
                <h1>No results found.</h1>
              </div>
            )}
          </div>

          <FeedInfos />
        </div>
      </section>
    </>
  );
};

export default MainFeed;
