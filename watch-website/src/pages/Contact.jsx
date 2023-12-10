import React, { useState, useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const [formSubmissions, setFormSubmissions] = useState([]);

  useEffect(() => {
    if (showAlert) {
      alert("Form submitted successfully!");
      setShowAlert(false);
      setFormSubmissions((prevSubmissions) => [...prevSubmissions, formData]);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  }, [showAlert, formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);

    setShowAlert(true);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Contact WristUp</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Your Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{ borderColor: "#00a97f" }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Your Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ borderColor: "#00a97f" }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Your Message:
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
                style={{ borderColor: "#00a97f" }}
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ backgroundColor: "#00a97f" }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-8">
          <h3>Form Submissions</h3>
          {formSubmissions.length > 0 ? (
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {formSubmissions.map((submission, index) => (
                  <tr key={index}>
                    <td>{submission.name}</td>
                    <td>{submission.email}</td>
                    <td>{submission.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No form submissions yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
