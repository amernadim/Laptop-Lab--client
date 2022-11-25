import React, { useState } from "react";
// import { Link } from 'react-router-dom';
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import BookingModal from "./BookingModal";

const Product = ({ product }) => {
  
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
    _id,
  } = product;
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
            <p  className="font-semibold">Original Price : {originalPrice} Tk.</p>
            <p  className="font-semibold">Year of use : {yearOfUsed}.</p>
            {/* <p>Publish Date : {}</p> */}
          </div>
          <div className="flex gap-2  items-center mt-4">
            <p  className="font-semibold">Seller Name : {sellerName}</p>
            <span>
              <CheckBadgeIcon className="w-6 h-4 text-blue-600" />
            </span>
          </div>
          <button className="text-red-600 hover:underline">
            Report to Admin
          </button>
          <div className="mt-3 text-center">
            <label htmlFor="bookingModal" className="btn btn-sm">
              Book Now
            </label>
          </div>
        
           <BookingModal
           product={product}
           ></BookingModal>
        
        </div>
      </div>
    </div>
  );
};

export default Product;
