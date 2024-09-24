import React from 'react';
import "./Hero.css";
import hand_icon from "/hand_icon.png"
import arrow_icon from "/arrow.png"
import hero_image from "/hero_image.png"
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/login');
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='container  mt-5 d-flex align-items-center justify-content-between mb-5'>
      <div className="row w-100 px-lg-5">
        <div className="col-lg-6 d-flex flex-column justify-content-center">
          <div className="d-flex align-items-center mb-4 mt-5">
            <p className="fs-1 fw-lg-bold mb-0">Life is all about Art, Make it more special</p>
            <img src={hand_icon} alt="" className="ms-3" style={{ width: '150px' }} />
          </div>
          
          <button
            onClick={handleClick}
            className="btn btn-danger d-flex align-items-center justify-content-between px-4 py-2 rounded-pill w-50"
          >
            <span>Latest Collections</span>
            <img src={arrow_icon} alt="" className="ms-2" style={{ width: '18px' }} />
          </button>
        </div>

        <div className="col-lg-6 mt-5 d-none d-lg-block">
          <img src={hero_image} alt="" className="img-fluid" style={{ animation: 'fadeIn 3.5s ease-in-out forwards',height: '400px',width: '500px' } } />
        </div>
      </div>
    </div>
  );
}

export default Hero;
