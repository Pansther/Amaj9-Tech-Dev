import React from "react";
import '../../css/bestseller.css';
import {product} from './data.js';

class BestSell extends React.Component{
    
    render(){
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