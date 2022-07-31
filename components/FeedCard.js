import moment from "moment";
import { useContext } from "react";
import { SelectFeedContext } from "./AppContext";

const FeedCard = (props) => {
  const { selectFeedItem } = useContext(SelectFeedContext);

  const { title, summary, tags, attachments, authors, date_created } =
    props.data;

  const selectItem = (item) => {
    selectFeedItem(item);
    console.log(item);
  };

  let previewImage = {
    type: "preview",
    address:
      "https://images.pexels.com/photos/2694037/pexels-photo-2694037.jpeg",
  };

  if (attachments) {
    let Image = attachments.find((x) => x.type === "preview");

    if (Image) {
      previewImage = Image;
      // handle raw ipfs urls
      if (previewImage.address.includes("ipfs://")) {
        let IPFSViewerURL = `https://api.ipfsbrowser.com/ipfs/get.php?hash=${previewImage.address.replace(
          "ipfs://",
          ""
        )}`;
        previewImage.address = IPFSViewerURL;
      }
    }
  }

  const processedItemData = { ...props.data, previewImage: previewImage };

  return (
    <div
      className="feed-card"
      onClick={() => {
        selectItem(processedItemData);
      }}
    >
      <img src={previewImage.address} />
      <div className="article-info">
        <span className="title news-header-text">{title}</span>
        <span className="summary-text">
          {summary && summary.substring(0, 150)}...
        </span>
        <div className="feed-stats">
          <small className="badge bg-dark badge-info">{tags[0]}</small>
          <div className="eth-user">
            <img
              src={`https://avatars.dicebear.com/api/jdenticon/${authors[0]}.svg`}
              className="avatar"
            />
            <span>0x02304AE</span>
          </div>
          <small>
            <i className="bi-circle-fill text-primary" />{" "}
            {moment(date_created).format("MMMM D, YYYY")}
          </small>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
