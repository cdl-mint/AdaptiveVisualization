import React, { useState } from "react";
import "./styles.scss";
import axios from "axios";

const CreateDT = () => {
  const [form, setForm] = useState({
    dt_id: "",
    dt_type: "",
    dt_location: "",
    dt_active_status: false,
    dt_capability: "",
  });
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    const responseData = axios
      .post(
        "https://airquality.se.jku.at/smartroomairquality-test/DigitalTwin",
        form,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status == 201) {
          setForm({
            dt_id: "",
            dt_type: "",
            dt_location: "",
            dt_active_status: false,
            dt_capability: "",
          });
          setMessage(`DT ${response.data.dt_id} is created successfully`);
        } else {
          setMessage(`Room is not created`);
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
      /* dt_id: e.target.value,
      dt_type: e.target.value,
      dt_location: e.target.value,
      dt_active_status: "on" ? true : false,
      dt_capability: e.target.value, */
      [e.target.id]: e.target.value,
      dt_active_status: e.target.value === "on" ? true : false,
    });
    //alert(`Room id ${roomId} is created`);
  };
  const validateSwitch = (e) => {
    setForm({
      ...form,
      dt_active_status: !e.target.value,
    });
  };
  return (
    <div class="container-fluid">
      <form
        class="needs-validation border formtheme"
        novalidate
        onSubmit={handleSubmit}
      >
        <caption className="tablecaption">Create Digital Twin</caption>
        <div class="mb-3">
          <label for="dt_id" class="form-label">
            DigitalTwin_Id
          </label>
          <input
            type="text"
            class="form-control"
            id="dt_id"
            placeholder="0090"
            value={form.dt_id}
            onChange={validateForm}
            required
          />
          <div class="valid-feedback">dt id is ok</div>
          <div class="invalid-feedback">Please enter a dt id</div>
        </div>
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
              Create
            </button>
          </div>
        </div>
      </form>
      <div>{message}</div>
    </div>
  );
};
export default CreateDT;
