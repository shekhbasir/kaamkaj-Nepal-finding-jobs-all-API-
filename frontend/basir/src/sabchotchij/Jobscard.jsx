import React from "react";
import { MapPinned } from "lucide-react";

function Jobscard() {
  return (
    <div className="h-[130px] w-[250px] bg-gray-200 border rounded-[10px] shadow-lg p-3 flex flex-col justify-between cursor-pointer">
      <div>
        <h1 className="text-sm font-semibold">Company Name</h1>
        <span className="text-xs text-gray-600 flex items-center gap-1">
          <MapPinned size={12} /> Nepal
        </span>
      </div>

      <h2 className="text-sm font-medium">Frontend Developer</h2>

      <p className="text-xs text-gray-700 h-[32px] overflow-y-auto pr-1">
        Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit
      </p>

      <div className="flex gap-2 mt-1">
        <button className="text-[10px] px-2 py-[2px] bg-blue-300 text-black rounded-[5px]">
          12 Positions
        </button>
        <button className="text-[10px] px-2 py-[2px] bg-green-300 text-green-900 rounded-[5px]">
          Part Time
        </button>
        <button className="text-[10px] px-2 py-[2px] bg-purple-300 text-purple-900 rounded-[5px]">
          24 LPA
        </button>
      </div>
    </div>
  );
}

export default Jobscard;
