import FeedCard from "./FeedCard";
import Fade from "react-reveal/Fade";
import FeedInfos from "./FeedInfos";

const MainFeed = () => {
  return (
    <>
      <section id="feed">
        <div className="main-feed container">
          <div className="feed-items">
            {[...Array(50).keys()].map(() => {
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
