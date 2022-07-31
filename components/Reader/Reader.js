import { useContext } from "react";
import { SelectFeedContext } from "../AppContext";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Reader = () => {
  const { selectedFeedItem, selectFeedItem } = useContext(SelectFeedContext);

  let data = selectedFeedItem;

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

                <h1>{data.title}</h1>

                <div className="reader-stats">
                  <span>
                    <img
                      src={`https://avatars.dicebear.com/api/jdenticon/${data.authors[0]}.svg`}
                      className="avatar"
                    />{" "}
                    bryce.eth
                  </span>

                  <span>
                    <i className="bi-hexagon-fill text-primary" />{" "}
                    {data.tags[0]}
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
                  src={data.previewImage.address}
                  alt="featured-image"
                  className="featured-image"
                />

                <div className="reader-summary">
                  <ReactMarkdown
                    children={data.summary}
                    remarkPlugins={[remarkGfm]}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Reader;
