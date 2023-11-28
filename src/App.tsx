import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './component/home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav fs-4">
            <a className="nav-item nav-link active size" href="#about-us" >About-us</a>
            <a className="nav-item nav-link active size" href="#contact" >Contact</a>
            <a className="nav-item nav-link active size " href="#service">Services</a>
            <a className="nav-item nav-link active size" href="#reviews">Review</a>
            <a className="nav-item nav-link active size" href="#faq">Faq</a>
          </div>
        </div>
      </nav>

    </div>
  );
}

export default App;
