import React from 'react';

const Cards = () => {
  return (
    <div className="w-full h-auto bg-zinc-900 justify-center items-center mb-[55vh] px-32 flex  gap-5 pt-10 flex-wrap md:mb-[4vh]">
      <div className="cardcontainer h-[400px] w-[700px]">
        <div className="relative card w-[90vw]  md:w-[700px] rounded-xl  h-full flex items-center justify-center  bg-[#0b221f]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10">
            ©2019
          </button>
        </div>
      </div>
      <div className="cardcontainer   md:flex  gap-5 w-[700px] h-[400px]">
        <div className="relative mb-5 card w-[90vw]  md:w-[350px] rounded-xl flex items-center justify-center  h-full  bg-[#19423d]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10">
            ©2019
          </button>
        </div>
        <div className="relative card w-[90vw]  md:w-[350px] rounded-xl flex items-center justify-center h-full  bg-[#004D43]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10">
            ©2019
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cards;
