import FeedCard from "./FeedCard";
import Fade from "react-reveal/Fade";
import FeedInfos from "./FeedInfos";
import { useContext, useEffect } from "react";
import { FeedDataContext } from "./AppContext";
import axios from "axios";
import { initialFeedURLs } from "../data/RSS3PregodRepo";

const MainFeed = () => {
  const { feedData, setFeedData } = useContext(FeedDataContext);

  useEffect(() => {
    axios.all(initialFeedURLs).then(
      axios.spread((feed1, feed2) => {
        const initialFeed = [...feed1.data.list, ...feed2.data.list];
        console.log(initialFeed);
        setFeedData(initialFeed);
      })
    );
  }, []);

  return (
    <>
      <section id="feed">
        <div className="main-feed container">
          <div className="feed-items">
            {feedData &&
              feedData.map(() => {
                return (
                  <Fade bottom>
                    <FeedCard />
                  </Fade>
                );
              })}
          </div>

          <FeedInfos />
        </div>
      </section>
    </>
  );
};

export default MainFeed;
