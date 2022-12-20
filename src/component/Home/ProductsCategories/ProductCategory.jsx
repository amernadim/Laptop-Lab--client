import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCategory = ({ category }) => {
  const { category: cateroryName, categoryId, categoryImg } = category;
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/category/${id}`);
  };

  return (
    <div
      onClick={() => handleNavigate(categoryId)}
      className="card bg-base-100 shadow-xl hover:bg-white hover:-translate-y-6 "
    >
      <div className="card-body justify-center items-center">
        <img className="h-16" src={categoryImg} alt="" />
        <p className="text-2xl font-semibold ">{cateroryName}</p>
      </div>
    </div>
  );
};

export default ProductCategory;
