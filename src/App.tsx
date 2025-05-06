import React, { useEffect, useState } from "react";
import { GiDiceFire } from "react-icons/gi";
import { TiMediaPause } from "react-icons/ti";

const App = () => {
  const [advice, setAdvice] = useState("");
  const [adviceId, setAdviceId] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchAdvice = async () => {
    try {
      setLoading(true);
      const response = await fetch("	https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdvice(data.slip.advice);
      setAdviceId(data.slip.id);
    } catch (error) {
      console.error("Error fetching advice:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <main className="bg-[#202632] h-screen w-screen flex flex-col justify-center items-center">
      <div className="bg-[#313a49] p-4 relative flex flex-col items-center justify-center gap-5 h-60 w-96 rounded-lg">
        <p className="text-[#52ffaa] text-sm font-semibold">
          ADVICE #{adviceId}
        </p>
        <blockquote className="text-center text-xl text-gray-200 font-semibold">
          "{loading ? "Loading..." : advice}"
        </blockquote>
        {/* this is the line */}
        <div className="relative w-full">
          <hr className="text-[#ffffff]" />
          <TiMediaPause className="absolute text-gray-100  bg-[#313a49] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl" />
        </div>
        <button
          className="absolute -bottom-4 bg-transparent border-none p-0 cursor-pointer disabled:cursor-not-allowed"
          onClick={fetchAdvice}
          disabled={loading}
        >
          <GiDiceFire className="text-4xl text-[#52ffaa]  transition animate-bounce duration-500 cursor-pointer hover:animate-spin" />
        </button>
      </div>
    </main>
  );
};

export default App;
