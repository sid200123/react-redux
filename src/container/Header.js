import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="py-3 w-100 d-flex justify-content-between align-items-center">
      <span className="fs-3 fw-bold">FakeShop</span>
      <Link className="nav-link" to="/">
        Home
      </Link>
    </div>
  );
};

export default Header;
