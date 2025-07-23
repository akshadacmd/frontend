import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Birthday = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log("Birthday:", `${day} ${month} ${year}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div
        className="container card p-4 shadow mt-5"
        style={{ width: "100%", maxWidth: "500px" }}
      >
        <h4 className="text-center mb-4">Add Your Birthday</h4>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-4 mb-3">
              <label className="form-label">Day</label>
              <select
                className="form-select"
                value={day}
                onChange={(e) => setDay(e.target.value)}
                required
              >
                <option value="">Day</option>
                {days.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            <div className="col-md-4 mb-3">
              <label className="form-label">Month</label>
              <select
                className="form-select"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                required
              >
                <option value="">Month</option>
                {months.map((m, i) => (
                  <option key={i} value={m}>{m}</option>
                ))}
              </select>
            </div>

            <div className="col-md-4 mb-3">
              <label className="form-label">Year</label>
              <select
                className="form-select"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                required
              >
                <option value="">Year</option>
                {years.map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100">Submit</button>

          <p className="text-center mt-3">
            <Link to="/">Back to Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Birthday;
