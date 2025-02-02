import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './OurStudents.css';
import { useTranslation } from 'react-i18next';
import { withTranslation } from 'react-i18next';
import ScrollToTop from '../ScrollToTop';

const OurStudent = () => {
  const [isMainHovered, setIsMainHovered] = useState(false);
  const [activeSubButton, setActiveSubButton] = useState(null);
  const { t } = useTranslation();

  const studentData = {
    kg: [
      {
        name: "Pratik Patil",
        email: "Pratik@gmail.com",
        branch: "Mumbai",
        grade: "KG",
        mobile: "9876543210",
        year: "2000-2001",
        city: "Mumbai",
      },
      {
        name: "Coder Swaminath",
        email: "Swami@gmail.com",
        branch: "Mumbai",
        grade: "KG",
        mobile: "9876543210",
        year: "2000-2001",
        city: "Nannaj",
      },
    ],
    nursery: [
      {
        name: "Samadhan Gudhge",
        email: "sama1@gmail.com",
        branch: "Mumbai",
        grade: "Nursery",
        mobile: "9876543210",
        year: "2020-2021",
        city: "Nannaj",
      },
    ],
    class1: [
      {
        name: "Rohit Rahane",
        email: "rohit@gmail.com",
        branch: "Pune",
        grade: "Class 1",
        mobile: "9876543210",
        year: "2021-2022",
        city: "Chandanapuri",
      },
    ],
    class2: [
      {
        name: "Coder Swami",
        email: "swami@gmail.com",
        branch: "Pune",
        grade: "Class 2",
        mobile: "9876543211",
        year: "2021-2022",
        city: "Sakur",
      },
      {
        name: "Sushant Nehe",
        email: "sushant@gmail.com",
        branch: "Karnataka",
        grade: "Class 2",
        mobile: "9876543211",
        year: "2018-2019",
        city: "Nashik",
      },
    ],
    class3: [
      {
        name: "Vaibhav Sonawane",
        email: "vaibhav@gmail.com",
        branch: "Pune",
        grade: "Class 3",
        mobile: "7071313177",
        year: "2023-2024",
        city: "Ozar",
      },
    ],
    class4: [
      {
        name: "Sahil Sonawane",
        email: "sahil@gmail.com",
        branch: "Mysore",
        grade: "Class 4",
        mobile: "9876543211",
        year: "2022-2023",
        city: "Sakur",
      },
    ],
  };

  const allStudentsData = [
    ...studentData.kg,
    ...studentData.nursery,
    ...studentData.class1,
    ...studentData.class2,
    ...studentData.class3,
    ...studentData.class4,
  ];

  const handleMainButtonClick = () => {
    setIsMainHovered(!isMainHovered);
    setActiveSubButton(null);
  };

  return (
    <>
    <ScrollToTop/>
    <div className="body1 mt-5">
      <div className="button-container">
        <div className="main-button-wrapper">
          <button
            className="hover-button"
            onClick={handleMainButtonClick}
          >
            {isMainHovered ? t('students.hideData') : t('students.showData')}
          </button>
          {isMainHovered && (
            <div className="sub-buttons-container">
              <button
                className="sub-button"
                onClick={() => setActiveSubButton("all")}
              >
                {t('students.allStudents')}
              </button>
              <button
                className="sub-button"
                onClick={() => setActiveSubButton("kg")}
              >
                {t('students.kg')}
              </button>
              <button
                className="sub-button"
                onClick={() => setActiveSubButton("nursery")}
              >
                {t('students.nursery')}
              </button>
              <button
                className="sub-button"
                onClick={() => setActiveSubButton("class1")}
              >
                {t('students.class1')}
              </button>
              <button
                className="sub-button"
                onClick={() => setActiveSubButton("class2")}
              >
                {t('students.class2')}
              </button>
              <button
                className="sub-button"
                onClick={() => setActiveSubButton("class3")}
              >
                {t('students.class3')}
              </button>
              <button
                className="sub-button"
                onClick={() => setActiveSubButton("class4")}
              >
                {t('students.class4')}
              </button>
            </div>
          )}
        </div>
      </div>
      {isMainHovered && activeSubButton && (
  <div className="table-container">
    <h1 className='h1'>
      {activeSubButton === "all"
        ? "All Students" 
        : t(`students.${activeSubButton}`) 
      }
    </h1>
    <table>
      <thead>
        <tr>
          <th>{t('students.name')}</th>
          <th>{t('students.email')}</th>
          <th>{t('students.branch')}</th>
          <th>{t('students.grade')}</th>
          <th>{t('students.mobile')}</th>
          <th>{t('students.year')}</th>
          <th>{t('students.city')}</th>
        </tr>
      </thead>
      <tbody>
        {(activeSubButton === "all"
          ? allStudentsData
          : studentData[activeSubButton]
        )?.map((student, index) => (
          <tr key={index}>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>{student.branch}</td>
            <td>{student.grade}</td>
            <td>{student.mobile}</td>
            <td>{student.year}</td>
            <td>{student.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}

      <div className='footer'>
        <h1 className='passout'>{t('students.passout')}</h1>
        <div className="row">
          <div className="col-md-3">
            <Card>
              <Card.Img variant="top" src="https://media.licdn.com/dms/image/D4D03AQGugz_KCLi9QQ/profile-displayphoto-shrink_200_200/0/1708515138790?e=2147483647&v=beta&t=fNXhn-nPUE8NbcSuuTvynoSr216lFYcNe_6w8x2NFLA"
                height={300} />
              <Card.Body>
                <Card.Title>Coder Swami</Card.Title>
                <Card.Text>
                  Percentage :- 35%<br /> 
                  University :- Pune University
                </Card.Text>
                <Button variant="primary">Know More</Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-3">
            <Card>
              <Card.Img variant="top" src="https://media.licdn.com/dms/image/D5635AQEsSTKSIeIVdQ/profile-framedphoto-shrink_200_200/0/1695621016301?e=1723615200&v=beta&t=AORk0l-nhuG2VjpO630_DyqKFkLikrn6KwDLu7sjEHM"
                height={300}
              />
              <Card.Body>
                <Card.Title>Sushant Nehe</Card.Title>
                <Card.Text>
                  Percentage :- 52%<br />
                  University :- Karnataka University
                </Card.Text>
                <Button variant="primary">Know More</Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-3">
            <Card>
              <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7tZublUU3su05AsnJatPqTMHVcmkQp2hYwg&s"
                height={300}
              />
              <Card.Body>
                <Card.Title>Vaibhav Sonawane</Card.Title>
                <Card.Text>
                  Percentage :- 89%<br />
                  University :- Mumbai University
                </Card.Text>
                <Button variant="primary">Know More</Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-3">
            <Card>
              <Card.Img variant="top" src="https://media.licdn.com/dms/image/D5603AQEEd7KfvdWVdw/profile-displayphoto-shrink_200_200/0/1697860651684?e=1728518400&v=beta&t=JSHl6nWaWv0RmPNaQH5N9g8u70Upx3uxeOprPTJ6WB8"
                height={300}
              />
              <Card.Body>
                <Card.Title>Sahil Sonawane</Card.Title>
                <Card.Text>
                  Percentage :- 73%<br />
                  University :- Mysore University
                </Card.Text>
                <Button variant="primary">Know More</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default withTranslation()(OurStudent);
    