import React from "react";
import BookACallBtn from "./BookAcCallBtn";

const VisionComp: React.FC = () => {
  return (
    <div className="bg-[#efeded] flex items-center justify-center flex-col py-14 px-6">
          <h1 className="text-3xl text-gray-800 font-[400px] py-3">Got A Vision? Let's Bring it to Life!</h1>
          <p className=" text-gray-600 text-sm">
            I am always excited to collaborate on new and innovative projects - be it
          </p>
          <p className=" text-gray-600 pb-2 mb-8 text-sm">
            starting from scratch or redefining an existing one...
          </p>
          <BookACallBtn />
    </div>
  );
};

export default VisionComp;
