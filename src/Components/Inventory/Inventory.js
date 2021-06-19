import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Inventory.css";
const Inventory = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [imageUrl, setImageUrl] = useState(null);

  const onSubmit = (data) => {
    const productData = {
      name: data.name,
      price: data.price,
      imageUrl: imageUrl,
    };
    console.log(productData);
    fetch("https://vast-spire-68187.herokuapp.com/addProduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productData),
    }).then((response) => console.log("server side response"));
  };

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imgData = new FormData();
    imgData.set("key", "2f9959e8c0a1e48c21e0262636dc2bee");
    imgData.append("image", event.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imgData)
      .then(function (response) {
        setImageUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="col-md-4 mt-5">
      <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
        <label>Add product Name</label>
        <input
          className="form-control"
          defaultValue="add product"
          {...register("name")}
        />
        <label htmlFor="">Add product Price</label>
        <input
          className="form-control"
          defaultValue="add price"
          {...register("price")}
        />
        <br />
        <br />
        <input
          className="form-control"
          onChange={handleImageUpload}
          type="file"
        />
        <br />
        <br />
        <input className="btn btn-info text-white form-control" type="submit" />
      </form>
    </div>
  );
};

export default Inventory;
