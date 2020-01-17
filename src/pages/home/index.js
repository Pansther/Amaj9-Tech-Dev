import React from 'react';
import '../../css/homeStyle.css';
import Slider from "react-slick";
import {banners} from "./banner.js"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BestSell from "./bestseller.js";
// import AliceCarousel from 'react-alice-carousel'
// import 'react-alice-carousel/lib/alice-carousel.css'

// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, right: "1%"}}
//         onClick={onClick}
//       />
//     );
//   }

class Home extends React.Component{

    render(){
        const handleOnDragStart = (e) => e.preventDefault()

        const CreateBan =(props)=> {
          return (
            <div>
                <a href={props.link}>
                    <img src={props.src} onDragStart={handleOnDragStart} className="banner-img" alt={props.alt}/>
                </a>
            </div>
          )
        }

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            // nextArrow: <SampleNextArrow/>
          };
        return(
            <div className="page">
              
                <div className="slide">
                <Slider {...settings}>
                  {
                    banners.map(ban =>(
                      <CreateBan key={ban.id} src={ban.src} alt={"ban-" + ban.id}/>
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
                <BestSell />
            </div>
        );
    }
}

export default Home;
