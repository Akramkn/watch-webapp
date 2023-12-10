import React, { useState, useEffect } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const [users, setUsers] = useState([]);
  const [validationError, setValidationError] = useState("");

  useEffect(() => {
    if (showAlert) {
      alert("User registered successfully!");
      setUsers((prevUsers) => [...prevUsers, formData]);
      setShowAlert(false);
      setFormData({
        username: "",
        password: "",
        email: "",
      });
    }
  }, [showAlert, formData]);

  const handleRegister = () => {
    if (!formData.username || !formData.email || !formData.password) {
      setValidationError("All fields are required");
      return;
    }

    setShowAlert(true);
    setValidationError("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">User Registration</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username:
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="button"
              className="btn btn-success"
              onClick={handleRegister}
            >
              Register
            </button>

            {validationError && (
              <div className="alert alert-danger mt-3" role="alert">
                {validationError}
              </div>
            )}

            {showAlert && (
              <div className="alert alert-success mt-3" role="alert">
                User registered successfully!
              </div>
            )}
          </form>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-8">
          <h3>Registered Users</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Login;
