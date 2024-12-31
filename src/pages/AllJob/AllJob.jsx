import React, { useState } from "react";
import useJobs from "../../hooks/useJobs";
import HotJobCard from "../Home/HotJobCard";
import { BiSearch } from "react-icons/bi";

const AllJob = () => {
  const [sort, setSort] = useState(false);
  const [search, setSearch] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const { jobs, loading } = useJobs(sort, search, minSalary, maxSalary);

  //   console.log(sort);

  if (loading) {
    return <h2>Job is loading</h2>;
  }

  return (
    <div>
      <h2 className="py-5 text-4xl font-bold text-center">All Jobs</h2>

      <div className="w-11/12 mx-auto bg-base-200 py-5 p-3 flex items-center gap-5">
        <button
          onClick={() => setSort(!sort)}
          className={`btn btn-neutral ${sort && "btn-success"}`}
        >
          {sort === true ? "Sorted By salary" : "Sort by Salary "}
        </button>

        <BiSearch />
        <input
          type="text"
          name=""
          id=""
          placeholder="Search Jobs by locations"
          className="input w-full max-w-2xl"
          onKeyUp={(e) => setSearch(e.target.value)}
        />

        <div className="space-y-3">
          <input
            type="text"
            name=""
            id=""
            placeholder="Min salary"
            className="input w-full max-w-xs"
            onKeyUp={(e) => setMinSalary(e.target.value)}
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Max salary"
            className="input w-full max-w-xs"
            onKeyUp={(e) => setMaxSalary(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4">
        {jobs?.map((job) => (
          <HotJobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default AllJob;
