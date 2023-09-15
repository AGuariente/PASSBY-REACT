import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../home/Home";
import Contact from "../contact/Contato";
import Carousels from "../carousels/Carousels";


export default class NavbarComp extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar bg="dark" variant={"dark"} expand="lg">
            <Navbar.Brand as={Link} to='/'>Passby</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/contact">Contato</Nav.Link>
                <Nav.Link href="/carousels">Carousel</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div>
            <Switch>
            <Route exact path="/Carousels">
                <Carousels />
              </Route>            
              <Route exact path="/Contact">
                <Contact />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
        </div>
      </Router>
    );
  }
}
