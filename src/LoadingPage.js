import React from "react";
import loading from "./loading.gif";

const LoadingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#fdd2e8] h-screen w-screen">
      <img src={loading} alt="loading" className=" w-[500px] h-auto" />
    </div>
  );
};

export default LoadingPage;
