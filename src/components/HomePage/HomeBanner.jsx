import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const HomeBanner = () =>{
    return(
        <>
        <section className="Homebanner">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="bannerpic">
                            <img src="https://www.pngkey.com/png/full/528-5280839_models-stalked-jermyn-streets-open-air-catwalk-in.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="home_banner_cont">
                            <div>
                            <p>New Season Trends!</p>
                            <h5>Best Winter Collection</h5>
                            <h6>Buy Now & <small>Get upto 30% Off</small> </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default HomeBanner;