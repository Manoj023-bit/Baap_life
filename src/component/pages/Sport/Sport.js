import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Sport.css";
import { useTranslation } from 'react-i18next';
import { withTranslation } from 'react-i18next';
import ScrollToTop from "../ScrollToTop";


const Sport = () => {
  const images = [
    "https://thumbs.dreamstime.com/b/kids-play-football-outdoor-field-children-score-goal-soccer-game-girl-boy-kicking-ball-running-child-team-jersey-120383202.jpg",
    "https://cdn.firstcry.com/education/2022/05/04111910/522565846.jpg",
    "https://media.istockphoto.com/id/497568472/photo/boy-playing-cricket.jpg?s=612x612&w=0&k=20&c=l_5wcAKbTpnBqOb9tHOiyqVZmHJRmjz_3kxHpZRStfM=",
    "https://www.eurokidsindia.com/blog/wp-content/uploads/2023/10/child-should-engage-in-football.jpg",
  ];

  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
    <ScrollToTop/>
    <div>
      <div className="slider-container">
        <Slider {...settings}>
          {images.map((url, index) => (
            <div key={index}>
              <img src={url} alt={t(`sport.slideAlt${index + 1}`)} className="slider-image" />
            </div>
          ))}
        </Slider>
      </div>

      <div className="main_div">
        <div className="first_div">
          <h1>{t('sport.benefitsTitle')}</h1>
          <h4>{t('sport.benefitsDescription')}</h4>
        </div>


        <div className="Sec_div">
         <img src="https://cdn-cms.orchidsinternationalschool.com/blog/Right-Age-to-Start-Sportmm83jxo4.jpg" className="image"></img>

        </div>
      </div>

      <br />

      <div className="container1">
        <h1 className="title1">{t('sport.ageGroupTitle')}</h1>
        <h3 className="subtitle">{t('sport.ageGroupSubtitle')}</h3>
        <div className="circles">
          <div className="circle" style={{ backgroundColor: '#0099CC' }}>
            <h1 className="circleh1">{t('sport.ageGroup1Title')}</h1>
            <h1 className="circleh2">{t('sport.ageGroup1Subtitle')}</h1>
            <div className="circle-dots">
              <div className="dot" style={{ backgroundColor: '#FFA500' }} />
              <div className="dot" style={{ backgroundColor: '#FFFF00' }} />
              <div className="dot" style={{ backgroundColor: '#FF0000' }} />
            </div>
            <ul className="circle-text">
              <li>{t('sport.ageGroup1Desc1')}</li>
              <li>{t('sport.ageGroup1Desc2')}</li>
              <li>{t('sport.ageGroup1Desc3')}</li>
              <li>{t('sport.ageGroup1Desc4')}</li>
            </ul>
          </div>

          <div className="circle" style={{ backgroundColor: '#FFA500' }}>
            <h1 className="circleh1">{t('sport.ageGroup2Title')}</h1>
            <h1 className="circleh2">{t('sport.ageGroup2Subtitle')}</h1>
            <div className="circle-dots">
              <div className="dot" style={{ backgroundColor: '#0099CC' }} />
              <div className="dot" style={{ backgroundColor: '#90EE90' }} />
              <div className="dot" style={{ backgroundColor: '#FF0000' }} />
            </div>
            <ul className="circle-text">
              <li>{t('sport.ageGroup2Desc1')}</li>
              <li>{t('sport.ageGroup2Desc2')}</li>
              <li>{t('sport.ageGroup2Desc3')}</li>
              <li>{t('sport.ageGroup2Desc4')}</li>
            </ul>
          </div>

          <div className="circle" style={{ backgroundColor: '#0099CC' }}>
            <h1 className="circleh1">{t('sport.ageGroup3Title')}</h1>
            <h1 className="circleh2">{t('sport.ageGroup3Subtitle')}</h1>
            <div className="circle-dots">
              <div className="dot" style={{ backgroundColor: '#90EE90' }} />
              <div className="dot" style={{ backgroundColor: '#FFFF00' }} />
              <div className="dot" style={{ backgroundColor: '#FF0000' }} />
            </div>
            <ul className="circle-text">
              <li>{t('sport.ageGroup3Desc1')}</li>
              <li>{t('sport.ageGroup3Desc2')}</li>
              <li>{t('sport.ageGroup3Desc3')}</li>
              <li>{t('sport.ageGroup3Desc4')}</li>
            </ul>
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
    </>
  );
};

export default withTranslation()(Sport);