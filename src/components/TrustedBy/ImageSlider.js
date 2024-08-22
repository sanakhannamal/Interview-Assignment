
import React from "react";
import image1 from '../../assets/slider-image1.png';
import image2 from '../../assets/slider-image2.png';
import image3 from '../../assets/slider-image3.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import './index.css'

const ImageSlider = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    };
  
    return (
      <Box className="slider-container" sx={{ maxWidth: { xs: 300, sm: 600, md: 1000, lg: 1201 }, margin: 'auto' }}>
        <Slider {...settings}>
          <Box className="slider-images">
            <img className="slider-img" style={{width: '300px', height: '98.38px'}} src={image1} alt="Image1" />
          </Box>
          <Box className="slider-images">
            <img className="slider-img" style={{width: '88px', height: '98.38px'}} src={image2} alt="Image2" />
          </Box>
          <Box className="slider-images">
            <img className="slider-img" style={{width: '300.44px', height: '98.38px'}}  src={image3} alt="Image3" />
          </Box>
          <Box className="slider-images">
            <img className="slider-img" style={{ width: '88px', height: '98.38px'}} src={image2} alt="Image2" />
          </Box>
          <Box className="slider-images">
            <img className="slider-img" style={{width: '300.44px', height: '98.38px'}}  src={image3} alt="Image3" />
          </Box>
          <Box className="slider-images">
            <img className="slider-img" style={{ width: '300px', height: '98.38px'}} src={image1} alt="Image1" />
          </Box>
        </Slider>
      </Box>
    );
}

export default ImageSlider;
