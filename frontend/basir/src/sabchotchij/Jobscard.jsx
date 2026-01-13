import React from "react";
import { MapPinned, Clock, Bookmark } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Jobscard({ job }) {
  const navigate = useNavigate();
  if (!job) return null;

  return (
    <div
      onClick={() => navigate(`/jobdetail/${job._id}`)}
      className="h-[130px] w-[250px] bg-gray-200 border rounded-[10px] shadow-lg p-3 flex flex-col justify-between cursor-pointer hover:scale-[1.02] transition"
    >
      {/* TOP */}
      <div className="flex justify-between">
        <div>
          <h1 className="text-sm font-semibold">
            {job.componey?.name || "Company Name"}
          </h1>
          <span className="text-xs text-gray-600 flex items-center gap-1">
            <MapPinned size={12} /> {job.location}
          </span>
        </div>

        {/* Save Job */}
        <Bookmark size={14} className="text-gray-600 hover:text-black" />
      </div>

      {/* TITLE */}
      <h2 className="text-sm font-medium truncate">{job.title}</h2>

      {/* DESCRIPTION */}
      <p className="text-xs text-gray-700 h-[32px] overflow-hidden">
        {job.description || "No description provided"}
      </p>

      {/* TAGS */}
      <div className="flex gap-2 mt-1 flex-wrap">
        <button className="text-[10px] px-2 py-[2px] bg-blue-300 rounded-[5px]">
          {job.Noofposition} Positions
        </button>

        <button className="text-[10px] px-2 py-[2px] bg-green-300 rounded-[5px]">
          {job.jobsTypes}
        </button>

        <button className="text-[10px] px-2 py-[2px] bg-purple-300 rounded-[5px]">
          {job.salary} LPA
        </button>
      </div>

      {/* FOOTER */}
      <div className="flex items-center gap-1 text-[10px] text-gray-500 mt-1">
        <Clock size={10} />
        {new Date(job.createdAt).toDateString()}
      </div>
    </div>
  );
}

export default Jobscard;
