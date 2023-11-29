import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { course } from "./Study";
import axios from "axios";
import toast from "react-hot-toast";

const Admission = () => {
  const [data, setData] = useState({
    course: "",
    name: "",
    email: "",
    mobile: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "https://sheet.best/api/sheets/7179ce55-247f-4e0e-9ed7-84cb9f2778e9",
        data
      );
      if (res.status == 200) {
        setLoading(false);
        toast.success("Response recorded!");
        toast.success("I call you later for confirmation..Happy Coding😃");
        setData({
          name: "",
          email: "",
          mobile: "",
          address: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Container>
        <Container className="home-content">
          <div className="d-flex justify-content-center">
            <form action="" className="col-md-8 p-4" onSubmit={handleSubmit}>
              <h5>Take Admission</h5>
              <hr />
              <label htmlFor="">Study Plan</label>
              <select
                name="course"
                id=""
                className="form-select"
                onChange={handleChange}
                required
              >
                <option value={data.course}>--Select--</option>
                {course &&
                  course.map((data, i) =>
                    data.status === true ? (
                      <option value={data.course_name} key={i} className="form-option">
                        {data.course_name}
                      </option>
                    ) : (
                      ""
                    )
                  )}
              </select>
              <label htmlFor="" className="form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter your name"
                value={data.name}
                onChange={handleChange}
                required
              />
              <label htmlFor="">Phone No</label>
              <input
                type="tel"
                name="mobile"
                className="form-control"
                placeholder="Enter mobile number"
                value={data.mobile}
                onChange={handleChange}
                required
              />
              <label htmlFor="">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter email id"
                value={data.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="">Address</label>
              <input
                type="text"
                name="address"
                className="form-control"
                placeholder="Enter address"
                value={data.address}
                onChange={handleChange}
                required
              />
              <button className="btn btn-outline-primary mt-4 w-100">
                {loading ? (
                  <div class="d-flex align-items-center">
                    <strong>Submitting...</strong>
                    <div
                      class="spinner-border ms-auto"
                      role="status"
                      aria-hidden="true"
                    ></div>
                  </div>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>
        </Container>
      </Container>
    </>
  );
};
export default Admission;
