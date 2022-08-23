import React from "react";



export default function Landing() {
  return (
    <section className="container-css section-height">
      
      <div className="row hero-row align-items-center">
        <div className="icom-landing col-md-4">
          <div className="icom-info">
            <div className="title">
              <h1> إمكان | Emkan </h1>
              <h3>نسعى في إمكان لتلبية احتياجاتك التمويلية عبر آلية عمل هي الأسهل والأسرع، لنكون خيارك الأفضل</h3>
            </div>
          </div>
          
        </div>
        <div id="carouselExampleControls" className="carousel slide col-md-8" data-bs-ride="carousel">
          <div className="carousel-inner ">
            <div className="carousel-item active">
              <img src={require('./assets/image/hero-1.png')} alt={'img'} className={'img-fluid hero-car'}/>
            </div>
            <div className="carousel-item">
            <img src={require('./assets/image/hero-1.png')} alt={'img'} className={'img-fluid hero-car'}/>
            </div>
            <div className="carousel-item">
            <img src={require('./assets/image/hero-1.png')} alt={'img'} className={'img-fluid hero-car'}/>
            </div>
          </div>
          
        </div>
        
      </div>
      
      <a href="#contact-us" className="projects">
          <i className="fas fa-angle-double-down fa-2x"></i>
        </a>


    </section>
    
  );
}
