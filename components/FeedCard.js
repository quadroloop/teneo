import moment from "moment";
import { useContext } from "react";
import { SelectFeedContext } from "./AppContext";

const FeedCard = (props) => {
  const { selectFeedItem } = useContext(SelectFeedContext);

  let { title, summary, tags, attachments, authors, date_created, metadata } =
    props.data;

  const selectItem = (item) => {
    selectFeedItem(item);
    // console.log(item);
  };

  let propOverides = {};

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

  const authorAddress = authors[0].split("account:")[1].split("@")[0];

  // handle Token Transfers
  if (tags[0] === "Token") {
    title = "Token Transfer";
    summary = `Transfered ${metadata.amount} ${metadata.token_symbol} (${metadata.token_standard}) in the ${metadata.network} Network.`;
    previewImage.address = `https://avatars.dicebear.com/api/jdenticon/${metadata.transaction_hash}.svg`;
    propOverides = {
      title: title,
      summary: summary,
    };
  }

  if (tags[0] === "ETH") {
    title = "Native Token Transfer";
    summary = `Transfered ${metadata.amount} ${metadata.token_symbol} (${metadata.token_standard}) Native Token in the ${metadata.network} Network.`;
    previewImage.address = `https://avatars.dicebear.com/api/jdenticon/${metadata.transaction_hash}.svg`;
    propOverides = {
      title: title,
      summary: summary,
    };
  }

  if (tags[0] === "NFT" && !title) {
    title = `${metadata.network} NFT #${metadata.token_id}`;
    summary = `${metadata.network} NFT (${metadata.token_standard}), token ID: ${metadata.token_id}.`;
    previewImage.address = `https://avatars.dicebear.com/api/jdenticon/${metadata.network}-${metadata.token_id}.svg`;

    propOverides = {
      title: title,
      summary: summary,
    };
  }

  const processedItemData = {
    ...props.data,
    previewImage: previewImage,
    author: authorAddress,
    ...propOverides,
  };

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
        <span className="summary-text">{summary}</span>
        <div className="feed-stats">
          <small className="badge bg-dark badge-info">{tags[0]}</small>
          <div className="eth-user">
            <img
              src={`https://avatars.dicebear.com/api/jdenticon/${authorAddress}.svg`}
              className="avatar"
            />
          </div>
          <small>
            <i className="bi-circle-fill text-primary" />{" "}
            {moment(date_created).format("MMM D, YY")}
          </small>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
