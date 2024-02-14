import React, { useState } from "react";
import pandaAsk from "./panda-ask.gif";
import pandaYes from "./panda-yes.gif";

const AskPage = () => {
  const [clicked, setClicked] = useState(false);
  const [translate, setTranslate] = useState("translate(0%, 0%)");

  const getRandomTranslate = () => {
    const randomX = Math.random() * (1000 - 500);
    const randomY = Math.random() * (1000 - 500);
    return `translate(${randomX}%, ${randomY}%)`;
  };

  const handleHover = () => {
    setTranslate(getRandomTranslate());
  };

  return (
    <div className="flex flex-col justify-center items-center bg-[#fdd2e8] h-screen w-screen">
      {clicked ? (
        <img src={pandaYes} alt="yes" className="mr-10" />
      ) : (
        <img src={pandaAsk} alt="no" />
      )}
      {clicked ? (
        <div className=" font-protest text-4xl text-[#ffffff] my-5">
          Yay! I Love You!
        </div>
      ) : (
        <div className=" font-protest text-4xl text-[#ffffff] my-5">
          Will you be my valentine?
        </div>
      )}

      <div className="flex justify-around w-1/5 my-5">
        {clicked ? null : (
          <button
            className=" w-24 h-16 font-protest border-2 border-[#ffb7dd] rounded-lg p-3 bg-[#fd9ed0] text-[#ffeef7] text-2xl"
            onClick={() => setClicked(!clicked)}
          >
            Yes
          </button>
        )}
        {clicked ? null : (
          <button
            className=" w-24 h-16 font-protest border-2 border-[#ffb7dd] rounded-lg p-3 bg-[#fd9ed0] text-[#ffeef7] text-2xl"
            style={{ transform: translate }}
            onMouseEnter={handleHover}
          >
            No
          </button>
        )}
      </div>
    </div>
  );
};

export default AskPage;
