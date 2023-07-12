import "./components/styles.scss";
import airQuality from "./assets/airQualitySetUp.jpg";
import smartRoom from "./assets/smartHomeSetUp.jpg";
import niryo from "./assets/niryo.jpg";
import alexa from "./assets/alexa.jpg";
function App() {
  return (
    <div className="container-fluid content">
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="card text-bg-dark">
              <h5 class="card-header">Air Quality Use Case</h5>
              <div class="card-body">
                <p class="card-text">
                  Measure the indoor air quality with raspberry-pi 3/4 and
                  scd-30 sensor. Analyse the air quality data with charts and
                  take necessary actions to control the optimum co2 level in the
                  room.
                </p>
                <img
                  src={airQuality}
                  class="card-img imageTheme"
                  alt="AboutAirQualityUseCase"
                />
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="card text-bg-dark">
              <h5 class="card-header">Smart Room Use Case</h5>
              <div class="card-body">
                <p class="card-text">
                  Using the sonoff dongle as the zigbee gateway with zigbee2mqtt
                  platform for smart room set up. Control the smart devices
                  connected to zigbee network by switching on/off the
                  ventilators based on the indoor air quality and lights.
                </p>{" "}
                <img
                  src={smartRoom}
                  class="card-img imageTheme"
                  alt="AboutSmartRoomUseCase"
                />
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="card text-bg-dark">
              <h5 class="card-header">Robot Use Case</h5>
              <div class="card-body">
                <p class="card-text">
                  Use the niryo ned-2 robot ROS and for performing operations
                  like pick-and-place and sock-sorting. In addition, the robot
                  joints and conveyors are operated using pyniryo library and
                  python fastAPI.
                </p>
                <img
                  src={niryo}
                  class="card-img imageTheme"
                  alt="AboutSmartRoomUseCase"
                />
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="card text-bg-dark">
              <h5 class="card-header">Alexa User Interface</h5>
              <div class="card-body">
                <p class="card-text">
                  Create python custom skill set in alexa console and use the
                  python fastAPI and parse json response to get speech resposne
                  from Alexa.
                </p>
                <img
                  src={alexa}
                  class="card-img imageTheme"
                  alt="AboutSmartRoomUseCase"
                />
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default App;
