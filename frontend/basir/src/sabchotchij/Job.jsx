import React from "react";
import { Bookmark, MapPinned } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";

function Job() {
  const hamarnavigte = useNavigate();
  const jobId = "thisisthesimplejobsid";
  return (
    <div
      className="
      bg-gray-100 rounded-xl border border-gray-200
      shadow-sm hover:shadow-xl
      transition-all duration-300
      hover:-translate-y-1
      cursor-pointer
    "
    >
      <div className="flex justify-between px-5 pt-4 text-sm text-gray-500">
        <span>2 days ago</span>
        <Bookmark className="w-5 h-5 hover:text-violet-600 transition" />
      </div>

      <div className="flex gap-4 px-5 mt-4 items-center">
        <Avatar className="cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div>
          <p className="font-semibold text-gray-800">Company Name</p>
          <p className="flex items-center gap-1 text-sm text-gray-500">
            <MapPinned size={14} /> India
          </p>
        </div>
      </div>

      <div className="px-5 mt-4">
        <h3 className="font-semibold text-gray-900">Frontend Developer</h3>
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          aspernatur.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 px-5 mt-4">
        <span className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
          12 Positions
        </span>
        <span className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full">
          Part Time
        </span>
        <span className="px-3 py-1 text-xs bg-purple-100 text-purple-700 rounded-full">
          24 LPA
        </span>
      </div>

      <div className="flex justify-between items-center px-5 py-4 mt-4 border-t">
        <button
          className="
          px-4 py-2 text-sm rounded-lg
          bg-gray-100 hover:bg-gray-200
          transition
          cursor-pointer
        "
          onClick={() => hamarnavigte(`/jobdetail/${jobId}`)}
        >
          Details
        </button>

        <button
          className="
          px-4 py-2 text-sm rounded-lg
          bg-violet-600 hover:bg-violet-700
          text-white transition
           cursor-pointer
        "
        >
          Save Job
        </button>
      </div>
    </div>
  );
}

export default Job;

//from here i am going to connecting
