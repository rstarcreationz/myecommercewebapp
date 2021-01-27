import React from "react";
import {useHistory} from "react-router-dom";
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, } from "react-bootstrap";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HomeIcon from '@material-ui/icons/Home';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
// import LocalMallIcon from '@material-ui/icons/LocalMall';
import ContactsIcon from '@material-ui/icons/Contacts';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

const Header = (value) => {
    let history = useHistory();
    const Logout = () => {
        localStorage.clear();
        history.push('/login')
    }

    
    return (

        <>
            <header>
                <div className="container">
                    <Navbar expand="lg">
                        <Navbar.Brand to="/Home" >EasyShop</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">

                                {
                                   localStorage.getItem("user-info") ?
                                        <>
                                            <Link to="/Home"> <HomeIcon />  Home</Link>
                                            <NavDropdown title="Pages" id="basic-nav-dropdown">
                                                <NavDropdown.Item activeclassName='active'>
                                                    <Link to="/About"> <ContactSupportIcon /> About</Link>
                                                </NavDropdown.Item>
                                                {/* <NavDropdown.Item>
                                            <Link to="/Shop"> <LocalMallIcon/> Shop</Link>
                                        </NavDropdown.Item> */}
                                                <NavDropdown.Item>
                                                    <Link to="/Contact"> <ContactsIcon /> Contact</Link>
                                                </NavDropdown.Item>
                                            </NavDropdown>
                                            <NavDropdown title="User" id="basic-nav-dropdown">
                                            <NavDropdown.Item activeclassName='active'>
                                                <Link to="/About"> <AccountBoxIcon /> My Account</Link>
                                            </NavDropdown.Item>
                                            
                                        </NavDropdown>
                                        <Link to="/Cart"> <span class="badge badge-light"><ShoppingCartIcon />{value.data.length}</span> </Link>
                                        <Link onClick={Logout}> <ExitToAppIcon /> Log Out</Link>
                                        </>
                                        :
                                        <>
                                            <Link to="/Login"> <AssignmentIndIcon /> LogIn</Link>
                                            <Link to="/Signup"> <PersonAddIcon /> Sign In</Link>
                                           
                                        </>
                                }

                               


                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </header>
        </>

    );
}

const mapStateToProps=state=>({
    data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
})
export default connect(mapStateToProps,mapDispatchToProps)(Header);