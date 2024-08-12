import React, { useState } from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { ImArrowRight } from "react-icons/im";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CiFlag1 } from "react-icons/ci";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubscribe = () => {
    if (validateEmail(email)) {
      setEmailError("");
      toast.success("Otp sent successfully", {
        position: "top-right",
        autoClose: 500,
      });
    } else {
      setEmailError("Please enter a valid email address");
    }
  };

  return (
    <>
      <ToastContainer />
      <footer className="footer bg-dark text-white">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-4">
              <h4 className="text-uppercase">The Life School</h4>
              <p>
                Visitors:{" "}
                <span className="badge badge-light">
                  <CiFlag1 />
                  1628
                </span>
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="text-uppercase">Quick Links</h5>
              <div className="horizontal-line"></div>
              <div className="row">
                <div className="col-md-6 mt-2">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#!" className="text-white">
                        <FaAngleRight /> Home
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        <FaAngleRight /> Admissions
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        <FaAngleRight /> Sports

                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        <FaAngleRight /> 
                        Choose a Theme
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 mt-2">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#!" className="text-white">
                        <FaAngleRight /> About
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        <FaAngleRight /> Our Students
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        <FaAngleRight /> Health & Safety
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        <FaAngleRight /> Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <h5 className="text-uppercase">Newsletter</h5>
              <div className="horizontal-line"></div>
              <p className="mt-3">
                Sign Up to Our Newsletter to Get Latest
                <br /> Updates
              </p>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={handleEmailChange}
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-primary ml-1"
                    type="button"
                    onClick={handleSubscribe}
                  >
                    <ImArrowRight />
                  </button>
                </div>
              </div>
              {emailError && <p className="text-danger">{emailError}</p>}
            </div>
          </div>
          <div className="row allicon mt-5">
            <div className="col text-center">
              <a href="https://www.facebook.com/baap.company/" className="text-white Facebook-icon mr-5">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/the_baap_company/?hl=en" className="text-white Instagram-icon mr-5">
                <FaInstagram />
              </a>
              <a href="https://baapcompany.com/" className="text-white Linkedin-icon mr-5">
                <FaTwitter />
              </a>
              <a href="https://www.youtube.com/@baapcompany" className="text-white Youtube-icon mr-5">
                <FaYoutube />
              </a>
              <a href="https://www.linkedin.com/company/baapcompany/?originalSubdomain=in" className="text-white  Linkedin-icon">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <div className="footerl">
          <p className="m-0 p-3">
            &copy; 2024 The Life School English Medium School. All Rights
            Reserved. Developed By the baap company Pvt. Ltd.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
