import React, { useState, useEffect, useRef } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Label,
  ReferenceLine,
} from "recharts";
import axios from "axios";
import moment from "moment";
import styled from "styled-components";
const Chart = () => {
  const [loaded, setLoaded] = useState(false);
  const [airQualityChartData, setAirQualityChartData] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [totalPageCount, setTotalPageCount] = useState(1);
  const [prevButtonState, setPrevButtonState] = useState(false);
  const [nextButtonState, setNextButtonState] = useState(false);
  const [lastRecord, setLastRecord] = useState([]);
  const [message, setMessage] = useState("");
  let totalPageSize = 0;
  const formatXAxis = (tickFormat) => {
    return moment(tickFormat).format("DD-MM-YY(HH:mm:ss)");
  };
  const updatePageCount = (e) => {
    console.log(e, pageCount, airQualityChartData.pages, e.target.value);

    if (pageCount < airQualityChartData.pages) {
      if (e.target.value === "previous") {
        if (pageCount === 1) {
          setPrevButtonState(true);
          setNextButtonState(false);
        }
        if (pageCount > 1) {
          setPageCount(pageCount - 1);
          setPrevButtonState(false);
        }
      }
      if (e.target.value === "next") {
        setPageCount(pageCount + 1);
        setNextButtonState(false);
      }
    } else if (pageCount === airQualityChartData.pages) {
      if (e.target.value === "next") {
        setNextButtonState(true);
        setPrevButtonState(false);
      } else if (e.target.value === "previous") {
        setPageCount(pageCount - 1);
      }
    }
  };
  useEffect(() => {
    axios
      .get(
        `https://airquality.se.jku.at/smartroomairquality-test/Room/0090/AirQuality/?page=${pageCount}&size=50`
      )
      .then((response) => {
        setAirQualityChartData(response.data);
        setTotalPageCount(response.data.pages);
        console.log(totalPageCount);
        setLoaded(true);
        //setTimeout(DisplayCurrentStatusData(totalPageCount), 1000);
      })
      .catch((error) => console.log(error));
    for (let i = 0; i < totalPageCount.length; i++) {}
    axios
      .get(
        `https://airquality.se.jku.at/smartroomairquality-test/Room/0090/AirQuality/?page=${totalPageCount}&size=50`
      )
      .then((response) => {
        if (response.data.length != 0) setLastRecord(response.data);
        console.log(lastRecord);
      })
      .catch((error) => console.log(error));
  }, [pageCount, totalPageCount]);

  //pageCount
  function DisplayCurrentStatusData(totalPageCount) {
    console.log(airQualityChartData.total);
    setLastRecord(airQualityChartData.items.slice(100));
    console.log(lastRecord);
    setMessage(lastRecord);
    return totalPageCount;
    //return <div>{message}</div>;
  }
  return loaded ? (
    <div>
      {/* <caption className="tablecaption">
        Air Quality Data for Room {airQualityChartData.items[0].room_id}
      </caption> */}
      {pageCount}
      <div className="row">
        <div className="col-sm-1">
          <Button
            onClick={updatePageCount}
            id="previous"
            value="previous"
            disabled={prevButtonState ? true : false}
            className={prevButtonState.toString()}
          >
            prev
          </Button>
        </div>
        <div className="col-sm-10">
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              width={900}
              height={400}
              data={airQualityChartData.items}
              margin={{
                top: 15,
                right: 30,
                left: 10,
                bottom: 35,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="time"
                angle={-15}
                dy={10}
                tickFormatter={formatXAxis}
                stroke="black"
                label={{
                  value: "Time",
                  position: "insideBottom",
                  dy: 35,
                  stroke: "black",
                }}
              ></XAxis>
              <YAxis
                dataKey="co2"
                stroke="black"
                label={{
                  value: "Co2 (ppm)",
                  dy: -10,
                  position: "insideLeft",
                  angle: -90,
                  stroke: "black",
                }}
              ></YAxis>
              <YAxis />
              <Tooltip />
              <ReferenceLine y={1000} label="Max Level Co2" stroke="red" />

              <Legend
                align="center"
                verticalAlign="top"
                wrapperStyle={{ top: -2 }}
              />
              <Line type="monotone" dataKey="co2" stroke="#8884d8" />
              <Line type="monotone" dataKey="temperature" stroke="#82ca9d" />
              <Line type="monotone" dataKey="humidity" stroke="#ffc658" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="col-sm-1">
          <Button
            onClick={updatePageCount}
            id="next"
            value="next"
            disabled={nextButtonState ? true : false}
            className={nextButtonState.toString()}
          >
            next
          </Button>
        </div>
      </div>
      {/*  {console.log(airQualityChartData.items)}
      <div>{console.log(airQualityChartData.items.slice(100))}</div> */}
    </div>
  ) : (
    <div class="spinner-border text-success" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  );
};
const Button = styled.button`
  width: 50px;
  border: 0px;
  background-color: black;
  color: white;
  border-radius: 5px;
  padding: 2px;
  &.true {
    background-color: grey;
  }
`;
export default Chart;
