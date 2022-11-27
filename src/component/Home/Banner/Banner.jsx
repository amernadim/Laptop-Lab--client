import React from "react";

const Banner = () => {
  return (
    <div className="carousel w-full ">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="w-full">
          <img
            src="https://c0.wallpaperflare.com/preview/932/979/739/dark-mode-black-late-night-work-inspiration.jpg"
            className="w-full object-cover h-96 opacity-75 relative"
            alt="#"
          />

          <div className="absolute top-1/3 md:right-1/3 justify-center items-center">
            <h2 className="text-3xl text-white font-bold text-gray sm:text-4xl text-center">
              Freah Condition used
              <br className="hidden md:block" /> Laptop Collection
            </h2>
            <div className="text-center mt-3">
              <button className="btn btn-md">Learn More . . .</button>
            </div>
          </div>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2  bottom-0 left-3 gap-3">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="w-full">
          <img
            src="https://www.cnet.com/a/img/resize/b9e66585cdf259a71344fddc53b04339e4e162fb/hub/2022/04/27/b796792b-5b34-4405-83eb-efc66371ee06/samsung-galaxy-book-2-pro-360-01.jpg?auto=webp&fit=crop&height=630&width=1200"
            className="w-full object-cover h-96 opacity-75 relative"
            alt="#"
          />

          <div className="absolute top-1/3 md:right-1/3 justify-center items-center">
            <h2 className="text-3xl font-bold text-black sm:text-4xl text-center">
              Freah Condition used
              <br className="hidden md:block" /> Laptop Collection
            </h2>
            <div className="text-center mt-3">
              <button className="btn btn-md">Learn More . . .</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2   bottom-0 left-3 gap-3">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full">
        <div className="w-full">
          <img
            src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2020/05/DSC05928-scaled.jpg"
            className="w-full object-cover h-96 opacity-60 relative"
            alt="#"
          />
          <div className="absolute top-1/3 md:right-1/3 justify-center items-center">
            <h2 className="text-neutral text-3xl font-bold text-gray sm:text-4xl text-center">
              Freah Condition used
              <br className="hidden md:block" /> Laptop Collection
            </h2>
            <div className="text-center mt-3">
              <button className="btn btn-md">Learn More . . .</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2   bottom-0 left-3 gap-3">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
