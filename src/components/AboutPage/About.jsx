import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "../../Header";

const About = () =>{
    return(
        <>
        <Header/>
        <section className="about_us">
           <div className="container">
           <div className="section-title text-center">
                <h3>Know About EasyShop ?</h3>
            </div>

            <div className="row mt-3">
                <div className="col-md-6">
                <div className="about_img">
                    <img src="https://c0.wallpaperflare.com/preview/930/80/871/interview-lifestyle-clothing-men.jpg" alt=""/>
                </div>
                </div>
                <div className="col-md-6">
                    <div className="aboutContent">
                        <div>
                        <h5>EasyShop</h5>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo cumque ratione optio rerum 
                            odit et sequi! Magnam, ipsa enim dolores ex neque nemo animi dolore dignissimos odio natus laboriosam debitis!</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo cumque ratione optio rerum odit et sequi! Magnam, ipsa enim dolores ex neque nemo animi dolore dignissimos odio natus laboriosam debitis!</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo cumque ratione optio rerum odit et sequi! Magnam, ipsa enim dolores ex neque nemo animi dolore dignissimos odio natus laboriosam debitis!</p>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </section>
        </>
    );
}

export default About;