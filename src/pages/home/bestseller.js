import React from "react";
import '../../css/bestseller.css';
import {product} from './data.js';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class BestSell extends React.Component{
    
    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            
            // nextArrow: <SampleNextArrow/>
          };
        const ItemCard =(props)=>{
            return(
            <div className="itemBox">
                <div className="pic">
                    <img src={props.src} className="bsImg" />
                </div>
                <div className="description">
                    <h3>{props.description}</h3>
                </div>
                <div className="price">
                    <h3>{props.price}</h3>
                </div>
            </div>
            )
        }
        return(
            <div className="bestsellerpage">
                <div className="title">
                    <h1>Top Deal </h1>
                </div>
                {
                    
                    product.map(prod =>(
                        
                            <ItemCard src={prod.src} description={prod.description} price={prod.price}/>
                    ))  
                    
                }
            </div>
        );
    }
}

export default BestSell;