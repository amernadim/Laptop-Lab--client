import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import toast from "react-hot-toast";


const BookingModal = ({ product,setProduct }) => {
  const { user } = useContext(AuthContext);

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
 
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const price = form.price.value;
    const mobileNumber = form.phone.value;
    const receiveLocation = form.location.value;

    const booking = {
      buyerName: name,
      buyerEmail: email,
      productPrice: price,
      buyerNumber: mobileNumber,
      receiveLocation,
      productId: _id,
      productName,
      productImg
    };

    // console.log(booking);

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          form.reset();
          toast.success("This item is Booked");
          setProduct(null)
        } else {
          toast.error(data.message);
        }
      });
  };

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
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <h3 className="text-lg font-bold">{productName} </h3>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="input w-full input-bordered"
              defaultValue={user?.displayName}
              disabled
            />

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="input w-full input-bordered"
              defaultValue={user?.email}
              disabled
            />

            <input
              name="price"
              type="text"
              placeholder="Price"
              className="input w-full input-bordered "
              defaultValue={`${resalePrice} Tk`}
              disabled
            />

            <input
              name="phone"
              type="number"
              placeholder="Phone Number"
              className="input w-full input-bordered"
              required
            />

            <input
              type="text"
              name="location"
              className="input w-full input-bordered "
              placeholder="Product Receive Location"
              required
            />
            <br />
            <input
              className="btn bg-gradient-to-br from-lime-500 via-lime-600 to-green-700 text-white w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
