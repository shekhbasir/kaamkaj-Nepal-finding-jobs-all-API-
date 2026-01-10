import React from "react";
import Jobscard from "./Jobscard";

function Latestjobs() {
  const array = [1, 2, 3, 4, 5, 6];

  return (
    <div className="mt-10">
      {/* Heading */}
      <div className="px-10 py-5 text-3xl font-medium">
        <span className="text-violet-700">Latest & Top's</span> Jobs Opening
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-10">
        {array.map((item, index) => (
          <Jobscard key={index} />
        ))}
      </div>
    </div>
  );
}

export default Latestjobs;
