import React from "react";
import {Slide} from "react-slick";
import "../../img/category/product1";
import {product} from "./data.js";
import "../../css/sinkha.css";
class sinkha extends React.Component{
    render(){
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
                <div className="container">
                    <div>
                        <div className="pic">
                            <Slide {...settings}>
                                <img src={require()} alt=""/>
                            </Slide>
                        </div>
                        <div className="detail">
                            <div className="item-name">

                            </div>
                            <div className="descript">

                            </div>
                            <div className="price">

                            </div>
                            <div className="button">
                                <div classNmae="count">
                                    <input className="number"></input>
                                </div>
                                <div className="addtocart">
                                    <button className="cartbut">Add to Cart</button>
                                </div>
                                <div className="wishlist">
                                    <button className="wish">love</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}