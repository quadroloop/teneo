import { useContext } from "react";
import { SelectFeedContext } from "../AppContext";

const Reader = () => {
  const { selectedFeedItem, selectFeedItem } = useContext(SelectFeedContext);

  return (
    <>
      {selectedFeedItem && (
        <>
          <div
            className="modal-wrapper fade-in"
            onClick={() => {
              selectFeedItem(null);
            }}
          ></div>
          <div className="reader-page slide-in-right">
            <div className="container">
              <div className="reader-content">
                <i
                  className="bi-arrow-left-circle exit fade-in-bottom"
                  onClick={() => {
                    selectFeedItem(null);
                  }}
                />

                <h1>This is a new frontier space exporation</h1>

                <div className="reader-stats">
                  <span>
                    <img
                      src="https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      className="avatar"
                    />{" "}
                    bryce.eth
                  </span>

                  <span>
                    <i className="bi-check-circle" /> Donation
                  </span>
                </div>

                <div className="reader-stats">
                  <span>
                    <i className="bi-circle-fill text-primary" /> December 20,
                    2021
                  </span>

                  <span>
                    <i className="bi-eye text-primary" /> 102
                  </span>

                  <span title="Reputation">
                    <i className="bi-hexagon text-primary" /> 2
                  </span>
                </div>
                <img
                  src="https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="featured-image"
                  className="featured-image"
                />

                <p>
                  t is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
                </p>

                <p>
                  t is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Reader;
