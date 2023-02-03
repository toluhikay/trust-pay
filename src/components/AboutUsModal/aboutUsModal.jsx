import React from "react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { CloseModal, OpenModal } from "../../features/modalSlice";

const AboutUsModal = () => {
  const { modalOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  // if (modalOpen === false) {
  //   return null;
  // }
  return (
    <div className={`fixed top-0 transition-all duration-1000  ease-in-out left-0 ${modalOpen ? "opacity-100 z-[200000]" : "opacity-0 z-[-200000]"} flex items-center justify-center h-full w-full`}>
      <div className="bg-[#00000099] absolute top-0 left-0 w-full h-full"></div>
      <div className="bg-[#fff] absolute rounded-lg cursor-pointer top-[25px] right-[25px] text-[#003356] p-2" onClick={() => dispatch(CloseModal())}>
        <AiOutlineClose className="text-2xl font-bold" />
      </div>
      <div className="bg-white text-[#003356] rounded-[30px] md:w-[80%] w-[90%] h-[80%] relative flex flex-col items-center py-6">
        <p className="font-bold text-2xl mb-4">About Us</p>
        <p className="md:w-4/5 w-[90%] max-h-[600px] overflow-auto font-normal md:text-xl text-base leading-loose tracking-widest text-justify">
          A limited liability company comprising of a team of entrepreneurs, developers, AI-experts, ex bankers and academicians, who have come together to use information technology, automation software and “trado-tech” means, to develop innovations that cause disruption of modus operandi in existing and emerging industries, within the economic spectrum to bring forth, national and continental
          developments, that would foster the socio-economic and political prosperity of individuals, in Nigeria and Africa At large. <br />
          <br />
          It is no news that Nigeria battles with internal problems. But while we struggle with that, the world moves on at lightning speed with advancements in technology, ranging from; Artificial- Intelligence, Robotics, Aeronautics, augmented reality, 3d printing, big data analytics and even the internet. The cycle of our redundancy and degradation as a nation and as a people is bound to repeat
          itself if all our attention is centered on solving problems created decades ago, when in the present, more build up. We cannot move forward as a people if both internal and external affairs are not equally raised to a global competitive standard.
          <br />
          <br />
          No doubt many private institutes recognise this and for that reason, we have seen a ton of innovations in Nigeria in recent times, especially in the finance, entertainment and communication sectors. However, the outcome has been oxymoronic. Our GDP in the last quarter saw an annual increase of 3.2% (NBS), while, our human development index which takes into account health, education and
          general wellbeing of citizens is at 0.534(NBS). This indicates that we have cases of a rather minute percentage of our population being geared towards progression per global standards, while a rather significantly large population of ours head down the path of exclusion, degradation, causing wider margins between, educated and uneducated, rich and poor, rural and urban development etc.{" "}
          <br />
          <br />
          After close observation, we discovered that the reason for this is because many of the “innovations'' are targeted towards those who already live a certain level of developed life. <br />
          <br />
          For example, since only about 109 million (Statista) Nigerians have access to the internet, only about 50% of the country can benefit from innovations within the communication sector strictly built on the internet, and that's why despite how many communication platforms exist in Nigeria, we still suffer grave consequences, birth as a result of disunity and miscommunication. Ergo, the
          continuous rise in insecurity, mal-education, conflict etc. <br />
          <br />
          In a bid to foster, political and socio-economic prosperity amongst young Nigerians, Renmiss Solutions seeks out to deliberately proffer solutions to problems facing existing industries like communication, lending, finance, politics, e-commerce and novel industries, like block chain, artificial intelligence, amongst others, through automation of their value chains and the use of
          traditional and technological means, what we call “trado-tech”, to create systems within them that insure the political and socio-economic prosperity of whoever from amongst its consumers desires so. The embodiment of “Trado-tech”, in the model of our products enables, rural settlers, analogue users and the under looked larger population become elevated in status in spheres of life that
          directly affect their individual development, while also solving problems existing within industries that have hindered the full maximisation of the political and socio-economic potential of digital users. <br />
          <br />
          For example, one of our products, Renmiss mobile application, is designed to empower those at the grassroots (every polling unit) without third party interference. At the same time, it gives room for those within the middle class to gain genuine financial independence if they so wish through a profound e-commerce model, the application embodies. One can find similar trend in the variety
          of products that are created under the ecosystem of “Renmiss Solutions”
        </p>
      </div>
    </div>
  );
};

export default AboutUsModal;
