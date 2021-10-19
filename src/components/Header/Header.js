import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import "./Header.css"

const Header = () => {

    return (
        <div className='m-b'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top '>
                <Container>
                    <Navbar.Brand href='/Home'>Health Care</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink activeClassName='active' className='nav-link' to="/Home">Home </NavLink>
                            <NavLink activeClassName='active' className='nav-link' to="/Services"> Services </NavLink>
                            <NavLink activeClassName='active' className='nav-link' to="/Contact">Contact Us</NavLink>
                            <NavLink activeClassName='active' className='nav-link' to="/About"> About</NavLink>
                            <NavLink activeClassName='active' className='nav-link' to="/Login"> Login </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default Header;
