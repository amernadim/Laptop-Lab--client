import React from "react";

const BookingModal = () => {
  return (
    <>
      <input type="checkbox" id="bookingModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="bookingModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Model Name</h3>
          <form className="grid grid-cols-1 gap-3 mt-10">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="input w-full input-bordered"
              disabled
            />

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="input w-full input-bordered"
              disabled
            />

            <input
              name="price"
              type="text"
              placeholder="Price"
              className="input w-full input-bordered "
              disabled
            />

            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />

            <input
              type="text"
              name="location"
              className="input w-full input-bordered "
              placeholder="Product Receive Location"
            />
            <br />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value ="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
