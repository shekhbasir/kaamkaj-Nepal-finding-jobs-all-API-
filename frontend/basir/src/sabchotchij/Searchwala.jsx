import React from "react";
import { Search } from "lucide-react";
function Searchwala() {
  return (
    <div className="w-full flex justify-center px-4 py-5">
      <div className="max-w-3xl flex flex-col items-center text-center gap-6">
        <div className="px-6 py-1 bg-gray-100 rounded-full shadow-md">
          <span className="text-red-600 font-medium">
            No. 1 Jobs Hunt Site In Nepal
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          Search, Apply & Get <br />
          <span className="text-violet-900">Your Dream Jobs</span>
        </h1>

        <p className="text-gray-600 text-lg">
          Find the best jobs, apply easily and grow your career. Nepal And Out
          Side Of Nepal
        </p>

        <div className="flex items-center bg-gray-100 rounded-full shadow-md overflow-hidden w-[400px] h-[37px]">
          <input
            type="text"
            placeholder="Search jobs"
            className="flex-1 px-4 h-full outline-none bg-transparent text-sm"
          />

          <button className="h-full px-4 bg-violet-600 flex items-center justify-center">
            <Search size={18} className="text-white cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Searchwala;

//now i am going to sowing the
