import React from "react";

const Spinner = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div class="flex items-center justify-center ">
        <div class="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Spinner;
