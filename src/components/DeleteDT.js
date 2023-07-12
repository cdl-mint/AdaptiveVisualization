import React, { useState } from "react";
import "./styles.scss";
import axios from "axios";

const DeleteDigitalTwin = ({ data }) => {
  const [form, setForm] = useState({
    dt_type: data.dt_type,
    dt_location: data.dt_location,
    dt_active_status: data.dt_active_status,
    dt_capability: data.dt_capability,
  });
  const [message, setMessage] = useState("");
  const handleSubmit = () => {
    const responseData = axios
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
  useEffect(() => {
    handleSubmit();
    /*  axios
          .get("https://airquality.se.jku.at/smartroomairquality-test/DigitalTwins")
          .then((response) => {
            setRoomDetails(response.data);
          })
          .catch((error) => console.error(error));
        //show, loaded, */
  }, []);
};
export default DeleteDigitalTwin;
