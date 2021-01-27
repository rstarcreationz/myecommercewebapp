import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PopularCard from "./PopularCard";
import PopularData from "./PopularData";

const MostPopular = () => {
    return (
        <>
            <section className="Mostpopular">
                <div className="container">
                <div class="section-title text-center"><h3>Most Popular</h3></div>
                    <div className="row">
                        {PopularData.map(PopularCard)}
                    </div>
                </div>
            </section>
        </>
    );
}


export default MostPopular;