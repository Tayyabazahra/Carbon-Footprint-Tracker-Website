import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Carousel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://cleanmanagement.com/wp-content/uploads/2023/10/CleanManagementEnvironmentalGroup-252418-Environmental-Protection-Agency-blogbanner1.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
          </div>
          <h5>Promoting Environment Awareness</h5>

        </div>
        <div className="carousel-item">
          <img src="https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
          </div>
          <h5>Improving Air Quality</h5>
        </div>
        <div className="carousel-item">
          <img src="https://cdn.shopify.com/s/files/1/2378/0773/files/image_0dd0b405-2fdc-4c65-a194-9ae770a7c875_large.jpg?v=1583914588" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
          </div>
          <h5>Supporting Global Sustainability Efforts</h5>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;