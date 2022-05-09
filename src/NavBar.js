import React, {useState} from "react";
import {Nav, NavbarToggler, NavbarBrand, Navbar, Collapse, NavItem, NavLink} from 'reactstrap'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resume from "./Resume.pdf";
import Home from './home.png'
//Navbar, which brings you to certain portions of the page and also links to my resume.
const NavBar = (props) => {
    let def = false;
    const [open, setOpen] = useState(def);
    return(
    <div>
        <Navbar id="navbar" dark>
            <NavbarBrand id="navbartitle" className="brand" href="/"><img src={Home}></img></NavbarBrand>
            <NavbarToggler id="navtoggle" className="navtoggle" onClick={() => setOpen(!open)}/>
            <Collapse navbar isOpen={open}>
                <Nav navbar>
                    <NavItem>
                        <NavLink id="links"  href="/projects/">Projects</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink target="_blank" id="links" href={Resume}>Resume</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink id="links"  href="/contact/">Contact</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    </div>
    )
}

export default NavBar;