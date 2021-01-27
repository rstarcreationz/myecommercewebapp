import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";
import PinDropIcon from '@material-ui/icons/PinDrop';
import DraftsIcon from '@material-ui/icons/Drafts';
import LanguageIcon from '@material-ui/icons/Language';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Header from "../../Header";

const Contact = () =>{
    return(
        <>
        <Header/>
        <section className="contact_us">
           <div className="container">
           
            <div className="contact_bg">
            <div className="row">
                <div className="col-md-5">
                    
                        <div className="contact_info">
                            <h4>Contact Us</h4>
                            <div>
                                <span><PinDropIcon/></span>
                                <h6>23, Avenue de Paris <br/> 75012 Paris</h6>
                            </div>

                            <div>
                                <span><DraftsIcon/></span>
                                <h6>Hello@EasyShop.com</h6>
                            </div>

                            <div>
                                <span><LanguageIcon/></span>
                                <h6><Link>www.easyshop.com</Link></h6>
                            </div>

                            <div>
                                <span><PhoneAndroidIcon/></span>
                                <h6>+33619530144</h6>
                            </div>

                            <ul>
                                <li>
                                    <Link> <InstagramIcon/> </Link>
                                </li>
                                <li>
                                    <Link> <TwitterIcon/> </Link>
                                </li>
                                <li>
                                    <Link> <LinkedInIcon/> </Link>
                                </li>
                            </ul>
                        </div>
                    
                </div>
                <div className="col-md-7">
                   <div className="contact_Form default-form">
                       <div className="form-title">
                           <h5>GET IN TOUCH</h5>
                       </div>
                       <form action="">
                           <div className="form-group">
                               <input type="text" className="form-control" placeholder="Name"/>
                           </div>
                           <div className="form-group">
                               <input type="email" className="form-control" placeholder="Email"/>
                           </div>
                           <div className="form-group">
                               <input type="text" className="form-control" placeholder="Subject"/>
                           </div>
                           <div className="form-group">
                               <textarea name="" id="" cols="30" rows="5" className="form-control" placeholder="Message"></textarea>
                           </div>
                           <div className="form-group">
                               <button type="button" className="cardbutton">Submit</button>
                           </div> 
                       </form>
                   </div>
                </div>
            </div>
            </div>

           </div>
        </section>
        </>
    );
}

export default Contact;