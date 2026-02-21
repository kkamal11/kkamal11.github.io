import React from "react";
import BookACallBtn from "./BookAcCallBtn";
import Reveal from "./Reveal";

const VisionComp: React.FC = () => {
  return (
    <>
    <Reveal hiddenClass="opacity-0 translate-y-12 scale-95">
      <div className="bg-[#efeded] flex items-center justify-center flex-col py-14 px-6 text-center">
        <h1 className="text-3xl text-gray-800 font-[400px] py-3">
          Got A Vision? Let's Bring it to Life!
        </h1>
        <p className="text-gray-600 text-sm">
          I am always excited to collaborate on new and innovative projects —
        </p>
        <p className="text-gray-600 pb-2 mb-8 text-sm">
          be it starting from scratch or redefining an existing one...
        </p>
        <BookACallBtn />
        </div>
      </Reveal>
    </>
  );
};

export default VisionComp;
