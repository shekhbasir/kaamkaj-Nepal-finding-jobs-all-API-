import React, { useState } from "react";

function AllFilter() {
  const sarafilter = [
    {
      filterTypes: "Location",
      array: [
        "Kathmandu",
        "Birgunj",
        "Biratnagar",
        "Pokhra",
        "Bhairawa",
        "Dang",
        "International",
      ],
    },
    {
      filterTypes: "Industry",
      array: [
        "Mern Stack",
        "Full Stack",
        "Data Science",
        "AI/ML",
        "Cyber Security",
        "QA Analyst",
        "Devops",
      ],
    },
    {
      filterTypes: "Salary",
      array: ["0-42k", "43-78k", "79-100k", "1L-5L"],
    },
  ];

  const [selected, setSelected] = useState({});

  const toggleFilter = (type, value) => {
    setSelected((prev) => ({
      ...prev,
      [type]: prev[type] === value ? null : value,
    }));
  };

  return (
    <div className="w-[260px] bg-white rounded-2xl shadow-lg p-4 h-fit sticky top-24">
      <h2 className="font-semibold text-[20px] text-center mb-3">
        Filters Your Dreams
      </h2>

      <hr className="mb-4" />

      {sarafilter.map((data, index) => (
        <div key={index} className="mb-5 ">
          <h1 className="text-[15px] font-semibold mb-2 text-gray-700 ">
            {data.filterTypes}
          </h1>

          <div className="flex flex-col gap-2 cursor-pointer">
            {data.array.map((item, i) => (
              <button
                key={i}
                onClick={() => toggleFilter(data.filterTypes, item)}
                className={`text-left px-3 py-2 rounded-lg text-sm transition-all duration-300 cursor-pointer
                  ${
                    selected[data.filterTypes] === item
                      ? "bg-violet-600 text-white shadow-md scale-[1.03]"
                      : "bg-gray-200 hover:bg-violet-100 hover:translate-x-1"
                  }
                `}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllFilter;
