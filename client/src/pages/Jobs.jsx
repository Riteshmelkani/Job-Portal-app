import { useEffect, useState } from "react";
import API from "../services/api";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await API.get("/jobs/");
      setJobs(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      job.location.toLowerCase().includes(locationFilter.toLowerCase())
  );

  return (
    <div className="jobs-container">
      <h1>Available Jobs</h1>

      <input
        type="text"
        placeholder="Search jobs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <input
        type="text"
        placeholder="Filter by location..."
        value={locationFilter}
        onChange={(e) => setLocationFilter(e.target.value)}
      />

      {filteredJobs.length > 0 ? (
        filteredJobs.map((job) => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>

            <p>
              <strong>Company:</strong> {job.company}
            </p>

            <p>
              <strong>Location:</strong> {job.location}
            </p>

            <p>
              <strong>Salary:</strong> {job.salary}
            </p>

            <p>{job.description}</p>
          </div>
        ))
      ) : (
        <p>No jobs found.</p>
      )}
    </div>
  );
}

export default Jobs;