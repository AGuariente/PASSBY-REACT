import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../home/Home";
import Contato from "../contato/Contato";
import Carousels from "../carousels/Carousels";
import Image_exit from '../images/exit.png';
import Login from '../login/Login'
import Protect from './ProtectedRoutes'

export default class NavbarComp extends Component {
  render() {
    return (
      <Router>
        <div>
          <Protect>
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
                  <Nav.Link href="/contato">Contato</Nav.Link>
                  <Nav.Link href="/carousels">Carousel</Nav.Link>
                  <img src={Image_exit} alt="a"></img>
                  <Nav.Link href="/login">Login</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Protect>
        </div>
        <div>
            <Switch>
              <Route exact path="/Carousels">
                <Carousels />
              </Route>            
              <Route exact path="/Contato">
                <Protect>
                  <Contato />
                </Protect>
              </Route>
              <Route exact path="/Login">
                <Login />
              </Route>
              <Route exact path="/Home">
                <Protect><Home /></Protect>
              </Route>
              <Route path="/">
                <Login />
              </Route>
            </Switch>
        </div>
      </Router>
    );
  }
}
