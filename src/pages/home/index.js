import React from 'react';
import '../../css/homeStyle.css';

import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

class Home extends React.Component{
    render(){
        const handleOnDragStart = (e) => e.preventDefault()
        return(
            <div className="page">
                <div className="slide">
                <AliceCarousel mouseTrackingEnabled autoPlay={true} autoPlayInterval={2000} buttonsDisabled={true}>

                    <img src={require('../../img/home/download.jpg')}  onDragStart={handleOnDragStart} className="banner-img" />
                    <img src={require('../../img/home/download1.jpg')}  onDragStart={handleOnDragStart} className="banner-img" />
                    <img src={require('../../img/home/download3.jpg')}  onDragStart={handleOnDragStart} className="banner-img" />
                {/* <img src="/img2" onDragStart={handleOnDragStart} className="yours-custom-class" />
                <img src="/img3" onDragStart={handleOnDragStart} className="yours-custom-class" /> */}

                </AliceCarousel>
                </div>
                {/* <div className="araiD"></div> */}
            </div>
        );
    }
}

export default Home;
