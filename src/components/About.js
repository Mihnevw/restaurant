import { NavLink } from "react-router-dom";

import AboutOne from "./AboutOne";
import Header from "./Header";
import '../App.css';

function About() {

  return (
    <>
      <div className="container-xxl position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
          <NavLink to="/" className="navbar-brand p-0">
            <h1 className="text-primary m-0">
              <i className="fa fa-utensils me-3"></i>Restorant
            </h1>
            <img src="img/logo.png" alt="" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars"></span>
          </button>
          <Header />
        </nav>


        <div className="container-xxl py-5 bg-dark hero-header mb-5">
          <div className="container my-5 py-5">
            <div className="row align-items-center g-5">
              <div className="col-lg-6 text-center text-lg-start">
                <div className="row g-3">
                  <div className="col-6 text-start">
                    <img className="img-fluid rounded-circle w-100 wow zoomIn" data-wow-delay="0.1s" src="img/about-1.jpg" alt="" />
                  </div>
                  <div className="col-6 text-start">
                    <img className="img-fluid rounded-circle w-75 wow zoomIn" data-wow-delay="0.3s" src="img/about-2.jpg" style={{ marginTop: '25%' }} alt="" />
                  </div>
                  <div className="col-6 text-end">
                    <img className="img-fluid rounded-circle w-75 wow zoomIn" data-wow-delay="0.5s" src="img/about-3.jpg" alt="" />
                  </div>
                  <div className="col-6 text-end">
                    <img className="img-fluid rounded-circle w-100 wow zoomIn" data-wow-delay="0.7s" src="img/about-4.jpg" alt="" />
                  </div>
                </div>
              </div>
              <AboutOne />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;