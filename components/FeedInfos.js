import { fetchTopSearches } from "../data/TeneoDataRepo";

const FeedInfos = () => {
  const topSearches = fetchTopSearches();

  console.log(topSearches);
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
        <div className="searched-item">
          <img
            src="https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="avatar"
          />

          <div className="search-info">
            <span>Vitalik.eth</span>
            <small>
              <i className="bi-search"></i> 123 searches
            </small>
          </div>
        </div>

        <div className="searched-item">
          <img
            src="https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="avatar"
          />

          <div className="search-info">
            <span>0xbf08ec81a63f33f50e7d23ba06ccf2e80c4891f3</span>
            <small>
              <i className="bi-search"></i> 123 searches
            </small>
          </div>
        </div>

        <div className="searched-item">
          <img
            src="https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="avatar"
          />

          <div className="search-info">
            <span>0xbf08ec81a63f33f50e7d23ba06ccf2e80c4891f3</span>
            <small>
              <i className="bi-search"></i> 123 searches
            </small>
          </div>
        </div>

        <div className="searched-item">
          <img
            src="https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="avatar"
          />

          <div className="search-info">
            <span>0xbf08ec81a63f33f50e7d23ba06ccf2e80c4891f3</span>
            <small>
              <i className="bi-search"></i> 123 searches
            </small>
          </div>
        </div>

        <div className="searched-item">
          <img
            src="https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="avatar"
          />

          <div className="search-info">
            <span>0xbf08ec81a63f33f50e7d23ba06ccf2e80c4891f3</span>
            <small>
              <i className="bi-search"></i> 123 searches
            </small>
          </div>
        </div>

        <div className="searched-item">
          <img
            src="https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="avatar"
          />

          <div className="search-info">
            <span>0xbf08ec81a63f33f50e7d23ba06ccf2e80c4891f3</span>
            <small>
              <i className="bi-search"></i> 123 searches
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedInfos;
