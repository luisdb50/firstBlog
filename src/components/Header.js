import React from "react"
import { Nav, Navbar, NavLink } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

import "../css/header.css"

export function Header() {
    return(
        <Navbar expand="sm" className="content_header"> 
            <img className="logo_img" alt="logo" src={null} />  
            <Navbar.Brand className="header_title" href="#home">Name</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive_navbar" />
            <NavbarCollapse id="responsive_navbar">
                <Nav className="elements_nav">
                    <NavLink href="#home">Home</NavLink>
                    <NavLink href="#home">Sources</NavLink>
                    <NavLink href="#home">About</NavLink>
                    
                </Nav>
                <Nav className="element_nav">
                    <NavLink href="#home">EXIT</NavLink>
                </Nav>
            </NavbarCollapse>
        </Navbar>
    );
}