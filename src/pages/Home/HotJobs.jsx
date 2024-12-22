import React, { useEffect, useState } from "react";
import HotJobCard from "./HotJobCard";
import axios from "axios";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("https://job-portal-server-dusky.vercel.app/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
    // axios.get("https://job-portal-server-dusky.vercel.app/jobs").then((res) => setJobs(res.data));
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4">
        {jobs?.map((job) => (
          <HotJobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
