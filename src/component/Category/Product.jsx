import React, { useState } from "react";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import toast from "react-hot-toast";

const Product = ({ product: data, setProduct }) => {
  // console.log(product);
  const {
    categoryName,
    advertise,
    available,
    categoryId,
    location,
    mobileNumber,
    originalPrice,
    productCondition,
    productImg,
    productName,
    publishDate,
    resalePrice,
    sellerEmail,
    sellerName,
    yearOfUsed,
    sellerVerified,
    _id,
  } = data;

  const handleReport = (id) => {
    const data = {
      reportStatus : "reported"
    }
    fetch(`http://localhost:5000/product/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Report Successful");
        }
      });    
  };

  return (
    <div className="max-w-lg p-4 shadow-md">
      <div className="space-y-4">
        <div className="space-y-2">
          <img
            src={productImg}
            alt="#"
            className="block object-cover object-center w-full rounded-md h-52 dark:bg-gray-500"
          />
          <div className="flex items-center text-xs">
            <span>Publish : {publishDate}</span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="">
            <h3 className="text-xl font-semibold ">{productName}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <p className="font-semibold">Location : {location}.</p>
            <p className="font-semibold">Resale Price : {resalePrice} Tk.</p>
            <p className="font-semibold">
              Original Price : {originalPrice} Tk.
            </p>
            <p className="font-semibold">Year of use : {yearOfUsed}.</p>
            {/* <p>Publish Date : {}</p> */}
          </div>
          <div className="flex gap-2 items-center mt-4">
            <p className="font-semibold">Seller : {sellerName}</p>
            {sellerVerified === "true" && (
              <span>
                <CheckBadgeIcon className="w-6 h-4 text-blue-600" />
              </span>
            )}
          </div>
          <button onClick={()=> handleReport(_id)} className="text-red-600 hover:underline">
            Report to Admin
          </button>
          <div className="mt-3 text-center">
            <label
              onClick={() => setProduct(data)}
              htmlFor="bookingModal"
              className="btn btn-sm bg-gradient-to-br from-lime-500 via-lime-600 to-green-700 text-white"
            >
              Book Now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
