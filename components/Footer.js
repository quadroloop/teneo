const Footer = () => {
  return (
    <>
      {/* Footer*/}
      <footer className="bg-black footer-container py-5">
        <div className="page-footer container">
          <img
            className="rss3-logo"
            src="https://docs.rss3.io/assets/images/poweredByRSS3Dark-2f192753dddee65caec3182c7d4d0420.png"
          />
          <div className="">
            <div className="text-white small">
              <div className="mb-2">© Teneo 2022. All Rights Reserved.</div>
              <a href="#!">Privacy</a>
              <span className="mx-1">·</span>
              <a href="#!">Terms</a>
              <span className="mx-1">·</span>
              <a href="#!">FAQs</a>
              <span className="mx-1">·</span>
              <a href="https://github.com/quadroloop/teneo">Github</a>
              <span className="mx-1">·</span>
              <a href="https://docs.rss3.io/">RSS3</a>
            </div>
          </div>
        </div>
      </footer>
      {/* Feedback Modal*/}
      <div className="modal fade" id="feedbackModal" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-gradient-primary-to-secondary p-4">
              <h5
                className="modal-title font-alt text-white"
                id="feedbackModalLabel"
              >
                Send feedback
              </h5>
              <button
                className="btn-close btn-close-white"
                type="button"
                data-bs-dismiss="modal"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
