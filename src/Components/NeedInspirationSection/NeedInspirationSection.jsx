import React from 'react';
import './NeedInspirationSection.css';
import Container from 'react-bootstrap/Container'

function NeedInspirationSection() {
  return (
    <div className='need-inspiration-section py-5 position-relative'>
        <div className='bg-shape position-absolute'></div>
        <Container>
            <div className='row'>
                <div className='col-md-4 z-2'>
                    <h2 className='text-start text-light fw-semibold'>Need Inspiration?</h2>
                    <p className='text-start text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquam et vel ullam inventore! Cum.</p>
                    <div className='d-flex'>
                        <h5 className='text-light text-capitalize fw-semibold text-nowrap'>Call Us:</h5>
                        <a href='/' className='text-light mx-2 text-decoration-none h5 fw-semibold'>0900800700</a>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default NeedInspirationSection;