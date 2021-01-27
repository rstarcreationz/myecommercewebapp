import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import StarIcon from '@material-ui/icons/Star';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {MDBCol} from "mdbreact";


const RatedCard = (props) =>{
    return(
        <>
        <MDBCol md="3">

<div className="card card__dark card__dark--magenta">
    <div className="media media--16-9"> <img src={props.cardimg} alt="" width="640" height="426" /> </div>
    <div className="primary-title">
        <div className="primary-text float-right">{props.price}</div>
        <div className="primary-text">{props.title}</div>
        <div className="secondary-text">
            <div className="action-icons icon-color--yellow"> <StarIcon className="material-icons action-icon" /> <StarIcon className="material-icons action-icon" /> <StarIcon className="material-icons action-icon" />  </div>
        (3)</div>
    </div>
    <div className="supporting-text">{props.content}</div>
    <div className="actions border-top">
        <div className="action-buttons float-right">
            <button className="cardbutton" type="button">View Details</button>
        </div>
        <div className="action-icons"> <FavoriteBorderIcon className="material-icons action-icon bottomIcon" />  <ShoppingCartIcon className="material-icons action-icon bottomIcon" /> </div>
    </div>
</div>

</MDBCol>
        </>
    );
}

export default RatedCard;