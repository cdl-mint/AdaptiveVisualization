import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import NavigationBar from "./components/Navigation.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AirQuality from "./components/AirQuality";
import SmartRoom from "./components/SmartRoom";
import Robot from "./components/Robot";

import axios from "axios";

const ShowUseCase = () => {
  const [status, setStatus] = useState([]);
  useEffect(() => {
    axios
      .get("https://airquality.se.jku.at/smartroomairquality-test/DigitalTwins")
      .then((response) => setStatus(response.data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/airquality" element={<AirQuality status={status} />} />
      <Route path="/smartroom" element={<SmartRoom status={status} />} />
      <Route path="/robot" element={<Robot status={status} />} />
    </Routes>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <div class="container-fluid">
        <NavigationBar />
        <ShowUseCase />
      </div>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
