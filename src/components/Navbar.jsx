import React from 'react';
import { Navbar as BNavbar, Container, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <BNavbar bg="black" variant="dark" expand="lg" sticky="top" className="navbar">
      <Container>
        <BNavbar.Brand as={Link} to="/">Series' Bag📽️</BNavbar.Brand>
        <BNavbar.Toggle aria-controls="navbarNav" className="navbar-toggler" />
        <BNavbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className={location.pathname === '/' ? 'active' : ''}>Home 🏚️</Nav.Link>
            <Nav.Link as={Link} to="/trending" className={location.pathname === '/trending' ? 'active' : ''}>Trending now ⚡</Nav.Link>
            <Nav.Link as={Link} to="/about" className={location.pathname === '/about' ? 'active' : ''}>About ❓</Nav.Link>
            <Nav.Link as={Link} to="/vip" className={location.pathname === '/vip' ? 'active' : ''}>VIP ♦️</Nav.Link>
          </Nav>
        </BNavbar.Collapse>
      </Container>
    </BNavbar>
  );
}

export default Navbar;