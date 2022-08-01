import { useContext } from "react";
import { SelectFeedContext } from "./AppContext";
import CTAButton from "./CTAButton";

const Masthead = () => {
  const { selectFeedItem } = useContext(SelectFeedContext);

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
                      This is the new age of space exploration. The dream of
                      exploring
                    </small>

                    <div className="badges">
                      <small>
                        <i className="bi-eye text-info" /> 1,234
                      </small>
                      <small>
                        <i className="bi-hexagon text-info" /> 42
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
                      The incredible photographs of the JWST
                    </span>
                    <small>
                      With the help of the JWST we are seeing the cosmos like
                      never be..
                    </small>

                    <div className="badges">
                      <small>
                        <i className="bi-eye text-info" /> 1,234
                      </small>
                      <small>
                        <i className="bi-hexagon text-info" /> 301
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
                    <span className="news-header-text">
                      War never changes. Conflicts rages on
                    </span>
                    <small>
                      Centuries passed. And all the supposed lessons we had
                      learned..
                    </small>

                    <div className="badges">
                      <small>
                        <i className="bi-eye text-info" /> 1,234
                      </small>
                      <small>
                        <i className="bi-hexagon text-info" /> 301
                      </small>
                    </div>
                  </div>
                </div>

                <div className="main-card">
                  <img
                    src="https://images.pexels.com/photos/11834957/pexels-photo-11834957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    className="item-image"
                  />
                  <div className="news-info">
                    <span className="news-header-text">
                      The fight against World Hunger
                    </span>
                    <small>
                      With all the advancements we have world hunger continues
                      to be a , ..
                    </small>

                    <div className="badges">
                      <small>
                        <i className="bi-eye text-info" /> 1,234
                      </small>
                      <small>
                        <i className="bi-hexagon text-info" /> 301
                      </small>
                    </div>
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
