import React from "react";
import FastImage from "../../assets/fast.png";
import SwiftImage from "../../assets/swift.png";
import GlobeImage from "../../assets/globe.png";

const WhyUs = () => {
  return (
    <div className="lg:py-[100px] lg:px-[120px] md:py-[70px] py-[70px] px-[20px] md:px-[50px]">
      <div className="flex md:flex-row flex-col justify-between items-center">
        <WhyTexts
          p1={"About Us"}
          p2="As a modern day fintech company, having integrated technology into financial services, to enhance its use and delivery to our customers."
          p3={"We are committed to changing the status quo and putting together a better experience for our customers."}
          p4="Our company's uniqueness can be attributed to the quality and expertise of the good engineer s and developers, who have brought about the quality work are seen on our platform."
          p5={"We are providing solutions for financial softwares, to help advance, automate and improve financial services, such that transfer of funds from one account to another, paying bills and purchase of products are made possible."}
          p6="With the widespread scope of change and advancement we are leveraging on  innovations' thriving forces, where connectivity, accuracy and speed are are three Cardinal points."
          p7="As Nigeria becomes more digitally inclined, with it's youthful population increasing smartphone penetration and a focused regulatory drive to increase financial inclusion and cashless payments are combined to enhance the thriving fintech experience."
        />
        <WhyImage img={FastImage} />
      </div>
      <div className="flex md:flex-row-reverse mt-5 flex-col justify-between items-center">
        <WhyTexts p1={"Vision"} p2={"A simplified network without commercial limits for individuals and businesses to thrive, anytime, anywhere, in Nigeria and beyond."} />
        <WhyImage img={SwiftImage} />
      </div>
      <div className="flex md:flex-row flex-col justify-between items-center">
        <WhyTexts p1={"Mission"} p2={"To create an all-in-one information sharing, socio-economic and political network, with a modern payment infrastructure that would improve digital users experience, introduce and inspire analogue demography, to believe and plug into the global economy."} />
        <WhyImage img={GlobeImage} />
      </div>
    </div>
  );
};

export default WhyUs;

const WhyTexts = ({ p1, p2, p3, p4, p5, p6, p7 }) => {
  return (
    <div data-aos="flip-left" className="md:w-1/2 w-full md:text-start text-center justify-between">
      <p className="text-[#3a7700] lg:text-[44px] md:text-[30px] text-[25px] mb-6 font-bold">{p1}</p>
      <p className="text-[#737373] mt-4 text-base">{p2}</p>
      <p className="text-[#737373] mt-4 text-base">{p3}</p>
      <p className="text-[#737373] mt-4 text-base">{p4}</p>
      <p className="text-[#737373] mt-4 text-base">{p5}</p>
      <p className="text-[#737373] mt-4 text-base">{p6}</p>
      <p className="text-[#737373] mt-4 text-base">{p7}</p>
      {/* <p className="text-[#737373] text-base">{p2}</p> */}
    </div>
  );
};

const WhyImage = ({ img }) => {
  return (
    <div data-aos="flip-right" className="md:w-1/2 w-full flex items-start justify-center">
      <img src={img} alt="" className="w-4/5" />
    </div>
  );
};
