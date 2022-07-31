import { useContext } from "react";
import { FeedDataContext } from "./AppContext";
import abbreviate from "number-abbreviate";

const FeedMetrics = () => {
  const { feedData } = useContext(FeedDataContext);

  return (
    <aside className="text-center testimonial-banner">
      <span className="metrics-header">
        {" "}
        <i className="bi-columns-gap mx-2 text-info"></i> Current Metrics
      </span>
      <br />
      <br />
      <div className="metrics-set container">
        <div className="metrics-card">
          <span className="number news-header-text">
            {feedData && abbreviate(feedData.length, 2)}
          </span>
          <i className="bi-soundwave text-info" />
          <span className="name">All</span>
        </div>
        <div className="metrics-card">
          <span className="number news-header-text">
            {feedData &&
              abbreviate(
                feedData.filter((x) => x.tags.includes("NFT")).length,
                2
              )}
          </span>
          <i className="bi-soundwave text-info" />
          <span className="name">NFTs</span>
        </div>

        <div className="metrics-card">
          <span className="number news-header-text">
            {feedData &&
              feedData.filter((x) => x.tags.includes("Token")).length}
          </span>
          <i className="bi-soundwave text-info" />
          <span className="name">Tokens</span>
        </div>
        <div className="metrics-card">
          <span className="number news-header-text">
            {feedData && feedData.filter((x) => x.tags.includes("ETH")).length}
          </span>
          <i className="bi-soundwave text-info" />
          <span className="name">ETH</span>
        </div>

        <div className="metrics-card">
          <span className="number news-header-text">
            {feedData &&
              feedData.filter((x) => x.tags.includes("Donation")).length}
          </span>
          <i className="bi-soundwave text-info" />
          <span className="name">Donation</span>
        </div>
      </div>
    </aside>
  );
};

export default FeedMetrics;
