import React from 'react';
import './HeroSection.css';
import Carousel  from 'react-bootstrap/Carousel';
import GreenBtn from '../GreenBtn/GreenBtn';

function HeroSection() {
  return (
    <div className='hero-section'>
      <Carousel>
        <Carousel.Item className='carousel-item1 vh-100'> 
            <Carousel.Caption className='h-100 d-flex flex-colum align-items-center justify-content-center'>
                <div className="row h-100">
                    <div className="col-lg-6 d-flex flex-column align-items-start justify-content-center">
                        <h1 className='text-capitalize text-start'>Find your perfect holiday</h1>
                        <p className='text-start'>A lot of people around the world travel every year to many places. Moreover, it is important to travel to humans. Some travel to learn more while some travel to take a break from their life.</p>
                        <GreenBtn btnTitle='Check our holidays' btnLink='/holidays' />
                    </div>
                    <div className='col-lg-6 d-none d-lg-block'></div>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carousel-item2 vh-100'> 
            <Carousel.Caption className='h-100'>
                <div className="row h-100">
                    <div className="col-lg-6 d-flex flex-column align-items-start justify-content-center">
                        <h1 className='text-capitalize text-start'>Do you need a City break?</h1>
                        <p className='text-start'>I love everything about this place – from the house we have rented for accommodation to my school, from my neighbourhood to the local markets, from the beautiful monuments to the delectable food</p>
                        <GreenBtn btnTitle='Our city breaks' btnLink='/city-breaks' />
                    </div>
                    <div className='col-lg-6 d-none d-lg-block'></div>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carousel-item3 vh-100'> 
            <Carousel.Caption className='h-100'>
                <div className="row h-100">
                <div className='col-lg-6 d-none d-lg-block'></div>
                    <div className="col-lg-6 d-flex flex-column align-items-end justify-content-center">
                        <h1 className='text-capitalize text-start'>Travel anywhere</h1>
                        <p className='text-start'>A lot of people around the world travel every year to many places. Moreover, it is important to travel to humans. Some travel to learn more while some travel to take a break from their life.</p>
                        <GreenBtn btnTitle='Check all destinations' btnLink='/destinations' />
                    </div>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default HeroSection;