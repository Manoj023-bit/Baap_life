import React, { useState } from 'react';
import './Admission.css';

function Admission() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    dob: '',
    phoneNumber: '',
    email: '',
    address: '',
    city: '',
    state: '',
    applicationType: '',
    admissionSemester: '',
    course: '',
    highSchoolName: '',
    graduationYear: '',
    highSchoolAddress: '',
    highSchoolCity: '',
    highSchoolState: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.firstName) formErrors.firstName = 'First Name is required';
    if (!formData.lastName) formErrors.lastName = 'Last Name is required';
    if (!formData.gender) formErrors.gender = 'Gender is required';
    if (!formData.dob) formErrors.dob = 'Date of Birth is required';
    if (!formData.phoneNumber) formErrors.phoneNumber = 'Phone Number is required';
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.address) formErrors.address = 'Address is required';
    if (!formData.city) formErrors.city = 'City is required';
    if (!formData.state) formErrors.state = 'State is required';
    if (!formData.admissionSemester) formErrors.admissionSemester = 'Admission Semester is required';
    if (!formData.course) formErrors.course = 'Course is required';
    if (!formData.highSchoolName) formErrors.highSchoolName = 'High School Name is required';
    if (!formData.graduationYear) formErrors.graduationYear = 'Graduation Year is required';
    if (!formData.highSchoolAddress) formErrors.highSchoolAddress = 'High School Address is required';
    if (!formData.highSchoolCity) formErrors.highSchoolCity = 'High School City is required';
    if (!formData.highSchoolState) formErrors.highSchoolState = 'High School State is required';

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form Data Submitted: ', formData);
    } else {
      console.log('Validation Failed');
    }
  };

  return (
    <div className="form-container">
      <h1>Baap LifeSchool Admission Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="personal-info">
          <label>
            Name:
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <span className="error-message">{errors.firstName}</span>}
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <span className="error-message">{errors.lastName}</span>}
          </label>
          <label>
            Gender:
            <select name="gender" value={formData.gender} onChange={handleChange}>
              <option value="">Please Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <span className="error-message">{errors.gender}</span>}
          </label>
          <label>
            Date of Birth:
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
            {errors.dob && <span className="error-message">{errors.dob}</span>}
          </label>
          <label>
            Phone Number:
            <input
              type="tel"
              name="phoneNumber"
              placeholder="(000) 000-0000"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && <span className="error-message">{errors.phoneNumber}</span>}
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              placeholder="example@example.com"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              placeholder="Street Address"
              value={formData.address}
              onChange={handleChange}
            />
            {errors.address && <span className="error-message">{errors.address}</span>}
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
            />
            {errors.city && <span className="error-message">{errors.city}</span>}
            <input
              type="text"
              name="state"
              placeholder="State / Province"
              value={formData.state}
              onChange={handleChange}
            />
            {errors.state && <span className="error-message">{errors.state}</span>}
          </label>
        </div>

        <div className="application-info">
          <h2>Application for Admission Information</h2>
          <label>
            Admission Application For:
            <input
              type="radio"
              name="admissionSemester"
              value="1st Semester"
              checked={formData.admissionSemester === '1st Semester'}
              onChange={handleChange}
            /> 1st Year
            <input
              type="radio"
              name="admissionSemester"
              value="2nd Semester"
              checked={formData.admissionSemester === '2nd Semester'}
              onChange={handleChange}
            /> 2nd Year
            {errors.admissionSemester && <span className="error-message">{errors.admissionSemester}</span>}
          </label>
          <label>
            Course Name:
            <select name="course" value={formData.course} onChange={handleChange}>
              <option value="">Please Select</option>
              <option value="course1">BCA</option>
              <option value="course2">MCA</option>
              <option value="course3">MBA</option>
            </select>
            {errors.course && <span className="error-message">{errors.course}</span>}
          </label>
        </div>

        <div className="high-school-info">
          <h2>High School Education</h2>
          <label>
            Name of Last High School Attended:
            <input
              type="text"
              name="highSchoolName"
              value={formData.highSchoolName}
              onChange={handleChange}
            />
            {errors.highSchoolName && <span className="error-message">{errors.highSchoolName}</span>}
          </label>
          <label>
            Year Graduated:
            <input
              type="date"
              name="graduationYear"
              value={formData.graduationYear}
              onChange={handleChange}
            />
            {errors.graduationYear && <span className="error-message">{errors.graduationYear}</span>}
          </label>
          <label>
            Address:
            <input
              type="text"
              name="highSchoolAddress"
              placeholder="Street Address"
              value={formData.highSchoolAddress}
              onChange={handleChange}
            />
            {errors.highSchoolAddress && <span className="error-message">{errors.highSchoolAddress}</span>}
            <input
              type="text"
              name="highSchoolCity"
              placeholder="City"
              value={formData.highSchoolCity}
              onChange={handleChange}
            />
            {errors.highSchoolCity && <span className="error-message">{errors.highSchoolCity}</span>}
            <input
              type="text"
              name="highSchoolState"
              placeholder="State / Province"
              value={formData.highSchoolState}
              onChange={handleChange}
            />
            {errors.highSchoolState && <span className="error-message">{errors.highSchoolState}</span>}
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Admission;
