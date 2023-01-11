import React from "react";

const Latest = () => {
  return (
    <div className="lg:py-[100px] text-center flex flex-col items-center lg:px-[120px] md:py-[70px] py-[70px] px-[70px]    md:px-[50px]">
      <p className="text-[#1C2126] md:text-[52px] text-[30px] font-bold">
        Latest Updates and News
      </p>
      <p className="text-[#737373] md:w-[35%] mt-4">
        We're working on something big and can't wait to share it with you. Stay
        tuned!
      </p>
      <div className="flex justify-between flex-wrap mt-[72px] items-center">
        <LatestNews
          img={
            "https://images.unsplash.com/photo-1560263816-d704d83cce0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnV0dGVyZmx5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          }
        />
        <LatestNews
          img={
            "https://media.istockphoto.com/id/930844846/photo/palm-tree-in-zanzibar.jpg?b=1&s=170667a&w=0&k=20&c=lYGIjbXQnOv50K6yWXt0i5QH6FafaI7w7x4OwSdVq38="
          }
        />
        <LatestNews
          img={
            "https://images.unsplash.com/photo-1560263816-d704d83cce0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnV0dGVyZmx5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          }
        />
      </div>
    </div>
  );
};

export default Latest;

const LatestNews = ({ img }) => {
  return (
    <div className="md:w-[32%] w-full md:mb-0 mb-12 text-start">
      <img src={img} className="w-full" alt="" />
      <p className="text-[#1C2126] font-bold text-[13px] mt-4">
        Category Name | Date
      </p>
      <p className="text-[#1C2126] lg:mb-[40px] mb-4 mt-2 font-bold lg:text-xl text-base">
        Stay tuned, we have exciting developments on the horizon!
      </p>
      <p className="text-[#737373] lg:text-base text-xs">
        We appreciate your patience as we prepare something special for you,
        stay tuned!
      </p>
    </div>
  );
};
