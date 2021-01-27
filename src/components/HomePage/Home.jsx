import React from "react";
import { Carousel } from "react-bootstrap";
import Header from "../../Header";
import HomeBanner from "./HomeBanner";
import HomeCard from "./HomeCard";
import MostPopular from "./MostPopular";
import MultiCardSlider from "./MultiCardSlider";

const Home = () => {
  return (
    <>
    <Header/>
    <div className="home">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.asmallsonline.co.za/wp-content/uploads/2015/10/Men-Fashion-1140x760.jpg"
            alt="First slide"
          />
          <span className="banner_overlay"></span>
          <Carousel.Caption>
            <h1>EasyShop</h1>
            <h3>Easiest way to shop your favourite item.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse explicabo eveniet ex ullam enim perspiciatis</p>
            <button type="button" className="cardbutton">Read More</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://c0.wallpaperflare.com/preview/930/80/871/interview-lifestyle-clothing-men.jpg"
            alt="Third slide"
          />
          <span className="banner_overlay"></span>
          <Carousel.Caption>
            <h1>EasyShop</h1>
            <h3>Easiest way to shop your favourite item.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse explicabo eveniet ex ullam enim perspiciatis</p>
            <button type="button" className="cardbutton">Read More</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://c0.wallpaperflare.com/preview/940/836/1000/selective-focus-photography-of-shirts-hanging-on-rack.jpg"
            alt="Third slide"
          />
          <span className="banner_overlay"></span>
          <Carousel.Caption>
            <h1>EasyShop</h1>
            <h3>Easiest way to shop your favourite item.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse explicabo eveniet ex ullam enim perspiciatis</p>
            <button type="button" className="cardbutton">Read More</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>

    <HomeCard/>

    <HomeBanner/>

    <MostPopular/>

    <MultiCardSlider/>

    </>
  );
}

export default Home;