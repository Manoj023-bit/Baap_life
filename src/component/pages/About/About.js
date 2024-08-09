
import React from 'react';
import './About.css';
const About = () => {
    return (
       <>
        <div className='About'>
            <div className="aboutcontainer">
                <div className="about-breadcrumb">
                    <h1 className="about-title">About School</h1>
                </div>
              
            </div>

            <div className="about-school-content">
                <div className="about-content-wrapper row1">
                    <div className="col">
                        <img src="/images/baap-school.png" alt="img" className="school-image" />
                    </div>
                    <div className="col">
                        <p className="text-large">
                            <strong>THE  Life School</strong><br />
                            The BAAP Life Education Society was established in 2024 with the motive to educate society, fulfilling the social responsibility towards empowering rural areas with quality education.
                            The motive of the <strong>THE  Life School</strong> lies in the saying, “If you want to grow a person for life, give resources to earn. If you want the growth of a village, provide resources for good agriculture. If you want the growth of a society for generations, just educate them.”
                        </p>
                    </div>
                </div>
                <div className="about-additional-info row1">
                    <div className="col">
                        <p className="text-large">
                            <strong>THE LIFE SCHOOL TEACHING CLASS</strong><br />
                            To provide quality education, the <strong>THE  Life School</strong> EDUCATION SOCIETY started Strawberry English Medium<br></br> School in 2024. Within a short period, the school establis<br></br>itself center for quality education and  temple of spiritual<br></br> and moral learning.
                            This environment is built in way that <br></br>your progress will almost feel serendipitous. The temple <br></br>of Humanity is built on the foundation of moral character <br></br>and ethical values.
                        </p>
                    </div>
                    <div className="col">
                        <img src="/images/teaching.jpg" alt="Students in a classroom" className="school-image" />
                    </div>
                </div>
                <div className="about-library-info row1">
                    <div className="col">
                        <img src="/images/lab1.jpg" alt="School Library" className="school-image" style={{ height: 300 }} />
                    </div>
                    <div className="col">
                        <p className="text-large">
                            <strong>THE LIFE SCHOOL LIBRARY</strong><br />
                            The greatest benefit for many is having fewer distractions. At home, one might have to contend with roommates, pets, and other temptations. The library provides a wealth of educational resources that can aid in studies, away from distractions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default About;