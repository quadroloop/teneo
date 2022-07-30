import FeedCard from "./FeedCard";
import Fade from "react-reveal/Fade";

const MainFeed = () => {
  return (
    <>
      <section id="feed">
        <div className="main-feed container">
          <div className="feed-items">
            {[...Array(4).keys()].map(() => {
              return (
                <Fade bottom>
                  <FeedCard />
                </Fade>
              );
            })}
          </div>

          <div className="feed-infos">
            <p>hello</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainFeed;
