const FeedCard = () => {
  return (
    <div className="feed-card">
      <img src="https://images.pexels.com/photos/3992945/pexels-photo-3992945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      <div className="article-info">
        <span className="title news-header-text">
          A new virus in under thre radar
        </span>
        <span>
          This is another thing to think about this lorem ipsum the world is
          very good. This is the oldest company. But this is not cool this is
          very nice and cool.
        </span>
        <div className="feed-stats">
          <div className="eth-user">
            <img
              src="https://avatars.dicebear.com/api/jdenticon/brycenarcisocenizamercines.svg"
              className="avatar"
            />
            <span>vitalik.eth</span>
          </div>
          <small className="badge bg-dark badge-info">Donation</small>
          <div className="eth-user">
            <img
              src="https://avatars.dicebear.com/api/jdenticon/brycenarcisocenizamercines.svg"
              className="avatar"
            />
            <span>0x02304AE</span>
          </div>
          <small>
            <i className="bi-circle-fill text-primary" /> December 20, 2022
          </small>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
