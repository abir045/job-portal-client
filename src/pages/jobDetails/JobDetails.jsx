import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const { _id, title, company, applicationDeadline } = useLoaderData();
  //   console.log(job);
  return (
    <div className="m-10">
      <h2 className="text-3xl">job details for {title}</h2>
      <p>Apply for: {company}</p>
      <p>Deadline: {applicationDeadline}</p>
      <Link to={`/jobApply/${_id}`}>
        <button className="btn btn-neutral mt-4">Apply Now</button>
      </Link>
    </div>
  );
};

export default JobDetails;
