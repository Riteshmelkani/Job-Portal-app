function Register() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Register</h2>

        <input type="text" placeholder="Username" />

        <input type="email" placeholder="Email" />

        <input type="password" placeholder="Password" />

        <select>
          <option>Job Seeker</option>
          <option>Recruiter</option>
        </select>

        <button>Register</button>
      </div>
    </div>
  );
}

export default Register;