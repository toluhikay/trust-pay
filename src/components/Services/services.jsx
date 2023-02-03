import React from "react";
import RenmissLogo from "../../assets/RenmissLogo.png";
import Renmeets from "../../assets/Renmeets.png";
import Renvest from "../../assets/Renvest.png";
import Rencoin from "../../assets/Rencoin.png";

const Services = () => {
  return (
    <div className="bg-[#003356] lg:py-[100px] text-center flex flex-col items-center lg:px-[120px] md:py-[70px] py-[70px] px-[30px] md:px-[50px]">
      <p className="text-[#F2F4F8] md:text-[52px] text-[30px] font-bold">Our Products</p>
      <p className="text-[#B4A8F9] md:w-[35%] mt-4">We are busy curating the best features you could ever imagine, keep in anticipation!</p>
      <div className="flex mt-12 justify-between items-start flex-wrap">
        <Service
          p1={"Renmiss Mobile Application"}
          img={RenmissLogo}
          p2="1.Renmiss mobile application is an all-in-one Social, finance and E-commerce platform, designed for interaction, cultural cross-pollination, grass root human capital development and production and dissemination of action-oriented knowledge-based products, ranging from commerce, to finance, health, education, welfare, entertainment, politics, to mention but a few, to facilitate the engagement of Nigerian youths, key political players, mentors, and many more, to enable rural exposure to opportunities, common understanding and consensus on key institutional reform issues."
        />
        <Service
          p1={"Renmeets"}
          img={Renmeets}
          p2="4.RenMeets is a video conferencing platform that enables users to join virtual meetings via audio, video, chat, and screen sharing with up to 1000 people with no time limits. Renmeets aims at providing convenience in the access to education, through the use of information technology. With Renmeets, Nigerians from any part of country could easily have access to quality education."
        />
        <Service
          p1={"Renvest"}
          img={Renvest}
          p2="2.Renvest is a premier crypto-stock Investment platform, designed by RenMiss Solutions LTD to promote the use of crypto currency: Rencoin in stock investment to foster the co-ownership on a decentralised ledger as a unique way for all and sundry to be able to acquire wealth from the comfort of their home.
          Renvest is an investment platform that permutes the benefits of Blockchain technology, Stock investment, Premium saving and budgeting, into one system, which allow users engage in a variety of financial plans, to maximise earning and aid in attaining financial independence."
        />
        <Service id={"red"} p1={"Rencoin"} img={Rencoin} p2="3.RenCoin is a token secured with cryptography; cryptocurrency, listed on the Binance block chain, and backed by the Renmiss Tech LTD, with 2 billion share capital, embedded with mechanisms that fosters, stability, sustainability and liquidity, as an impetus for economic growth of Nigerians, Nigeria and Africa at large." />
      </div>
    </div>
  );
};

export default Services;

const Service = ({ img, p1, p2, id }) => {
  return (
    <div className="flex flex-col md:w-[48%] text-center w-full my-4 justify-between mb-20 items-center">
      <div className={`${id === "red" ? "bg-[#b7000090]" : "bg-white"} bg-white mb-4 rounded-full flex justify-center items-center lg:h-[160px] lg:w-[160px] md:w-[70px] md:h-[100px] w-[100px] h-[100px]`}>
        <img src={img} className="w-[70px] h-[70px]" alt="" />
      </div>
      <div className="w-full ml-3">
        <p className="lg:text-[26px] text-[20px] text-[#F2F4F8] font-bold">{p1}</p>
        <p className="text-[#B4A8F9] lg:text-base text-xs mt-3">{p2}</p>
        {/* <button className="mt-3 flex justify-center items-center text-[#F2F4F8] text-[13px] cursor-pointer">
          Read More <MdOutlineNavigateNext className="text-xl text-[#1C2126]" />
        </button> */}
      </div>
    </div>
  );
};
