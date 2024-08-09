import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

const statisticsData = [
  { value: 20, label: "Years Of Experience" },
  { value: 5, label: "Number Of Schools" },
  { value: 4000, label: "Number Of Students" },
  { value: 2, label: "Presence In Number Of Cities" },
  { value: 100, label: "Number Of Employees" },
];

const images = [
  "./images/Senior1.jpg",
  "./images/Senior2.jfif",
  "./images/Senior3.jpg",
  "./images/Senior4.png",
];

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(this.nextImage, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  nextImage = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % images.length,
    }));
  };

  render() {
    return (
      <div>
        {/* carousel */}
        <div className="carousel">
          <img
            src={images[this.state.currentIndex]}
            alt="carousel"
            className="carousel-image"
          />
        </div>


        {/* marquee */}
        <div className="marquee ">
          <div className="marquee-content">
            The Life School Developed By the baap company Pvt. Ltd.
          </div>
        </div>


        {/* about */}

        <div className="about-the-container container-fluid">
  <img
    src="/images/baap-school.png"
    alt="Education Society Building"
    className="about-the-image"
  />
  <div className="about-the-text">
    <h2 className="Home-The-Life">The Life School</h2>
    <div className="textp mt-3">
      <p>
        The Life School is an innovative educational institution
        dedicated to holistic development, emphasizing not just academic
        excellence but also personal growth and life skills.
      </p>
      <p>
        At The Life School, students are encouraged to explore their
        passions, develop critical thinking, and engage in real-world
        problem-solving.
      </p>
      <p>
        The curriculum is designed to be dynamic and responsive,
        integrating traditional subjects with experiential learning
        opportunities such as community service, internships, and global
        exchanges.
      </p>
      <p>
        By fostering a supportive and inclusive environment, The Life
        School aims to nurture well-rounded individuals who are prepared
        to thrive in an ever-changing world.
      </p>
    </div>
  </div>
</div>


        {/* Silent */}
        <div className="container ">
          <h3 className="Home-Silent">Silent Features</h3>

          <div className="features">
            <div className="feature">
              <img
                src="https://img.icons8.com/dusk/64/robot.png"
                alt="Modern Labs with AI & Robotics"
              />
              <h3>Modern Labs with AI & Robotics</h3>
            </div>
            <div className="feature">
              <img
                src="https://img.icons8.com/dusk/64/light-on.png"
                alt="Skills for Creativity & Artistic Thinking"
              />
              <h3>Skills for Creativity & Artistic Thinking</h3>
            </div>
            <div className="feature">
              <img
                src="https://img.icons8.com/dusk/64/classroom.png"
                alt="State of the Art Classrooms"
              />
              <h3>State of the Art Classrooms</h3>
            </div>
            <div className="feature">
              <img
                src="https://img.icons8.com/dusk/64/secured-letter.png"
                alt="Safe & Secured Campus"
              />
              <h3>Safe & Secured Campus</h3>
            </div>
          </div>
        </div>


{/* Statistics */}


        <div className="statistics-section">
          <h2 className="statistics-title">Statistics</h2>
          <div className="statistics-container">
            {statisticsData.map((item, index) => (
              <div className="statistic-item" key={index}>
                <FontAwesomeIcon icon={faUsers} className="statistic-icon" />
                <div className="statistic-value">{item.value}</div>
                <div className="statistic-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
