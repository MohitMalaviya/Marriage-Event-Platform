import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import User from '../images/ppt2.jpg'
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import $ from "jquery";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="container-fluid ps-0">
        <div className="">
          <div className="col-auto px-sm-2 px-0 bg-danger">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <a
                href="/"
                className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
              >
                <span className="fs-5 d-none d-sm-inline"></span>
              </a>
              <ul
                className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                <li className="nav-item">
                  <NavLink to="/dashboard" className="text-decoration-none">
                    <img
                      src="../image/logo2.png"
                      alt=""
                      className="w-[100px] "
                    />
                    <a className="nav-link align-middle">
                      <span className="d-none d-sm-inline text-white fs-5">
                        Home
                      </span>
                    </a>
                  </NavLink>
                </li>
                {/* <li className="nav-item ">
                  <NavLink to="/addproduct" className="text-decoration-none">
                    <a className="nav-link align-middle ">
                      <span className="d-none d-sm-inline text-white fs-5 ">
                        Product
                      </span>
                    </a>
                  </NavLink>
                </li> */}
                <NavDropdown
                  title="Product"
                  id="navbarScrollingDropdown"
                  className="text-white fs-5 nav_item"
                >
                  <NavDropdown.Item>
                    <Link
                      to="/decorate"
                      className="text-decoration-none text-pink-800 nav_item"
                    >
                      Decoration
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Link
                      to="/bridewear"
                      className="text-decoration-none text-pink-800 nav_item"
                    >
                      Bride Wear
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Link
                      to="/groomwear"
                      className="text-decoration-none text-pink-800 nav_item"
                    >
                      Groom Wear
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Link
                      to="/photography"
                      className="text-decoration-none text-pink-800 nav_item"
                    >
                      Photography
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title="Add Product"
                  id="navbarScrollingDropdown"
                  className="text-white fs-5 nav_item"
                >
                  <NavDropdown.Item>
                    <Link
                      to="/adddecorate"
                      className="text-decoration-none text-pink-800 nav_item"
                    >
                      Decoration
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    <Link
                      to="/addbridewear "
                      className="text-decoration-none text-pink-800 nav_item"
                    >
                      Bride wear
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    <Link
                      to="/addgroomwear"
                      className="text-decoration-none text-pink-800 nav_item"
                    >
                      Groom wear
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    <Link
                      to="/addphotography"
                      className="text-decoration-none text-pink-800 nav_item"
                    >
                      Photography
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>

                <li className="nav-item ">
                  <NavLink to="/order" className="text-decoration-none">
                    <a className="nav-link align-middle ">
                      <span className="d-none d-sm-inline text-white fs-5 ">
                        Orders
                      </span>
                    </a>
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink to="/payment" className="text-decoration-none">
                    <a className="nav-link align-middle ">
                      <span className="d-none d-sm-inline text-white fs-5 ">
                        Payment Details
                      </span>
                    </a>
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink to="/users" className="text-decoration-none">
                    <a className="nav-link align-middle ">
                      <span className="d-none d-sm-inline text-white fs-5 ">
                        Users
                      </span>
                    </a>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
