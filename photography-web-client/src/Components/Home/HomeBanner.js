import React from 'react';
import './HomeBanner.css'
import banner1 from '../../assets/banner1.jpg';
import banner2 from '../../assets/banner2.jpg';
import banner3 from '../../assets/banner4.jpeg'

const HomeBanner = () => {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active ">
          <img src={banner1} className="d-block w-100 img-fluid banner-Img" alt="..."  />
        </div>
        <div className="carousel-item">
          <img src={banner2} className="d-block w-100 img-fluid banner-Img" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={banner3} className="d-block w-100 img-fluid banner-Img" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default HomeBanner;