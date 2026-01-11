import React from "react";
import Job from "../sabchotchij/Job";
import Allfilter from "../sabchotchij/allfilter";
function Jobs() {
  const allarray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="min-h-screen bg-gray-50 px-12 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Latest Job Openings
      </h1>

      <div className="flex gap-8">
        <Allfilter />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 flex-1">
          {allarray.map((item, index) => (
            <Job key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Jobs;
