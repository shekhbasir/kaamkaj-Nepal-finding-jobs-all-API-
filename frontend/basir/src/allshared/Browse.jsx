import React from "react";
import Job from "../sabchotchij/Job";

function Browse() {
  const allitem = [1, 2, 3, 4];
  return (
    <>
      <div>
        <div className="h-[50px] w-[300px] bg-gray-50 flex  rounded-[5px] text-center justify-center font-medium shadow-md ">
          <h1>Total Search Items ({allitem.length})</h1>
        </div>

        <div className="flex py-[20px] grid grid-cols-4 gap-4 ">
          {allitem.map(() => (
            <Job />
          ))}
        </div>
      </div>
    </>
  );
}

export default Browse;

//now i am going to logout from the here
