import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/Theme";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/logo.png";
import "./NavbarItem.css";

const NavbarItem = () => {
  const { contextTheme, setContextTheme } = useContext(ThemeContext);

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="">
        <Container className="ml-2" style={{ zIndex: "9" }}>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="ms-auto "
              style={{
                width: "450px",
                gap: "20px",
                left: "733px",
                position: "",
                top: "57px",
                fontSize: "1.2rem",
              }}
            >
              <NavLink
                className="nav-link link-light"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.replace("/#contact-us");
                }}
              >
                تواصل معنا
              </NavLink>
              <NavLink
                className="nav-link link-light"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.replace("/#testimonials");
                }}
              >
                آراء العملاء
              </NavLink>
              <NavLink
                className="nav-link link-light"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: document.querySelector("#whoarewe").offsetTop,
                    behavior: "smooth",
                  });
                }}
              >
                من نحن
              </NavLink>

              <NavLink
                className="nav-link link-light"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.replace("/");
                }}
              >
                الرئيسية
              </NavLink>
            </Nav>

            <Nav
              className="ms-auto"
              style={{ position: "", top: "57px", left: "1533px" }}
            >
              <img className="logoImg navIcon" src={logo} alt="logo" />
              <a className="navigations navIcon nav-link ms-3 fs-4 text-success">
                {contextTheme == "light" ? (
                  <FontAwesomeIcon
                  className="navIcon"
                    icon={faSun}
                    flip="horizontal"
                    onClick={() => setContextTheme("dark")}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faMoon}
                    className="navIcon"
                    flip="horizontal"
                    onClick={() => setContextTheme("light")}
                  />
                )}
              </a>{" "}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarItem;
