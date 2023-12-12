import React, { useState } from 'react';
import './Slider.css';

const Slider = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(0);

    const previous = () => {
        setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const next = () => {
        setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };
    const botonimg = (index) => {
        if (index ===1 || index ===2 ){
            return (
                <button className='image-button'>Click Me</button>
            );
        }
    };
    return (
        <div className="slider-container">
            <button className="slide-button prev" onClick={previous}>&laquo;</button>
            {images.map((image, index) => (
                <div
                    key={image}
                    className={`slide ${index === currentImage ? 'active' : ''}`}
                >
                    <img className='imagenSlider' src={image} alt={`Slide ${index}`} />
                </div>
            ))}
            <button className="slide-button next" onClick={next}>&raquo;</button>
        </div>
    );
};

export default Slider;