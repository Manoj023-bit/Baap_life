import React, { useState, useRef } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Admission.css";
import { Link } from 'react-router-dom';

const Admission = () => {
  const initialFormData = {
    firstName: '',
    middleName: '',
    lastName: '',
    birthDay: '',
    age: '',
    gender: '',
    bloodGroup: '',
    emailAddress: '',
    address: '',
    mobileNumber: '',
    applicationId: '',
    admissionYear: '',
    class: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let formErrors = {};
    let valid = true;

    if (!formData.firstName) {
      formErrors.firstName = 'First Name is required';
      valid = false;
    }

    if (!formData.lastName) {
      formErrors.lastName = 'Last Name is required';
      valid = false;
    }

    if (!formData.emailAddress) {
      formErrors.emailAddress = 'Email is required';
      valid = false;
    }

    if (!formData.mobileNumber) {
      formErrors.mobileNumber = 'Mobile Number is required';
      valid = false;
    }

    if (!formData.admissionYear) {
      formErrors.admissionYear = 'Admission Year is required';
      valid = false;
    }

    if (!formData.class) {
      formErrors.class = 'Class is required';
      valid = false;
    }

    setErrors(formErrors);
    return valid;
  };

  const handleReset = () => {
    setFormData(initialFormData); 
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post('http://localhost:5000/api/students', formData);
        console.log('Form submitted:', response.data);
        toast.success('Form submitted successfully!');
      } catch (error) {
        console.error('Error submitting form:', error);
        toast.error('Error submitting form.');
      }
    }
  };

  const fileInputRef = useRef(null);

  const handleDivClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('Selected file:', file);
    }
  };

  return (
    <div className="container mainadd mt-1">
      <form onSubmit={handleSubmit}>
        <div className="row mb-2">
          <div className="col-md-2">
            <div className="form-group">
              <div
                style={{ border: '1px solid #ced4da', borderRadius: '5px', height: '150px', cursor: 'pointer' }}
                onClick={handleDivClick}
              >
              </div>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="middleName">Middle Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="middleName"
                    name="middleName"
                    value={formData.middleName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="birthDay">Birth Day</label>
              <input
                type="date"
                className="form-control"
                id="birthDay"
                name="birthDay"
                value={formData.birthDay}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-2">
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                className="form-control"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-2">
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select
                className="form-control"
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className="col-md-2">
            <div className="form-group">
              <label htmlFor="bloodGroup">Blood Group</label>
              <select
                className="form-control"
                id="bloodGroup"
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="emailAddress">Email Address</label>
              <input
                type="email"
                className={`form-control ${errors.emailAddress ? 'is-invalid' : ''}`}
                id="emailAddress"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleChange}
              />
              {errors.emailAddress && <div className="invalid-feedback">{errors.emailAddress}</div>}
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="mobileNumber">Mobile Number</label>
              <input
                type="tel"
                className={`form-control ${errors.mobileNumber ? 'is-invalid' : ''}`}
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
              />
              {errors.mobileNumber && <div className="invalid-feedback">{errors.mobileNumber}</div>}
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="applicationId">Application Id</label>
              <input
                type="text"
                className="form-control"
                id="applicationId"
                name="applicationId"
                value={formData.applicationId}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="admissionYear">Admission Year</label>
              <input
                type="number"
                className={`form-control ${errors.admissionYear ? 'is-invalid' : ''}`}
                id="admissionYear"
                name="admissionYear"
                value={formData.admissionYear}
                onChange={handleChange}
              />
              {errors.admissionYear && <div className="invalid-feedback">{errors.admissionYear}</div>}
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="class">Class</label>
              <input
                type="text"
                className={`form-control ${errors.class ? 'is-invalid' : ''}`}
                id="class"
                name="class"
                value={formData.class}
                onChange={handleChange}
              />
              {errors.class && <div className="invalid-feedback">{errors.class}</div>}
            </div>
          </div>
        </div>
        <div className="btn-all">
         <Link to='/'> <button type="button" className="btn btn-success w-10">
            Home
          </button>
          </Link>
          <button type="submit" className="btn btn-success w-10">
            Submit
          </button>
          <button type="button" onClick={handleReset} className="btn btn-success w-10">
            Reset
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Admission;
