import React from "react";
import '../../css/bestseller.css';
import {product} from './data.js';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link, Switch, Route} from "react-router-dom";
import Sinkha from './sinkha.js';


export const sink = product[0];
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
                    <Link to={`product/${props.id}`}>
                        <img src={props.src} className="bsImg" />

                    </Link>
                </div>
                <div className="description">
                    <Link to="xxx">
                        <h3>{props.description}</h3>
                    </Link>
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
                            
                            <ItemCard id={prod.id} name={prod.name} src={prod.src} description={prod.description} price={prod.price}/>
                    ))  
                    
                }
            </div>
        );
    }
}

export default BestSell;