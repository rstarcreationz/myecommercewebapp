import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import RatedCard from "./RatedCard";
import RatedCardData from "./RatedCardData";
import {
    MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow
} from "mdbreact";

const MultiCardSlider = (value) => {
    return (
        <>
            <section class="Card_Slider">
                <MDBContainer>
                <div class="section-title text-center"><h3>Top Rated</h3></div>
                    <MDBCarousel className="mt-5" activeItem={1} length={3} slide={true} showControls={true} showIndicators={true} multiItem>
                        <MDBCarouselInner>
                            <MDBRow>
                                <MDBCarouselItem itemId="1">

                                {RatedCardData.map(RatedCard)}
                                  
                                </MDBCarouselItem>
                                <MDBCarouselItem itemId="2">
                                {RatedCardData.map(RatedCard)}
                                </MDBCarouselItem>
                                <MDBCarouselItem itemId="3">
                                {RatedCardData.map(RatedCard)}
                                </MDBCarouselItem>
                            </MDBRow>
                        </MDBCarouselInner>
                    </MDBCarousel>
                </MDBContainer>
            </section>
        </>
    );
}

export default MultiCardSlider;