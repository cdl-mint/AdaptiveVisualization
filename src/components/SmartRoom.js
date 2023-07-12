import React, { useState, useEffect } from "react";
const SmartRoom = ({ status }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (status.length > 0) {
      status.reduce((current, i) => {
        if (
          current.dt_capability == "SmartRoomUseCase" &&
          current.dt_active_status
        ) {
          console.log(current.dt_capability, show);
          setShow(true);
        }
        return show;
      });
    }
  }, []);

  return (
    <div class="container-fluid content">
      {show ? (
        <>
          <div>Smart Room Operations</div>
          <div className="row">
            <button type="submit" className="btn btn-success">
              Toggle Light
            </button>
            <button type="submit" className="btn btn-success">
              Toggle Ventilator
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="loader">
            <div>Smart Home Setup is Not Active</div>
            <div class="spinner-border text-danger" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default SmartRoom;
