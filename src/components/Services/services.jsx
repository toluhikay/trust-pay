import React from "react";
import { MdOutlineNavigateNext } from "react-icons/md";

const Services = () => {
  return (
    <div className="bg-[#4525F2] lg:py-[100px] text-center flex flex-col items-center lg:px-[120px] md:py-[70px] py-[70px] px-[30px] md:px-[50px]">
      <p className="text-[#F2F4F8] md:text-[52px] text-[30px] font-bold">
        Features
      </p>
      <p className="text-[#B4A8F9] md:w-[35%] mt-4">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur.
      </p>
      <div className="flex mt-12 justify-between items-center flex-wrap">
        <Service
          p1={"Accept Payments"}
          img="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGF5bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          p2="Receiving cash from anywhere in the globe Is possible.."
        />
        <Service
          p1={"Funds Transfer"}
          img="https://plus.unsplash.com/premium_photo-1671260683459-834df531ad7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZnVuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          p2="Transfer or fund to a variety of banks account is achievable."
        />
        <Service
          p1={"Biller Aggregation Services"}
          img="https://images.unsplash.com/photo-1579170053380-58064b2dee67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmlsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          p2="Fast and easier transaction can be achieved across any digital platform."
        />
        <Service
          p1={"Goal Oriented Savings"}
          img="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z29hbCUyMG9yaWVudGF0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          p2="Attain your saving goals quicker.
          Saving towards your goals can be achieved with satisfaction with us."
        />
        <Service
          p1={"Cost effective transaction fees"}
          img="https://images.unsplash.com/photo-1593538313188-7a6ab30a8ae4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          p2="Our services are undercutting established institutions with much lower fees and they speak Yeah deliver it Sift and seamless and speedier delivery."
        />
        <Service
          p1={"Safe and seamless platform access"}
          img="https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2VjdXJlJTIwcGF5bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          p2="Our platform provides data- driven consumer insights and ensures that all transactions are safe."
        />
        <Service
          p1={"Cross-border transactions"}
          img="https://images.unsplash.com/photo-1616077168079-7e09a677fb2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFzdCUyMHBheW1lbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          p2="We're proud to offer cross-border transaction capabilities to our customers, making it easy to do business globally."
        />
        <Service
          p1={"Simple. Quick. Reliable"}
          img="https://media.istockphoto.com/id/1196492920/photo/businessman-and-speed-of-technology-concept.jpg?b=1&s=170667a&w=0&k=20&c=nvNVbg2LcgPR792rFX-W31dUxjc_OW5zQJzr9U8AopE="
          p2="We strive to make transactions as simple and fast as possible, so you can focus on what matters."
        />
        <Service
          p1={"Excellent User experience"}
          img="https://media.istockphoto.com/id/1371160707/photo/young-business-partners-working-on-project-in-modern-office.jpg?b=1&s=170667a&w=0&k=20&c=9wVdigDg4S3IIVtaEGxUSRJkpyNHto5z96pzclvA7oo="
          p2="We don't settle for good enough, we strive for excellence in every aspect of our users' experience."
        />
      </div>
    </div>
  );
};

export default Services;

const Service = ({ img, p1, p2 }) => {
  return (
    <div className="flex md:w-[48%] w-full my-4 mb-20 items-center">
      <img
        src={img}
        className="lg:w-[160px] object-cover lg:h-[160px] md:w-[100px] md:h-[100px] w-[70px] h-[70px] rounded-full"
        alt=""
      />
      <div className="text-start ml-3">
        <p className="lg:text-[26px] text-[20px] text-[#F2F4F8] font-bold">
          {p1}
        </p>
        <p className="text-[#B4A8F9] lg:text-base text-xs mt-3">{p2}</p>
        {/* <button className="mt-3 flex justify-center items-center text-[#F2F4F8] text-[13px] cursor-pointer">
          Read More <MdOutlineNavigateNext className="text-xl text-[#1C2126]" />
        </button> */}
      </div>
    </div>
  );
};
