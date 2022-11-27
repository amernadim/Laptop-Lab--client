import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Spinner from "../Shared/Spinner";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51M6QudL64DhoRs6IF8JhngpTUKeXFHh2b3keox62rlC7oWM93UlJNVxHRgqSobhyBKMAHxl6cWOrzbvsrO7yDjYD00LWe4vMNx"
);

const Payment = () => {
  const data = useLoaderData();
  const { productName, productPrice, _id, productId, buyerEmail } = data;
  // console.log(productId);
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Spinner />;
  }

  return (
    <div className="card card-side bg-base-100 shadow-xl w-11/12 mx-auto">
      <div className="card-body">
        <h2 className="card-title">{productName}</h2>
        <p>{productPrice}</p>
        <div>
          {/* <Elements stripe={stripePromise}>
            <CheckoutForm data={data} />
          </Elements> */}
        </div>
      </div>
    </div>
  );
};

export default Payment;
