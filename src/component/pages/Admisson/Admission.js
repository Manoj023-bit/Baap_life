import React, { useState, useRef } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Admission.css";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { withTranslation } from 'react-i18next';
import ScrollToTop from '../ScrollToTop';

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
  const { t } = useTranslation();

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
      formErrors.firstName = t('errors.firstNameRequired');
      valid = false;
    }

    if (!formData.lastName) {
      formErrors.lastName = t('errors.lastNameRequired');
      valid = false;
    }

    if (!formData.emailAddress) {
      formErrors.emailAddress = t('errors.emailRequired');
      valid = false;
    }

    if (!formData.mobileNumber) {
      formErrors.mobileNumber = t('errors.mobileNumberRequired');
      valid = false;
    }

    if (!formData.admissionYear) {
      formErrors.admissionYear = t('errors.admissionYearRequired');
      valid = false;
    }

    if (!formData.class) {
      formErrors.class = t('errors.classRequired');
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
        toast.success(t('messages.submitSuccess'));
      } catch (error) {
        console.error('Error submitting form:', error);
        toast.error(t('messages.submitError'));
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
    <>
    <ScrollToTop/>
    <div className='mainadd'>
      <div className="container ">
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
                    <label htmlFor="firstName">{t('formLabels.firstName')}</label>
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
                    <label htmlFor="middleName">{t('formLabels.middleName')}</label>
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
                    <label htmlFor="lastName">{t('formLabels.lastName')}</label>
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
                <label htmlFor="birthDay">{t('formLabels.birthDay')}</label>
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
                <label htmlFor="age">{t('formLabels.age')}</label>
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
                <label htmlFor="gender">{t('formLabels.gender')}</label>
                <select
                  className="form-control"
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">{t('formLabels.select')}</option>
                  <option value="Male">{t('formLabels.male')}</option>
                  <option value="Female">{t('formLabels.female')}</option>
                  <option value="Other">{t('formLabels.other')}</option>
                </select>
              </div>
            </div>
            <div className="col-md-2">
              <div className="form-group">
                <label htmlFor="bloodGroup">{t('formLabels.bloodGroup')}</label>
                <select
                  className="form-control"
                  id="bloodGroup"
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                >
                  <option value="">{t('formLabels.select')}</option>
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
                <label htmlFor="emailAddress">{t('formLabels.emailAddress')}</label>
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
                <label htmlFor="address">{t('formLabels.address')}</label>
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
                <label htmlFor="mobileNumber">{t('formLabels.mobileNumber')}</label>
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
                <label htmlFor="applicationId">{t('formLabels.applicationId')}</label>
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
                <label htmlFor="admissionYear">{t('formLabels.admissionYear')}</label>
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
                <label htmlFor="class">{t('formLabels.class')}</label>
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
              {t('buttons.home')}
            </button>
            </Link>
            <button type="submit" className="btn btn-success w-10">
              {t('buttons.submit')}
            </button>
            <button type="button" onClick={handleReset} className="btn btn-success w-10">
              {t('buttons.reset')}
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
    </>
  );
};

export default withTranslation()  (Admission);
