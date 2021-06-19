import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../App";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark bg-gradient fixed-top">
        <div className="container-fluid">
          <Link
            className="navbar-brand bg-warning p-2 text-white rounded"
            to="/home"
          >
            Gadget Mania
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item text-white">
                <Link className="nav-link text-white" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link text-white" to="/admin">
                  Admin
                </Link>
              </li>
              <li className="nav-item text-info mt-1  p-1">
                {loggedInUser.name}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
