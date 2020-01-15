import React from 'react';
import '../../css/homeStyle.css';
import Slider from "react-slick";
import {banners} from "./banner.js"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
// import AliceCarousel from 'react-alice-carousel'
// import 'react-alice-carousel/lib/alice-carousel.css'

class Home extends React.Component{
    render(){
        const handleOnDragStart = (e) => e.preventDefault()
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return(
            <div className="page">
                <div className="slide">
                <Slider {...settings}>
                    {
                    banners.map(ban =>(
                        <div>
                        <a href={ban.link}>
                            <img src={ban.src} onDragStart={handleOnDragStart} className="banner-img" />
                        </a>
                        </div>
                    ))
                    }
                    {/* <a href="https://google.com">
                    <img src={require('../../img/home/download.jpg')}  onDragStart={handleOnDragStart} className="banner-img" />
                    </a>
                    <a href="https://google.com">
                    <img src={require('../../img/home/download1.jpg')}  onDragStart={handleOnDragStart} className="banner-img" />
                    </a>
                    <a href="https://google.com">
                    <img src={require('../../img/home/download3.jpg')}  onDragStart={handleOnDragStart} className="banner-img" />
                    </a> */}
                {/* <img src="/img2" onDragStart={handleOnDragStart} className="yours-custom-class" />
                <img src="/img3" onDragStart={handleOnDragStart} className="yours-custom-class" /> */}

                </Slider>
                </div>
                {/* <div className="araiD"></div> */}
            </div>
        );
    }
}

export default Home;
