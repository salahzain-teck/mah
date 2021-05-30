import React, { useEffect, useRef, useState } from "react";
import { NavDropdown } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Navbar.css";

function Navibar() {
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
  
   

        
   
      <Navbar collapseOnSelect
        variant="dark"
        expand="lg"
        fixed="top"
        className="py-3 py-lg-4"
        style={{transition: "1s ease",backgroundColor: navBackground ? "#292b2c" : "transparent",}}
      >
        <LinkContainer to="/">
          <Navbar.Brand>Dr Mah azhari</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="navbarScroll" variant="dark" />
        <Navbar.Collapse id="navbarScroll">
        <Nav className=" mr-auto my-2 my-lg-0  ">
        
        <LinkContainer to="/">
          <Nav.Link>HOME</Nav.Link>
        </LinkContainer>

        <LinkContainer to="/biography">
          <Nav.Link> ABOUT </Nav.Link>
        </LinkContainer>

        <LinkContainer to="/socialActivities">
          <Nav.Link>SOCIAL ACTIVITIES</Nav.Link>
        </LinkContainer>

        <NavDropdown  title="INTERNATIONAL REPUTATION" id="navbarScrollingDropdown">
            <NavDropdown.Item>Conferences</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Journeys</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="MEDIA" id="navbarScrollingDropdown">
            <NavDropdown.Item>Online</NavDropdown.Item>
            <NavDropdown.Divider />

            <LinkContainer to="/visuals">
              <NavDropdown.Item>Visuals</NavDropdown.Item>
            </LinkContainer>

            <LinkContainer to="/photoGallery">
              <NavDropdown.Item>Photos</NavDropdown.Item>
            </LinkContainer>
        </NavDropdown>

            <Nav.Link>BOOKS</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
      
  );
}

export default Navibar;
