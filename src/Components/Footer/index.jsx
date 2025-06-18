import React from "react";

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`py-4 mt-5 ${
        darkMode ? "bg-dark border-top border-secondary" : "bg-light border-top"
      }`}
    >
      <div className="container text-center">
        <p className={`mb-0 ${darkMode ? "text-white" : "text-muted"}`}>
          © 2025 PhoneCompare. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
