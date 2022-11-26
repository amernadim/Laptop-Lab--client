import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleAddProduct = event => {
    event.preventDefault();
    const form = event.target;
    const categoryId = form.categoryId.value;
    const productName = form.productName.value;
    const productImg = form.productImg.value;
    const productCondition = form.productCondition.value;
    const resalePrice = form.resalePrice.value;
    const originalPrice = form.originalPrice.value;
    const mobileNumber = form.mobileNumber.value;
    const location = form.mobileNumber.value;
    const yearOfUsed = form.yearOfUsed.value;
    const publishDate = form.publishDate.value;

    const product = {
      categoryId,
      productName,
      productImg,
      productCondition,
      resalePrice,
      originalPrice,
      mobileNumber,
      location,
      yearOfUsed,
      publishDate,
      sellerName : user?.displayName,
      sellerEmail : user?.email,
      sellerVerified : "false",
      available : "true",
      advertise : "false"

    }

    fetch('http://localhost:5000/product' , {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          form.reset();
          toast.success("Product added");
          navigate('/dashboard/myProducts')
        } else {
          toast.error(data.message);
        }
      });
  

    // console.log(product);
  }




  return (
    <div className='w-11/12 mx-auto mb-4'>
     <div><h2 className="text-xl font-semibold text-center">Add A Products</h2></div>
     <form onSubmit={handleAddProduct}
        className="container flex flex-col mx-auto space-y-12"
      >
        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">

          <div className="col-span-full sm:col-span-3">
            <label className="text-md">Product Name</label>
            <input
              type="text"
              name="productName"
              className="w-full rounded-md py-1 px-2"
              required
            />
          </div>

          <div className="col-span-full sm:col-span-3">
            <label className="text-md">Resale Price</label>
            <input
              type="number"
              name="resalePrice"
              className="w-full rounded-md py-1 px-2 "
              required
            />
          </div>

          <div className="col-span-full sm:col-span-3">
            <label className="text-md">Orginal Price</label>
            <input
              type="number"
              name="originalPrice"
              className="w-full rounded-md py-1 px-2 "
              required
            />
          </div>

          <div className="col-span-full sm:col-span-3">
            <label className="text-md">Product Photo URL</label>
            <input
              type="text"
              name="productImg"
              className="w-full rounded-md py-1 px-2"
              required
            />
          </div>

          <div className="col-span-full sm:col-span-3">
            <label className="text-md">Condition Type</label>
            <input
              type="text"
              name="productCondition"
              className="w-full rounded-md py-1 px-2"
              required
            />
          </div>

          <div className="col-span-full sm:col-span-3">
            <label className="text-md">Publish time</label>
            <input
              type="text"
              name="publishDate"
              className="w-full rounded-md py-1 px-2"
              required
            />
          </div>

          <div className="col-span-full">
            <label className="text-md">Description</label>
            <input
              type="text"
              name="description"
              className="w-full rounded-md py-1 px-2"
              required
            />
          </div>

          <div className="col-span-full sm:col-span-2">
            <label className="text-md">Mobile Number</label>
            <input
              type="number"
              name="mobileNumber"
              className="w-full rounded-md py-1 px-2"
              required
            />
          </div>

          <div className="col-span-full sm:col-span-2">
            <label className="text-md">Location</label>
            <input
              type="text"
              name="location"
              className="w-full rounded-md py-1 px-2"
              required
            />
          </div>

          <div className="col-span-full sm:col-span-2">
            <label className="text-md">Category Id</label>
            <select name="categoryId" className="select select-sm select-bordered  w-full px-3 rounded-md bg-white" >
              <option>001</option>
              <option>002</option>
              <option>003</option>
            </select>
          </div>

          <div className="col-span-full sm:col-span-2">
            <label className="text-md">Year Of Purchase</label>
            <input
              type="number"
              name="yearOfUsed"
              className="w-full rounded-md py-1 px-2"
              required
            />
          </div>

          <div className="col-span-full sm:col-span-2">
            <label className="text-md text-base-100">.</label>
            <button
              className="btn btn-sm w-full bg-gradient-to-br from-lime-500 via-lime-600 to-green-700 text-white py-1 px-2"
              type="submit"
            >
              Add Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;