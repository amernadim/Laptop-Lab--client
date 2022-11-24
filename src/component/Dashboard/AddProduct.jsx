import React from 'react';

const AddProduct = () => {
  return (
    <div className='w-11/12 mx-auto mb-4'>
     <div><h2 className="text-xl font-semibold text-center">Add A Products</h2></div>
     <form
        className="container flex flex-col mx-auto space-y-12"
      >
        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">

          <div className="col-span-full sm:col-span-3">
            <label className="text-md">Seller Name</label>
            <input
              type="text"
              name="sellerName"
              className="w-full rounded-md py-1 px-2"
              required
            />
          </div>

          <div className="col-span-full sm:col-span-3">
            <label className="text-md">Seller Email</label>
            <input
              type="email"
              name="sellerEmail"
              className="w-full rounded-md py-1 px-2"
              required
            />
          </div>

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
              name="orginalPrice"
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
              name="conditionType"
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
            <label className="text-md">Category</label>
            <select name="category" className="select select-sm select-bordered  w-full px-3 rounded-md bg-white" >
              <option>Dell</option>
              <option>HP</option>
              <option>Lenovo</option>
            </select>
          </div>

          <div className="col-span-full sm:col-span-2">
            <label className="text-md">Year Of Purchase</label>
            <input
              type="number"
              name="yearOfuse"
              className="w-full rounded-md py-1 px-2"
              required
            />
          </div>

          <div className="col-span-full sm:col-span-2">
            <label className="text-md text-base-100">.</label>
            <button
              className="btn btn-sm w-full rounded-md py-1 px-2"
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