import { Link } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import "./Product.css";

const Product = (props) => {
  // console.log(props.pd._id);
  let history = useHistory();
  //  const handle
  const { _id, name, price, imageUrl } = props.pd;
  const handleClick = () => {
    console.log(_id);
    history.push("/product/" + _id);
  };

  return (
    <div className="col-md-4 mt-5">
      <div className="card bg-light bg-gradient" style={{ width: "18 rem" }}>
        <img className="card img-top" src={imageUrl} alt="" />
        <h2 className="text-center mt-2">{name}</h2>

        <div className="body p-2 d-flex justify-content-around">
          <h3 className="bg-primary p-2 text-white rounded">{price}</h3>

          <button onClick={handleClick} className="btn btn-outline-success">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
