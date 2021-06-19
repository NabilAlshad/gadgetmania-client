import React, { useState, useEffect } from "react";
import Product from "../Product/Product";

const Home = () => {
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
  return (
    <div className="container">
      <div className="row">
        {products.map((pd) => (
          <Product pd={pd}></Product>
        ))}
      </div>
    </div>
  );
};

export default Home;
