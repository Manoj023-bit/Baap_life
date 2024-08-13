import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { withTranslation } from 'react-i18next';
import ScrollToTop from '../ScrollToTop';
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
      currentIndex: (prevState.currentIndex + 1) % this.images.length,
    }));
  };

  images = [
    "./images/Senior1.jpg",
    "./images/Senior2.jfif",
    "./images/Senior3.jpg",
    "./images/Senior4.png",
  ];

  statisticsData = [
    { value: 20, label: this.props.t("home.yearsOfExperience") },
    { value: 5, label: this.props.t("home.numberOfSchools") },
    { value: 4000, label: this.props.t("home.numberOfStudents") },
    { value: 2, label: this.props.t("home.presenceInCities") },
    { value: 100, label: this.props.t("home.numberOfEmployees") },
  ];

  render() {
    const { t } = this.props;

    return (
      <div>
        <ScrollToTop /> 
        
        {/* carousel */}
        <div className="carousel">
          <img
            src={this.images[this.state.currentIndex]}
            alt={t("home.carouselAlt")}
            className="carousel-image"
          />
        </div>

        {/* marquee */}
        <div className="marquee">
          <div className="marquee-content">
            {t("home.marqueeText")}
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
            <h2 className="Home-The-Life">{t("home.aboutTitle")}</h2>
            <div className="textp mt-3">
              <p>{t("home.aboutParagraph1")}</p>
              <p>{t("home.aboutParagraph2")}</p>
              <p>{t("home.aboutParagraph3")}</p>
              <p>{t("home.aboutParagraph4")}</p>
            </div>
          </div>
        </div>

        {/* Silent Features */}
        <div className="container">
          <h3 className="Home-Silent">{t("home.silentFeatures")}</h3>

          <div className="features">
            <div className="feature">
              <img
                src="https://img.icons8.com/dusk/64/robot.png"
                alt={t("home.feature1")}
              />
              <h3>{t("home.feature1")}</h3>
            </div>
            <div className="feature">
              <img
                src="https://img.icons8.com/dusk/64/light-on.png"
                alt={t("home.feature2")}
              />
              <h3>{t("home.feature2")}</h3>
            </div>
            <div className="feature">
              <img
                src="https://img.icons8.com/dusk/64/classroom.png"
                alt={t("home.feature3")}
              />
              <h3>{t("home.feature3")}</h3>
            </div>
            <div className="feature">
              <img
                src="https://img.icons8.com/dusk/64/secured-letter.png"
                alt={t("home.feature4")}
              />
              <h3>{t("home.feature4")}</h3>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="statistics-section">
          <h2 className="statistics-title">{t("home.statisticsTitle")}</h2>
          <div className="statistics-container">
            {this.statisticsData.map((item, index) => (
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

export default withTranslation()(Home);
