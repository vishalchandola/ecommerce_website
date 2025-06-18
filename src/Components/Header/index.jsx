import logo from "./../../assets/logo.svg";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header>
      <nav
        className={`navbar navbar-expand-lg ${
          darkMode ? "navbar-dark bg-dark" : "navbar-light bg-white"
        } shadow-sm`}
      >
        <div className="container">
          <a className="navbar-brand fw-bold fs-3" href="#">
            <img src={logo} alt="" />
          </a>

          <div className="d-flex align-items-center gap-3">
            <button
              className={`btn ${
                darkMode ? "btn-outline-light" : "btn-outline-dark"
              }`}
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
            >
              {darkMode ? "🌞" : "🌙"}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
