import React, { useState } from "react";
import CreateDT from "./CreateDT";
import UpdateDigitalTwin from "./UpdateDT";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

const Table = ({ data }) => {
  const [show, setShow] = useState(false);
  const [operation, setOperation] = useState("");
  const [updateDT, setUpdateDT] = useState({});
  const [message, setMessage] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = (operation, data) => {
    setShow(true);
    setOperation(operation);
    setUpdateDT(data);
  };
  /*  const updateData = (data) => {
    console.log("update data", data);
    setShow(true);
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Digital Twin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateDigitalTwin data={data} />;
        </Modal.Body>
      </Modal>
    );
  }; */
  const deleteData = (data) => {
    axios
      .delete(
        `https://airquality.se.jku.at/smartroomairquality-test/DigitalTwins/${data.dt_id}`,

        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status == 200) {
          setMessage(`DT ${data.dt_id} is deleted successfully`);
        } else {
          setMessage(`DT is not deleted`);
        }
        return response;
      });
  };
  //console.log(data);
  return data.length > 0 ? (
    <>
      <table class="table table-hover tableHeader table-bordered">
        <thead class="table-dark">
          <button
            type="button"
            className="btn btn-success"
            onClick={() => handleShow("create", null)}
          >
            Create
          </button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                {operation === "create" ? "Create" : "Update"} Digital Twin
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {!updateDT ? <CreateDT /> : <UpdateDigitalTwin data={updateDT} />}
            </Modal.Body>
          </Modal>
          <tr>
            {Object.keys(data[0]).map((k) => (
              <td>{k}</td>
            ))}
            <td>operations</td>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr>
              {Object.keys(data[0]).map((h) => (
                <td>{d[h].toString()}</td>
              ))}
              <button onClick={() => handleShow("update", d)}>
                <i class="fa-solid fa-pen"></i>
              </button>
              <button onClick={() => deleteData(d)}>
                <i class="fa-solid fa-trash"></i>
              </button>
            </tr>
          ))}
        </tbody>
      </table>
      <div>{message}</div>
    </>
  ) : (
    <p>No table data available</p>
  );
};
export default Table;
