import React from "react";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const AddJob = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const handleAddJob = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    // console.log(formData.entries());
    const initialData = Object.fromEntries(formData.entries());
    // console.log(initialData);
    const { min, max, currency, ...newJob } = initialData;
    console.log(newJob);
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");

    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Job  has been added",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/myPostedJobs");
        }
      });
  };
  return (
    <div>
      <h2 className="text-3xl">Post a new job</h2>
      <form onSubmit={handleAddJob} className="card-body">
        {/* job title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Title</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="job title"
            className="input input-bordered"
            required
          />
        </div>
        {/* job location */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Location</span>
          </label>
          <input
            type="text"
            name="location"
            placeholder="job location"
            className="input input-bordered"
            required
          />
        </div>
        {/* job type */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Type</span>
          </label>
          <select
            defaultValue="default"
            className="select select-ghost w-full max-w-xs"
          >
            <option value="default" disabled>
              Pick a job type
            </option>
            <option>Full time</option>
            <option>Intern</option>
            <option>Part-time</option>
          </select>
        </div>
        {/* job category */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Field</span>
          </label>
          <select
            defaultValue="default"
            className="select select-ghost w-full max-w-xs"
          >
            <option value="default" disabled>
              Pick a job Field
            </option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
            <option>Teaching</option>
          </select>
        </div>
        {/* salary range */}
        <p className="mt-4">Salary Range</p>
        <div className="grid grid-col-1 lg:grid-cols-3 gap-4 items-end">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Salary Range</span>
            </label>
            <input
              type="text"
              name="min"
              placeholder="Min"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <input
              type="text"
              name="max"
              placeholder="Max"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <select
              name="currency"
              defaultValue="default"
              className="select select-ghost w-full max-w-xs"
            >
              <option value="default" disabled>
                Pick a Currency
              </option>
              <option>BDT</option>
              <option>USD</option>
              <option>INR</option>
            </select>
          </div>
        </div>
        {/* job description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Description</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Job description"
            name="description"
            required
          ></textarea>
        </div>

        {/* company name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Name</span>
          </label>
          <input
            type="text"
            name="company"
            placeholder="Company name"
            className="input input-bordered"
            required
          />
        </div>
        {/* requirements   */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Requirements</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Each requirement in a new line"
            name="requirements"
            required
          ></textarea>
        </div>
        {/* responsibilities   */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Responsibilities</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Write each responsibilities  in a new line"
            name="responsibilities"
            required
          ></textarea>
        </div>
        {/* HR name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">HR Name</span>
          </label>
          <input
            type="text"
            name="hr_name"
            placeholder="HR name"
            className="input input-bordered"
            required
          />
        </div>
        {/* HR email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">HR Email</span>
          </label>
          <input
            defaultValue={user?.email}
            type="text"
            name="hr_email"
            placeholder="HR Email"
            className="input input-bordered"
            required
          />
        </div>
        {/* application deadline */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Deadline</span>
          </label>
          <input
            type="date"
            name="applicationDeadline"
            placeholder="deadline"
            className="input input-bordered"
            required
          />
        </div>
        {/* Company logo url */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Logo URL</span>
          </label>
          <input
            type="text"
            name="company_logo"
            placeholder="Company logo url"
            className="input input-bordered"
            required
          />
        </div>
        {/* submit  button */}
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
