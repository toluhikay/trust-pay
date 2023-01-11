import React from "react";

const AboutUs = () => {
  return (
    <div className="lg:py-[100px] lg:px-[120px] lg:h-[550px] md:h-[580px] h-auto flex md:flex-row flex-col w-full justify-between md:py-[70px] py-[70px] px-[70px] md:px-[50px]">
      <div
        data-aos="fade-right"
        className=" md:w-[49%] h-full w-full md:mb-0 mb-6 bg-[#007CE630] md:border-l-8 border-t-8 p-4 border-[#007CE6]"
      >
        <p className="text-[#007CE6] font-bold md:text-[30px] text-[22px] mb-4">
          About Us
        </p>
        <p className="text-[#4f4f4f] text-[14px] font-semibold mb-4">
          We are a Nigerian Fintech Company, comprising entrepreneurs,
          developers, AI experts, ex-bankers, and academicians, developing
          different payment solutions to connect merchants and payment service
          providers, for high-growth markets in Nigeria, Africa, and beyond.
        </p>
        <p className="text-[#007CE6] font-bold text-lg my-2">
          What We Have Done
        </p>
        <p className="text-[#4f4f4f] text-xs font-semibold">
          We developed a platform that will benefit all kinds of commercial
          activities. Our platform optimizes a series of payment methods and
          makes it seamless, safe, and secured, as we boost business growth.
        </p>
      </div>
      <div
        data-aos="fade-left"
        className="md:w-[49%] h-full flex flex-col justify-between w-full"
      >
        <div className="sw-full bg-[#007CE630] h-[48%] border-t-8 md:mb-0 mb-8 md:border-l-8 p-4 border-[#007CE6]">
          <p className="text-[#007CE6] font-bold md:text-[25px] text-[18px] mb-2">
            Vision
          </p>
          <p className="text-[#4f4f4f] text-sm font-semibold">
            A simplified network without commercial limits for individuals and
            businesses to thrive, anytime, anywhere, in Nigeria and beyond.
          </p>
        </div>
        <div className="sw-full h-[48%] bg-[#007CE630] border-t-8 md:border-l-8 p-4 border-[#007CE6]">
          <p className="text-[#007CE6] font-bold md:text-[25px] text-[18px] mb-2">
            Mission
          </p>
          <p className="text-[#4f4f4f] text-sm font-semibold">
            To create an all-in-one information sharing, socio-economic and
            political network, with a modern payment infrastructure that would
            improve digital users experience, introduce and inspire analogue
            demography, to believe and plug into the global economy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
