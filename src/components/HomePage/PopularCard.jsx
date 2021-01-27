import React from "react";
import {Link} from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import StarIcon from '@material-ui/icons/Star';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const PopularCard = (value) =>{
    return(
        <>
            <div class="col-md-4 mt-5">
                <div class="square">
                    <img src={value.img} class="mask" />
                    <span className="cardbadge">{value.type}</span>
                    <div class="blog_Content">
                        <span>
                                <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/>
                        </span>
                        <span class="blog-icon">
                            <Link to="#"> <FavoriteBorderIcon/> </Link> <Link to="#"><i class="far fa-heart"></i></Link> <Link to="#"> <ShoppingCartIcon/> </Link>
                        </span>
                        <p>{value.name} <small>{value.qty}</small> </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PopularCard;