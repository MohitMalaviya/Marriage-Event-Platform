import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import "../App.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const switchToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-zinc-50 mt-0 navbar fixed-top">
        <Container>
          {/* <Navbar.Brand href="/">Wedding Elements</Navbar.Brand> */}
          <img src="../image/logo2.png" alt="" className="w-[80px] " />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link>
                <Link
                  to="/home"
                  className="text-decoration-none nav_item  text-pink-800"
                >
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/about"
                  className="text-decoration-none nav_item  text-pink-800"
                >
                  About
                </Link>
              </Nav.Link>

              <NavDropdown
                title="Vendors"
                id="navbarScrollingDropdown"
                className="text-pink-800 nav_item"
              >
                <NavDropdown.Item>
                  <Link
                    to="/decoration"
                    className="text-decoration-none text-pink-800 nav_item"
                  >
                    Decoration
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  <Link
                    to="/bridewear"
                    className="text-decoration-none text-pink-800 nav_item"
                  >
                    Bride wear
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  <Link
                    to="/groomwear"
                    className="text-decoration-none text-pink-800 nav_item"
                  >
                    Groom wear
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  <Link
                    to="/photography"
                    className="text-decoration-none text-pink-800 nav_item"
                  >
                    Photography
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Venues"
                id="navbarScrollingDropdown"
                className="nav_item"
              >
                <NavDropdown.Item>
                  <Link
                    to="/Goa"
                    className="text-decoration-none  text-pink-800 nav_item"
                  >
                    Goa
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  <Link
                    to="/jaipur"
                    className="text-decoration-none  text-pink-800 nav_item"
                  >
                    jaipur
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  <Link
                    to="/udaipur"
                    className="text-decoration-none  text-pink-800 nav_item"
                  >
                    Udaipur
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>

              {/* <Nav.Link href="#" disabled>
                Subscription
              </Nav.Link> */}
              <Nav.Link>
                <Link
                  to="/testimonials"
                  className="text-decoration-none text-pink-800 nav_item"
                >
                  Testrimonials
                </Link>
              </Nav.Link>
            </Nav>
            {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
            {/* <button>
            <Link to="/Login" className="text-decoration-none login_btn">Log in</Link>
            </button> */}
            <Link
              to="/Login"
              className="text-decoration-none login_btn text-white -mt-4"
            >
              <button className="mt-2 ms-8 rounded-3xl font-bold text-white h-12 w-40 footer_hirebtn">
                Log in
              </button>
            </Link>
            <Link
              to="/Registration"
              className="text-decoration-none login_btn text-white -mt-4"
            >
              <button className="mt-2 ms-8 rounded-3xl font-bold text-white h-12 w-40 footer_hirebtn">
                Registration
              </button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <div className="container mx-auto hover_venues">
        <div className="">
          <div className="row">
            <h5 className="d-flex justify-center align-middle">
              Destination Wedding Venues
            </h5>
            <div className="col-4">
              <div className="img justify-content-center d-flex align-items-center">
                <img
                  src="./image/goa11.webp"
                  alt=""
                  className="h-[200px] rounded-xl mt-4 "
                />
              </div>
              <h5 className="d-flex justify-center align-middle">Goa</h5>
            </div>

            <div className="col-4">
              <div className="img justify-content-center d-flex align-items-center">
                <img
                  src="./image/j4.webp"
                  alt=""
                  className="h-[200px] rounded-xl mt-4"
                />
              </div>
              <h5 className="d-flex justify-center align-middle">Jaipur</h5>
            </div>

            <div className="col-4">
              <div className="img justify-content-center d-flex align-items-center">
                <img
                  src="./image/u12.webp"
                  alt=""
                  className="h-[200px] rounded-xl mt-4"
                />
              </div>
              <h5 className="d-flex justify-center align-middle">Udaipur</h5>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Header;
