import React from "react";
import swal from "sweetalert";

const Subcribe = () => {
  return (
    <div className="bg-[#003356] lg:py-[100px] text-center flex justify-between md:flex-row flex-col items-center lg:px-[120px] md:py-[70px] py-[70px] px-[30px] md:px-[50px]">
      <p className="text-[#F2F4F8] lg:text-[44px] md:text-[30px] text-[25px] font-bold">Subscribe to our weekly newsletter</p>
      <button
        className="bg-[#F2F4F8] text-[#1C2126] md:mt-0 mt-6 text-base font-semibold py-3 px-5 rounded-[100px] cursor-pointer"
        onClick={() => {
          swal("Coming Soon!", "We appreciate your interest in this feature. Unfortunately, it's not available at the moment, but it's something we're actively working on. Please check back with us soon!");
        }}
      >
        Subscribe
      </button>
    </div>
  );
};

export default Subcribe;
