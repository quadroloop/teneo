const Masthead = () => {
  return (
    <>
      <header className="masthead masthead-bg">
        <div className="container px-5">
          <div className="row gx-5 align-items-center">
            <div className="mb-5 mb-lg-0 text-center text-lg-start">
              <h2 className="display-6 lh-1 mb-3">Top Stories</h2>
              <p className="fw-normal text-muted mb-5">
                Open News and Data Platform built on top of Web3 and RSS3
              </p>
              <div className="main-cards">
                <div className="main-card">
                  <img
                    src="https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    className="item-image"
                  />
                  <div className="news-info">
                    <span className="news-header-text">
                      An age of new Space exploration
                    </span>
                    <small>
                      This is an text some text boi this is some lorem isum
                      stuff
                    </small>

                    <div className="badges">
                      <small>
                        <i className="bi-eye text-info" /> 1,234
                      </small>
                      <small>
                        <i className="bi-hexagon text-info" /> 3
                      </small>
                    </div>
                  </div>
                </div>

                <div className="main-card">
                  <img
                    src="https://images.pexels.com/photos/2694037/pexels-photo-2694037.jpeg"
                    className="item-image"
                  />
                  <div className="news-info">
                    <span className="news-header-text">
                      An age of new Space exploration
                    </span>
                    <small>
                      This is an text some text boi this is some lorem isum
                      stuff
                    </small>

                    <div className="badges">
                      <small>
                        <i className="bi-eye text-info" /> 1,234
                      </small>
                      <small>
                        <i className="bi-hexagon text-info" /> 3
                      </small>
                    </div>
                  </div>
                </div>

                <div className="main-card">
                  <img
                    src="https://images.pexels.com/photos/264146/pexels-photo-264146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    className="item-image"
                  />
                  <div className="news-info">
                    <span>An age of new Space exploration</span>
                    <small>This is an text some text boi</small>
                  </div>
                </div>

                <div className="main-card">
                  <img
                    src="https://images.pexels.com/photos/11834957/pexels-photo-11834957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    className="item-image"
                  />
                  <div className="news-info">
                    <span>An age of new Space exploration</span>
                    <small>This is an text some text boi</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Masthead;
