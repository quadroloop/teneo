import FeedCard from "./FeedCard";

const FeedSkeleton = () => {
  return (
    <>
      {[...Array(99).keys()].map(() => {
        return <div className="feed-card feed-card-skeleton"></div>;
      })}
    </>
  );
};

export default FeedSkeleton;
