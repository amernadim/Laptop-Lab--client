import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCategory from "./ProductCategory";
import Spinner from "../../Shared/Spinner";

const ProductsCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://laptop-lab-server.vercel.app/categories")
      .then((res) => {
        const datas = res?.data;
        setCategories(datas);
        setLoading(false);
        // console.log(datas);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="mt-5">
      <h2 className="text-center text-3xl font-semibold mt-5">
        Categories
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto gap-2 mt-5 max-lg:2xl">
        {categories.map((category, i) => (
          <ProductCategory key={i} category={category}></ProductCategory>
        ))}
      </div>
    </div>
  );
};

export default ProductsCategories;
