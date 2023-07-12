import React, { useState, useEffect } from "react";
import axios from "axios";
import Chart from "./Chart";
import CreateRoom from "./CreateDT";
import Table from "./Table";
import "./styles.scss";
const AirQuality = ({ status }) => {
  const [show, setShow] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const [roomDetails, setRoomDetails] = useState([]);

  useEffect(() => {
    /* if (status.length > 0) {
      console.log(status);
      status.map((current, i) => {
        if (
          current.dt_capability === "AirQualityUseCase" &&
          current.dt_active_status
        ) {
          console.log(current.dt_capability, current.dt_active_status);
          setShow(true);
        }
        return show;
      });
    } */
    axios
      .get("https://airquality.se.jku.at/smartroomairquality-test/DigitalTwins")
      .then((response) => {
        setRoomDetails(response.data);
        setLoaded(true);
      })
      .catch((error) => console.error(error));
    //show, loaded,
  }, []);

  return (
    <div class="container-fluid content">
      {show ? (
        <>
          {/* <div class="col-sm-6">
              <CreateRoom />
            </div> */}

          <caption className="tablecaption">Available Digital Twins</caption>
          {loaded ? <Table data={roomDetails} /> : null}

          <Chart />
        </>
      ) : (
        <>
          <div className="loader">
            <div>AirQuality Setup is Not Active</div>
            <div class="spinner-border text-danger" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default AirQuality;
