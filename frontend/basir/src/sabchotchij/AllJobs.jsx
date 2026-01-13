import React, { useEffect, useState } from "react";
import axios from "axios";
import Jobscard from "./Jobscard";

function AllJobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("http://localhost:8000/auth/getalljobs");
        console.log(res.data); // DEBUG
        setJobs(res.data.milaljobs);
      } catch (err) {
        console.log(err);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="flex flex-wrap gap-4">
      {jobs.map((job) => (
        <Jobscard key={job._id} job={job} />
      ))}
    </div>
  );
}

export default AllJobs;
