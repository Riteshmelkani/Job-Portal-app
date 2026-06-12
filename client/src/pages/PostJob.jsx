import { useState } from "react";
import API from "../services/api";

function PostJob() {
  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    description: "",
    posted_by: 1,
  });

  const handleChange = (e) => {
    setJob({
      ...job,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/jobs/", job);

      alert("Job posted successfully!");

      setJob({
        title: "",
        company: "",
        location: "",
        salary: "",
        description: "",
        posted_by: 1,
      });

    } catch (error) {
      console.error(error);
      alert("Failed to post job");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Post Job</h2>

        <input
          name="title"
          placeholder="Job Title"
          value={job.title}
          onChange={handleChange}
        />

        <input
          name="company"
          placeholder="Company"
          value={job.company}
          onChange={handleChange}
        />

        <input
          name="location"
          placeholder="Location"
          value={job.location}
          onChange={handleChange}
        />

        <input
          name="salary"
          placeholder="Salary"
          value={job.salary}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={job.description}
          onChange={handleChange}
        />

        <button onClick={handleSubmit}>
          Post Job
        </button>
      </div>
    </div>
  );
}

export default PostJob;