import React from "react";
import "./styles.scss";
import Table from "./Table";

const Robot = () => {
  const sampleRobotData = [
    {
      x: 0.721,
      y: 0.347,
      z: -0.785,
      roll: 0.138,
      pitch: -0.724,
      yaw: -0.007,
    },
    {
      x: 0.149,
      y: 0.126,
      z: 0.279,
      roll: 0.302,
      pitch: 1.148,
      yaw: 0.946,
    },
    {
      x: 0.139,
      y: -0.684,
      z: 0.54,
      roll: -0.678,
      pitch: -0.344,
      yaw: -0.007,
    },
    {
      x: 0.232,
      y: -0.684,
      z: 0.527,
      roll: -2.906,
      pitch: 1.428,
      yaw: -2.831,
    },
    {
      x: 0.523,
      y: 1.268,
      z: -0.654,
      roll: 2.569,
      pitch: 0.021,
      yaw: 1.345,
    },
  ];

  return (
    <div class="container-fluid content">
      <caption className="tablecaption">Niryo Robot Joints Position</caption>
      <Table data={sampleRobotData} />
    </div>
  );
};
export default Robot;
