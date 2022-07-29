const CTAButton = (props) => {
  return (
    <>
      <div className="cta-button">
        <span>{props.children}</span>

        <div className="delta">
          <div className="bubble"></div>
          <i className="bi-chevron-right"></i>
        </div>
      </div>
    </>
  );
};

export default CTAButton;
