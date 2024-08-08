

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Sport.css"

const Sport = () => {
  const images = [
    "https://thumbs.dreamstime.com/b/kids-play-football-outdoor-field-children-score-goal-soccer-game-girl-boy-kicking-ball-running-child-team-jersey-120383202.jpg",
    "https://cdn.firstcry.com/education/2022/05/04111910/522565846.jpg",
    "https://media.istockphoto.com/id/497568472/photo/boy-playing-cricket.jpg?s=612x612&w=0&k=20&c=l_5wcAKbTpnBqOb9tHOiyqVZmHJRmjz_3kxHpZRStfM=",
    "https://www.eurokidsindia.com/blog/wp-content/uploads/2023/10/child-should-engage-in-football.jpg",
 
  ];
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
    <div>
      <div className="slider-container">
        <Slider {...settings}>
          {images.map((url, index) => (
            <div key={index}>
              <img src={url} alt={`Slide ${index}`} className="slider-image" />
            </div>
          ))}
        </Slider>

      </div>


      <div className="main_div">
        <div className="first_div">
          <h1>benefits
            that go beyond
            the game</h1>
          <h4>
            As sports educators, we’ve created an expertly designed <br></br>curriculum that is innovative, age-appropriate, and fun! Our<br></br> multi-sport program for younger children grows with your <br></br>
            child – from adult participation to separation classes. Older <br></br>children learn the fundamentals of specific team sports. And <br></br> at every age your child gains important life skills like taking <br></br>instruction, working in groups and sportsmanship.

            <h4> We take pride in nurturing development of your whole child.<br></br> With a low student to coach ratio, we help each child grow in <br></br> the confidence and skills they need to succeed in sports,<br></br> school and life.</h4>
          </h4>

        </div>
        <div className="Sec_div">

          <div className="Health">

            <div className="Health-fit">
              <h5>Health<br></br> & <br></br>Fitness</h5>

            </div>
            <div className="Health_imp">
              <h1>Health & Fitness</h1>
              <p>Inspires a lifelong appreciation of an active <br></br> lifestyle.</p>
            </div>
          </div>


          <div className="Health">

            <div className="Achievement">
              <h5>Achievement</h5>

            </div>
            <div className="Achievement_imp">
              <h1>Achievement</h1>
              <p>Enhances cognitive skills leading to stronger<br></br> academic performances.</p>
            </div>
          </div>


          <div className="Health">

            <div className="Life_Skills">
              <h5>Life Skills</h5>

            </div>
            <div className="Skill_imp">
              <h1>Life Skills</h1>
              <p>Improves development of children’s self-<br></br>esteem and emotional stability.</p>
            </div>
          </div>

          <div className="Health">

            <div className="Sport">
              <h5>Love <br></br> Of<br></br> Sports</h5>

            </div>
            <div className="Sport_imp">
              <h1>Love Of Sports</h1>
              <p>Builds a passion for sports and the sports skills <br></br>needed to succeed </p>
            </div>
          </div>



        </div>
      </div>
<br></br>

<div className="container">
  <h1 className="title1">12 months to 12 years</h1>
          
      <h3 className="subtitle">Multi-sport to sport-specific</h3>
      <div className="circles">
        <div className="circle" style={{ backgroundColor: '#0099CC' }}>
        <h1 className="circleh1">1-2 years </h1> <h1 className="circleh2">Adult participation</h1>
          <div className="circle-dots">
            <div className="dot" style={{ backgroundColor: '#FFA500' }} />
            <div className="dot" style={{ backgroundColor: '#FFFF00' }} />
            <div className="dot" style={{ backgroundColor: '#FF0000' }} />
          </div>
          <ul className="circle-text">
            <li>Sport related movements</li>
            <li>Free play and structured activities</li>
            <li>Improve fine and gross motor skills</li>
            <li>Socialization Skills</li>
          </ul>
        </div>
        <div className="circle" style={{ backgroundColor: '#FFA500' }}>
        <h1 className="circleh1">2.5-5 years </h1> <h1 className="circleh2">Separation Programs</h1>
          <div className="circle-dots">
            <div className="dot" style={{ backgroundColor: '#0099CC' }} />
            <div className="dot" style={{ backgroundColor: '#90EE90' }} />
            <div className="dot" style={{ backgroundColor: '#FF0000' }} />
          </div>
          <ul className="circle-text">
            <li>Increase in competitive levels Emphasis </li>
            <li>on effort & sportsmanship Individual</li>
            <li> and group settings Sport specific</li>
            <li> principles & fundamentals</li>
          </ul>
        </div>
        <div className="circle" style={{ backgroundColor: '#0099CC' }}>
        <h1 className="circleh1">6-12 years </h1> <h1 className="circleh2">Advanced Skills</h1>
          <div className="circle-dots">
            <div className="dot" style={{ backgroundColor: '#0099CC' }} />
            <div className="dot" style={{ backgroundColor: '#FFFF00' }} />
            <div className="dot" style={{ backgroundColor: '#FF0000' }} />
          </div>
          <ul className="circle-text">
            <li>Emphasis on effort and sportsmanship</li>
            <li>Sport specific fundamentals</li>
            <li>Local after School Programs</li>
            <li>Competitive games</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Sport;
