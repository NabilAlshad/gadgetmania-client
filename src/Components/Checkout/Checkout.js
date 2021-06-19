import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { userContext } from "../../App";
import "./Checkout.css";

const Checkout = () => {
  const { Id } = useParams();
  const [loggedInUser, setLoggedInUser] = useContext(userContext);

  console.log(Id);
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("https://vast-spire-68187.herokuapp.com/product/" + Id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItem(data);
      });
  }, [Id]);
  const { name, price, imageUrl } = item;

  const onSubmit = () => {
    const orderDetails = {
      ...loggedInUser,
      productName: item.name,
      productPrice: item.price,
      time: new Date(),
    };
    fetch("https://vast-spire-68187.herokuapp.com/addOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          alert("your order is placed");
        }
      });
  };

  return (
    <div className="col-md-6 col-sm-12 mt-5 text-center">
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">price</th>
          </tr>
        </thead>
        <tr className="bg-secondary">
          <td className="text-info">{name}</td>
          <td className="text-white">{price}</td>
        </tr>
      </table>
      <button onClick={onSubmit} className="btn btn-outline-success mt-5">
        place order
      </button>
    </div>
  );
};

export default Checkout;
