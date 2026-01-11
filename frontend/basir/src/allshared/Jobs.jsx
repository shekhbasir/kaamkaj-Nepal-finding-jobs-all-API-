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
        {/* //here i am going to puting the filter jobs wala feature  */}
        {/* <div className="w-[260px] bg-white rounded-xl shadow-md p-4 h-fit sticky top-24">
          <h2 className="font-semibold mb-2">Filters</h2>
          <p className="text-sm text-gray-500">Coming soon…</p>
        </div> */}

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
