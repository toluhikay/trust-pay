import React from "react";
import HeroImage from "../../assets/hero.png";
import swal from "sweetalert";

const Hero = () => {
  return (
    <div className="bg-[#F1F9F9] flex md:flex-row md:items-center flex-col justify-between lg:py-[100px] lg:px-[120px] md:py-[70px] py-[120px] px-[20px] md:px-[50px]  min-h-screen w-full">
      <div className="lg:w-1/2 md:w-2/3 flex flex-col md:text-start text-center w-full">
        <p className="text-[#003356] lg:text-[45px] md:text-[35px] text-[25px] capitalize font-bold">a simplified network without financial barriers</p>
        <p className="text-[#1C2126] font-bold lg:text-lg md:text-xs mt-6">connecting merchants and payment service providers for fast-growing markets in Nigeria, Africa and beyond.</p>
        <div className="flex items-center mt-6 md:flex-row flex-col">
          <button className="bg-[#003356] w-auto hover:bg-[#f1f9f9] hover:border hover:border-[#003356] hover:text-[#003356] text-white capitalize lg:text-lg md:text-xs py-[10px] px-[22px] rounded-[15px]" onClick={() => swal("Coming Soon!", "The future is not something we enter. The future is something we create.  - Leonard I. Sweet")}>
            create a free account
          </button>
          <p className="text-[#1C2126] text-lg md:mt-0 mt-3 ml-3 font-bold">or Contact Us</p>
        </div>
      </div>
      <div className="lg:w-1/2 md:w-1/3 w-full flex justify-center md:mt-0 mt-4 items-center">
        <img src={HeroImage} className="lg:w-[80%] md:w-full w-[80%] flex justify-center items-center" alt="" />
      </div>
    </div>
  );
};

export default Hero;
