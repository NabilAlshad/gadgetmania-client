import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Manage.css";

const ManageProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://vast-spire-68187.herokuapp.com/products", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);
  console.log(products._id);
  const deleteProduct = (id) => {
    console.log(id);
    fetch(`https://vast-spire-68187.herokuapp.com/deleteProduct/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  return (
    <div className="col-md-6" style={{ margin: "50px auto" }}>
      {products.map((pd) => (
        <div className="product p-2 bg-dark bg-gradient">
          <h4 className="text-warning">
            {pd.name}---<span>{pd.price}</span>
          </h4>

          <button
            onClick={() => deleteProduct(pd._id)}
            className="btn btn-danger"
            style={{ width: "70px" }}
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ManageProduct;
