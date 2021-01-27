import React from "react";
import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SearchIcon from '@material-ui/icons/Search';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';


const Footer = () => {
    return (
        <>
            <section className="footer_Sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="foot_logo">
                                <h4>EasyShop</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus labore numquam omnis cupiditate</p>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="Links">
                                <h5>Quick Links</h5>
                                <ul>
                                    <li>
                                        <Link to="">About</Link>
                                    </li>
                                    <li>
                                        <Link to="">Shop</Link>
                                    </li>
                                    <li>
                                        <Link to="">Contact</Link>
                                    </li>
                                    <li>
                                        <Link to="">Login</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                        <div className="Links">
                                <h5>Categories</h5>
                                <ul>
                                    <li>
                                        <Link to="">Featured Product</Link>
                                    </li>
                                    <li>
                                        <Link to="">Most Popular</Link>
                                    </li>
                                    <li>
                                        <Link to="">Best Rated</Link>
                                    </li>
                                    <li>
                                        <Link to="">Best Price</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                        <div className="social_links">
                                <h5>Get in touch</h5>
                                <form action="">
                                    <input type="text" className="footer_input" placeholder="Your Mail" />
                                    <span className="inputsearch"> <SearchIcon/> </span>
                                </form>
                                <ul>
                                    <li>
                                        <Link to=""> <FacebookIcon/> </Link>
                                    </li>
                                    <li>
                                        <Link to=""> <TwitterIcon/> </Link>
                                    </li>
                                    <li>
                                        <Link to=""> <InstagramIcon/> </Link>
                                    </li>
                                    <li>
                                        <Link to=""> <YouTubeIcon/> </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="copyright">
                                <p>Copyright © 2021 EasyShop. All Right Reserved </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Footer;