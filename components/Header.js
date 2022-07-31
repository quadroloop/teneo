import Logo from "./Logo";

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm"
      id="mainNav"
    >
      <div className="container px-5">
        <Logo />

        <input
          className="search-bar"
          type="text"
          placeholder="Search Address / ENS Address"
        ></input>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="bi-list" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
            <li className="nav-item">
              <a className="nav-link me-lg-3" href="#top-stories">
                Top Stories
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link me-lg-3" href="#feed">
                Main Feed
              </a>
            </li>
          </ul>
          <button className="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0">
            <span className="d-flex align-items-center">
              <i className="bi-chat-text-fill me-2" />
              <span className="small">Connect via Metamask</span>
            </span>
          </button>

          {/* <img
            src="https://avatars.dicebear.com/api/jdenticon/brycenarcisocenizamercines.svg"
            className="avatar"
          /> */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
