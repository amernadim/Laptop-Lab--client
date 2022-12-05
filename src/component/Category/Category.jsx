import React, { useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Spinner from "../Shared/Spinner";
import BookingModal from "./BookingModal";
import Product from "./Product";

const Category = () => {
  const data = useLoaderData();
  const [product, setProduct] = useState(null);

  // const navigation = useNavigation();
  // if (navigation.state === "loading") {
  //   return <Spinner />;
  // }

  return (
    <div className="w-11/12 mx-auto my-5 mt-[90px]">
      <div className="my-5"> 
        <h2 className="text-center text-2xl font-semibold mt-5">Laptop</h2>
      </div>

      <div className="products grid grid-cols-1 md:grid-cols-2 gap-3 w-11/12 mx-auto">
        {data.map((product) => (
          <Product
            key={product._id}
            product={product}
            setProduct={setProduct}
          ></Product>
        ))}
      </div>

      {product && (
        <BookingModal product={product} setProduct={setProduct}></BookingModal>
      )}
    </div>
  );
};

export default Category;
