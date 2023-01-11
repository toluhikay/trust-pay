import React, { Fragment } from "react";
import {
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiYoutube,
  FiPhoneCall,
} from "react-icons/fi";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  const Socials = [
    { id: 1, icon: <FiFacebook /> },
    { id: 2, icon: <FiTwitter /> },
    { id: 3, icon: <FiLinkedin /> },
    { id: 4, icon: <FiYoutube /> },
    { id: 5, icon: <FiPhoneCall /> },
  ];
  const date = new Date().getFullYear();
  return (
    <Fragment>
      <div className="lg:py-[100px] bg-[#D7DCDE] flex lg:flex-row flex-col items-start justify-between lg:px-[120px] md:py-[70px] py-[70px] px-[20px]    md:px-[50px]">
        <div className="lg:w-[30%] w-full">
          <p className="text-[#1C2126] text-3xl font-bold">
            TRUST<span className="text-[#4525F2]">PAY</span>
          </p>
          <p className="text-base text-[#A1A1A1] mt-[15px]">
            Our payment system is designed to ensure secure and efficient
            transactions. Rest assured that your financial information is safe
            with us.
          </p>
          <div className="flex justify-between md:w-[90%] w-full mt-5">
            {Socials.map((social) => {
              return (
                <div className="sm:w-[48px] w-[30px] h-[30px] rounded-full bg-white flex justify-center items-center sm:h-[48px]">
                  {social.icon}
                </div>
              );
            })}
          </div>
        </div>
        <div className="lg:w-1/2 mt-5 w-full md:flex-row flex-col flex justify-between items-start md:items-center">
          <FooterDiv
            title={"why us"}
            p1="product 1"
            p2={"product 2"}
            p3="product 3"
            p4={"product 4"}
          />
          <FooterDiv
            title={"about"}
            p1="company"
            p2={"subscribe"}
            p3="career"
            p4={"help desk"}
          />
          <FooterDiv
            title={"resources"}
            p1="news"
            p3={"videos"}
            p2="blog"
            p4={"FAQs"}
          />
        </div>
      </div>
      <div className="bg-[#4525F2] text-[#F2F4F8] text-[13px] py-[30px] text-center flex md:flex-row flex-col justify-between items-center lg:px-[120px] px-[30px] md:px-[50px]">
        <p className="flex justify-center items-center">
          {<AiOutlineCopyrightCircle />}
          <span> {date}. All Rights Reserved</span>
        </p>
        <div className="flex lg:w-[20%] md:w-[30%] md:mt-0 mt-4 justify-between">
          <p className="mr-3">Privacy</p>
          <p>Terms Of Service</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;

const FooterDiv = ({ title, p1, p2, p3, p4 }) => {
  return (
    <div className="md:mb-0 mb-20">
      <p className="text-[#1C2126] capitalize font-bold md:text-[26px] text-[22px] mb-[35px]">
        {title}
      </p>
      <p className="text-[#1C2126] capitalize mt-5 font-bold md:text-lg text-xs">
        {p1}
      </p>
      <p className="text-[#1C2126] capitalize mt-5 font-bold md:text-lg text-xs">
        {p2}
      </p>
      <p className="text-[#1C2126] capitalize mt-5 font-bold md:text-lg text-xs">
        {p3}
      </p>
      <p className="text-[#1C2126] capitalize mt-5 font-bold md:text-lg text-xs">
        {p4}
      </p>
    </div>
  );
};
