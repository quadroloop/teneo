const FeedMetrics = () => {
  return (
    <aside className="text-center testimonial-banner">
      <span className="metrics-header">
        {" "}
        <i className="bi-columns-gap mx-2 text-info"></i> Today's Metrics
      </span>
      <br />
      <br />
      <div className="metrics-set container">
        <div className="metrics-card">
          <span className="number news-header-text">1.2k</span>
          <i className="bi-soundwave text-info" />
          <span className="name">All</span>
        </div>
        <div className="metrics-card">
          <span className="number news-header-text">12</span>
          <i className="bi-soundwave text-info" />
          <span className="name">NFTs</span>
        </div>

        <div className="metrics-card">
          <span className="number news-header-text">200</span>
          <i className="bi-soundwave text-info" />
          <span className="name">Tokens</span>
        </div>
        <div className="metrics-card">
          <span className="number news-header-text">101</span>
          <i className="bi-soundwave text-info" />
          <span className="name">Donations</span>
        </div>
        <div className="metrics-card">
          <span className="number news-header-text">3.2k</span>
          <i className="bi-soundwave text-info" />
          <span className="name">Posts</span>
        </div>
      </div>
    </aside>
  );
};

export default FeedMetrics;
