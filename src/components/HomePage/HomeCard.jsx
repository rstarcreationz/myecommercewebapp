import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CardData from "./CardData";
import StarIcon from '@material-ui/icons/Star';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {connect} from 'react-redux'
import {AddtoCart} from '../../Redux/Actions/action';


const HomeCard = (value) => {
    console.log("card", value);
    return (
        <>
            <section className="Card_Section">
                <div className="container">
                    <div className="section-title text-center">
                        <h3>Featured Products</h3>
                    </div>
                    <div className="row">
                        {/* {CardData.map(MyCard)} */}
                        {
                            CardData.map(function MyCard(value) {
                                return (
                                    <div className="col-md-4 mt-5">
                                        <div className="card card__dark card__dark--magenta">
                                            <div className="media media--16-9"> <img src={value.cardimg} alt="" width="640" height="426" /> </div>
                                            <div className="primary-title">
                                                <div className="primary-text float-right">{value.price}</div>
                                                <div className="primary-text">{value.title}</div>
                                                <div className="secondary-text">
                                                    <div className="action-icons icon-color--yellow"> <StarIcon className="material-icons action-icon" /> <StarIcon className="material-icons action-icon" /> <StarIcon className="material-icons action-icon" />  </div>
                                                    (3)</div>
                                            </div>
                                            <div className="supporting-text">{value.content}</div>
                                            <div className="actions border-top">
                                                <div className="action-buttons float-right">
                                                    <button className="cardbutton" type="button">View Details</button>
                                                </div>
                                                <div className="action-icons"> <FavoriteBorderIcon className="material-icons action-icon bottomIcon" />
                                                    <span onClick={()=>
                                                        {value.addToCartHandler({pice:1000})}
                                                        }> <ShoppingCartIcon className="material-icons action-icon bottomIcon" />  </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

const mapStateToProps=state=>({
    // data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(AddtoCart(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(HomeCard);