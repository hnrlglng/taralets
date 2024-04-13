import React from 'react';
import './Navbarz.css'
import imgLogo from '../../Assets/logo.png'
class Navbarz extends React.Component {
  render() {
    return (
        <nav class="navbar navbar-expand-lg bg-primary sticky-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#" className="logo flex"> <img src={imgLogo} alt="Logo" />
          <span style={{ color: 'white', fontWeight: 'bold' }}>Taralets</span></a>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-4 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Car Rentals</a>
              </li>
              <li class="nav-item">
                <a class="nav-link"  href="#">Flight</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Accomodation</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About Us</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Menu
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Settings</a></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><a class="dropdown-item" href="#">Notification</a></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><a class="dropdown-item" href="#">Profile</a></li>
                </ul>
              </li>
            </ul>
            <li class="nav-item">
            <button class="btn btn-outline-dark" type="submit">Login</button>
            <button class="btn btn-outline-dark" type="submit">Sign-Up</button>
        </li>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbarz;
