import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/sinkha.css";

class Sinkha extends React.Component{

    state = {
        value: 1,
        tab: 'description'
    };

    setTab = (newtab) => {
        this.setState({
            tab: newtab
        })

    }
    addClick = ()=>{
        this.setState({
            value: this.state.value + 1
        })
    }
    subClick = () =>{
        if(this.state.value > 1){
            this.setState({
                value: this.state.value - 1
            })
        }

    }
    render(){

        const Descript = () =>{
            return(
                <div className="description">
                    <h1>{this.props.product.detail}</h1>
                </div>
            );
        }
        const Review = () =>{
            return(
                <div className="review">
                    <h1>{this.props.product.detail}</h1>
                </div>
            )
        }
        const Spec = () =>{
            return(
                <div className="review">
                    <h1>{this.props.product.name}</h1>
                </div>
            )
        }
        const tabs = [
            {
                keys: 'description', title: 'Description', content: <Descript />
            },
            {
                keys: 'review', title: 'Review', content: <Review />
            },
            {
                keys: 'spec', title: 'Specification', content: <Spec />
            }
        ]
        const tabButton = tabs.map((tab) =>{
            if(this.state.tab === tab.keys){
                return <button className={'tabButton active'} onClick={()=> this.setTab(tab.keys)}>{tab.title}</button>
            }
            return <button className={'tabButton'} onClick={()=> this.setTab(tab.keys)}>{tab.title}</button>
        });
        const tabContent = tabs.map((tab)=>{
            if(this.state.tab === tab.keys){
                return <div className={'tabContent'}>{tab.content}</div>
            }
            // return <div className={'tabContent'} >{tab.content}</div>
        });
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            dotsClass: "slick-dot slick-thumbs",

            customPaging: (i) => {
                return (
                  <a>
                    {
                        // <h1>{i+1}</h1>
                        <img className="thumb" src={this.props.product.pic[i]} />
                    }
                  </a>
                );
              },
            //   dotsClass: "slick-dots slick-thumb",

            // nextArrow: <SampleNextArrow/>
<<<<<<< HEAD
          }; 
=======
          };

>>>>>>> aae5073860c77d4655ae49cec5668b0b4edb69ef
        return(
            <div className="page">

                <div className="container">
                    <div className="productInfo">
                        <div className="slidepic">
                            <Slider {...settings}>
                                {

                                    this.props.product.pic.map(im=>(
                                        console.log(im),
                                        <img src={im} alt=""/>
                                    ))
                                }
                                {/* <img src={require("../../img/home/p1.jpg")} /> */}
                            </Slider>
                        </div>
                        <div className="detail">
                            <div className="itemInfo">
                                <div className="item-name">
                                    {this.props.product.name}
                                </div>
                                <div className="descript">
                                    {this.props.product.detail}
                                </div>
                                <div className="price">
                                    {"Price : " + this.props.product.price}
                                </div>
                            </div>
                            <div className="button">
                                <div className="number">

                                    <div className="number-add" onClick={this.subClick}>
                                        -
                                    </div>
                                    <input className="numbers" min="1" value={this.state.value} step="1"></input>
                                    <div className="number-sub" onClick={this.addClick}>
                                        +
                                    </div>
                                </div>

                                <div className="addtocart">
                                    <button className="cart" >Add to Cart</button>
                                </div>
                                <div className="wishlist">
                                    <button className="wish">Love</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="userInfo">
                        <div className="table-list">
                            {tabButton}
                        </div>
                        {tabContent}
                    </div>
                </div>
            </div>
        );
    }
}

export default Sinkha;
