import { useContext } from "react";
import { fetchTopFeed } from "../data/TeneoDataRepo";
import { SelectFeedContext } from "./AppContext";
import CTAButton from "./CTAButton";

const Masthead = () => {
  const { selectFeedItem } = useContext(SelectFeedContext);

  const topFeeds = fetchTopFeed();

  return (
    <>
      <header className="masthead masthead-bg" id="top-stories">
        <div className="container px-5">
          <div className="row gx-5 align-items-center">
            <div className="mb-5 mb-lg-0 text-center text-lg-start">
              <div className="mast-header">
                <div className="header-info">
                  <h2 className="display-6 lh-1 mb-3">Top Feed</h2>
                  <p className="fw-normal text-muted mb-5">
                    Most popular feeds from RSS3, selected by the community.
                  </p>
                </div>
                <a href="#feed">
                  <CTAButton>View More</CTAButton>
                </a>
              </div>
              <div className="main-cards">
                {topFeeds &&
                  topFeeds
                    .sort((a, b) => b.votes - a.votes)
                    .slice(0, 4)
                    .map((feed) => {
                      return (
                        <div
                          className="main-card"
                          onClick={() => {
                            selectFeedItem(feed);
                          }}
                        >
                          <img
                            src={feed.previewImage.address}
                            className="item-image"
                          />
                          <div className="news-info">
                            <span className="news-header-text">
                              {feed.title}
                            </span>
                            <small>
                              {feed.summary
                                ? feed.summary.substring(0, 50)
                                : `Ethereum NFT: ${feed.metadata.collection_name} - ${feed.metadata.token_id}`}
                            </small>

                            <div className="badges">
                              <small>
                                <i className="bi-eye text-info" /> {feed.views}
                              </small>
                              <small>
                                <i className="bi-hexagon text-info" />{" "}
                                {feed.views}
                              </small>
                            </div>
                          </div>
                        </div>
                      );
                    })}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Masthead;
