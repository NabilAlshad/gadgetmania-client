import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inventory from "../Inventory/Inventory";
import ManageProduct from "../ManageProduct/ManageProduct";

const Admin = () => {
  return (
    <div>
      <Router>
        <ul className="mt-5" style={{ listStyle: "none" }}>
          <li className="nav-item bg-success">
            <Link className="nav-link text-white" to="/manageProduct">
              Manage Product
            </Link>
          </li>
          <li className="nav-item bg-success">
            <Link className="nav-link text-white" to="/inventory">
              Inventory
            </Link>
          </li>
        </ul>
        <Switch>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route path="/manageProduct">
            <ManageProduct></ManageProduct>
          </Route>
          <Route path="/">
            <ManageProduct></ManageProduct>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Admin;
