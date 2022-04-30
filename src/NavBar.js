import React, {useState} from "react";
import {Nav, NavbarToggler, NavbarBrand, Navbar, Collapse, NavItem, NavLink} from 'reactstrap'
import Resume from "./Resume.pdf";
const NavBar = (props) => {
    let def = false;
    const [open, setOpen] = useState(def);
    return(
    <div>
        <Navbar id="navbar" dark>
            <NavbarBrand id="navbartitle" className="brand" href="/">Home</NavbarBrand>
            <NavbarToggler className="navtoggle" onClick={() => setOpen(!open)}/>
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