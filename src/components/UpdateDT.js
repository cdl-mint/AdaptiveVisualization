import React, { useState } from "react";
import "./styles.scss";
import axios from "axios";

const UpdateDigitalTwin = ({ data }) => {
  const [form, setForm] = useState({
    dt_type: data.dt_type,
    dt_location: data.dt_location,
    dt_active_status: data.dt_active_status,
    dt_capability: data.dt_capability,
  });
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const responseData = axios
      .patch(
        `https://airquality.se.jku.at/smartroomairquality-test/DigitalTwins/${data.dt_id}`,
        form,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status == 200) {
          setForm({
            dt_type: "",
            dt_location: "",
            dt_active_status: false,
            dt_capability: "",
          });
          setMessage(`DT ${data.dt_id} is updated successfully`);
        } else {
          setMessage(`DT is not updated`);
        }
        return response;
      });
    console.log(form);
    console.log(responseData);
  };
  const validateForm = (e) => {
    // !e.checkValidity()
    // if () {
    // e.stopPropagation();
    // } else {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
    //alert(`Room id ${roomId} is created`);
  };

  return (
    <div class="container-fluid">
      <form
        class="needs-validation border formtheme"
        novalidate
        onSubmit={handleSubmit}
      >
        <div class="mb-3">
          <label for="dt_type" class="form-label">
            DigitalTwin_Type
          </label>
          <input
            type="text"
            class="form-control"
            id="dt_type"
            placeholder="room"
            value={form.dt_type}
            onChange={validateForm}
            required
          ></input>
          <div class="valid-feedback">dt type is ok</div>
          <div class="invalid-feedback">Please enter a string for dt type</div>
        </div>
        <div class="mb-3">
          <label class="form-label" for="dt_location">
            DigitalTwin_Location
          </label>
          <input
            class="form-control"
            type="text"
            id="dt_location"
            value={form.dt_location}
            onChange={validateForm}
            required
          />
          <div class="valid-feedback">dt location is ok</div>
          <div class="invalid-feedback">
            Please enter a string for dt location
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label" for="activity_status">
            DigitalTwin_ActivityStatus
          </label>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="dt_active_status"
              checked={form.dt_active_status}
              onChange={validateForm}
              required
            />
          </div>
          <div class="valid-feedback">dt location is ok</div>
          <div class="invalid-feedback">
            Please enter a string for dt location
          </div>
        </div>
        <div class="mb-3">
          <label for="dt_capability" class="form-label">
            DigitalTwin_Capability
          </label>
          <input
            type="text"
            class="form-control"
            id="dt_capability"
            placeholder="capability"
            value={form.dt_capability}
            onChange={validateForm}
            required
          ></input>
          <div class="valid-feedback">dt capability is ok</div>
          <div class="invalid-feedback">
            Please enter a string for dt capability
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <button type="submit" class="btn btn-danger">
              Clear
            </button>
          </div>
          <div class="col-sm-6 formButton">
            <button type="submit" class="btn btn-primary">
              Update
            </button>
          </div>
        </div>
      </form>
      <div>{message}</div>
    </div>
  );
};
export default UpdateDigitalTwin;
