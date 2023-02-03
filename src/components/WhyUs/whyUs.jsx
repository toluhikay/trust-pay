import React from "react";
import FastImage from "../../assets/fast.png";
import SwiftImage from "../../assets/swift.png";
import GlobeImage from "../../assets/globe.png";

import { OpenModal } from "../../features/modalSlice";
import { useDispatch } from "react-redux";

const WhyUs = () => {
  const dispatch = useDispatch();
  return (
    <div className="lg:py-[100px] lg:px-[120px] md:py-[70px] py-[70px] px-[20px] md:px-[50px]">
      <div className="flex md:flex-row flex-col justify-between items-center">
        <WhyTexts
          p1={"About Us"}
          p2="A limited liability company comprising of  a team of entrepreneurs, developers, AI-experts, ex bankers and academicians, who have come together to use information technology, automation software and “trado-tech” means, to develop innovations that cause disruption of modus operandi in existing and emerging industries, within the economic spectrum to bring forth,  national and continental developments, that would foster the socio-economic and political prosperity of individuals, in Nigeria and Africa At large......"
          buttonText={"Read More"}
          onClick={() => dispatch(OpenModal())}
        />
        <WhyImage img={FastImage} />
      </div>
      <div className="flex md:flex-row-reverse mt-5 flex-col justify-between items-center">
        <WhyTexts p1={"Vision"} p2={"A network of interrelated innovations in a variety of industries, upholding political and socio-economic prosperity of Nigerians and Africans at large."} />
        <WhyImage img={SwiftImage} />
      </div>
      <div className="flex md:flex-row flex-col justify-between items-center">
        <WhyTexts p1={"Mission"} p2={"A combination of technology, tradition, information delivery and sincerity of purpose in creating unique systems  that cause disruptions in the modus operandi of  existing and emerging sectors within the economic spectrum, to trigger individual, collective, national and continental development of Nigeria and Africa. "} />
        <WhyImage img={GlobeImage} />
      </div>
    </div>
  );
};

export default WhyUs;

const WhyTexts = ({ p1, p2, buttonText, onClick }) => {
  return (
    <div data-aos="flip-left" className="md:w-1/2 w-full md:text-start text-center justify-between">
      <p className="text-[#3a7700] lg:text-[44px] md:text-[30px] text-[25px] mb-6 font-bold">{p1}</p>
      <p className="text-[#737373] mt-4 text-base">{p2}</p>
      <button className="mt-4" onClick={onClick}>
        {buttonText}
      </button>
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
