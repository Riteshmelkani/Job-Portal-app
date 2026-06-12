import { useEffect, useState } from "react";
import API from "../services/api";

function MyApplications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const response = await API.get("/applications/");
      setApplications(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="jobs-container">
      <h1>My Applications</h1>

      {applications.map((application) => (
        <div
          key={application.id}
          className="job-card"
        >
          <h3>{application.job_title}</h3>

          <p>
            Applicant:
            {" "}
            {application.applicant_name}
          </p>

          <p>
            Resume:
            {" "}
            {application.resume_link}
          </p>
        </div>
      ))}
    </div>
  );
}

export default MyApplications;