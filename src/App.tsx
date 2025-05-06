import React, { useState } from "react";
import { GiDiceFire } from "react-icons/gi";
import { TiMediaPause } from "react-icons/ti";

const App = () => {
  const [advice, setAdvice] = useState("");

  const [loading, setLoading] = useState(false);

  const fetchAdvice = async () => {
    try {
      const res = await fetch("	https://api.adviceslip.com/advice");
      const data = await res.json();
      console.log(data);
      setAdvice(data.slip.advice);
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
  };

  fetchAdvice();
  return (
    <main className="bg-[#202632] h-screen w-screen flex flex-col justify-center items-center">
      <div className="bg-[#313a49] p-4 relative flex flex-col items-center justify-center gap-5 h-60 w-96 rounded-lg">
        <p className="text-[#52ffaa] font-serif">ADVICE #117</p>
        <blockquote className="text-center text-xl text-gray-200 font-semibold">
          "{advice}"
        </blockquote>
        {/* this is the line */}
        <div className="relative w-full">
          <hr className="text-[#ffffff]" />
          <TiMediaPause className="absolute text-gray-100  bg-[#313a49] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl" />
        </div>
        <GiDiceFire
          className="absolute text-4xl -bottom-4 text-[#52ffaa] animate-bounce transition duration-500 cursor-pointer hover:animate-spin"
          onClick={fetchAdvice}
        />
      </div>
    </main>
  );
};

export default App;
