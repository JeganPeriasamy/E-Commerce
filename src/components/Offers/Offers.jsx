import React from 'react';
import exclusive_image from '/exclusive_image.png';
import { useNavigate } from 'react-router-dom';

const Offers = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/login');
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='container py-5 '>
      <div className="row align-items-center">
       
        <div className="col-md-6 text-center text-md-start">
          <h1 className="display-4 fw-bold">Exclusive</h1>
          <h1 className="display-4 fw-bold">Offers For You</h1>
          <h3 className="text-muted mt-3 mb-4">ONLY ON BEST SELLERS PRODUCTS</h3>
          <button onClick={handleClick} className="btn btn-danger btn-lg">
            Check Now
          </button>
        </div>
       
        <div className="col-md-5 col-12 text-center">
          <img src={exclusive_image} className="img-fluid" alt="Exclusive Offers" />
        </div>
      </div>
    </div>
  );
};

export default Offers;
