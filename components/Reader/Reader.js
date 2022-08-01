import { useContext, useEffect, useState } from "react";
import { SelectFeedContext } from "../AppContext";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import moment from "moment";
import { db } from "../../firebase/firebaseClient";

const Reader = () => {
  const { selectedFeedItem, selectFeedItem } = useContext(SelectFeedContext);

  const [upVoted, setUpVote] = useState(false);

  let data = selectedFeedItem;

  const upVoteItem = async () => {
    if (!data.votes) {
      await db
        .collection("top-feeds")
        .doc(data.identifier.replace("//", ""))
        .set({ ...data, votes: 1, views: 1 });
      setUpVote(true);
    }
  };

  useEffect(() => {
    setUpVote(false);
  }, []);

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
                      src={`https://avatars.dicebear.com/api/jdenticon/${data.author}.svg`}
                      className="avatar"
                    />{" "}
                    {data.author.substring(0, 10)}
                  </span>

                  <span>
                    <i className="bi-hexagon-fill text-primary" />{" "}
                    {data.tags[0]}
                  </span>
                  <span>
                    <i className="bi-circle-fill text-primary" />{" "}
                    {moment(data.date_created).format("MMMM D, YYYY")}
                  </span>

                  {data.views && (
                    <>
                      <span>
                        <i className="bi-eye text-primary" /> 102
                      </span>

                      <span title="Reputation">
                        <i className="bi-hexagon text-primary" /> 2
                      </span>
                    </>
                  )}
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

                <button
                  className={"btn btn-dark btn-lg upvote-btn"}
                  title="Upvoting allows more users to see this Feed"
                  onClick={() => {
                    if (!upVoted) {
                      upVoteItem();
                    }
                  }}
                >
                  <span>
                    {upVoted ? (
                      <i className="bi-hexagon-fill text-info"></i>
                    ) : (
                      <i className="bi-hexagon"></i>
                    )}{" "}
                    (0) Upvote
                  </span>
                </button>

                {data.metadata && (
                  <>
                    <br />
                    <h2>
                      <i className="bi-box text-primary" /> More Info
                    </h2>
                    <span style={{ marginTop: "-20px" }}>
                      Other Details from feed Metadata
                    </span>

                    <div className="info-row">
                      {Object.keys(data.metadata).map((x) => {
                        return (
                          <div className="item">
                            <strong>
                              <i className="bi-box text-primary" /> {x}:
                            </strong>
                            <span>{data.metadata[x]}</span>
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}

                {data.related_urls && (
                  <>
                    <br />
                    <h2>
                      <i className="bi-link text-primary" /> Related URLS
                    </h2>
                    <span style={{ marginTop: "-20px" }}>
                      Other Details from feed Metadata
                    </span>

                    <div className="info-row">
                      {data.related_urls.map((x) => {
                        return (
                          <a href={x} target="_blank">
                            <div className="item">
                              <strong>
                                {" "}
                                <i className="bi-link text-primary"></i> {x}
                              </strong>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Reader;
