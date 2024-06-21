import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import logo from "../images/logo.svg";
import arrow from "../images/icon-arrow-down.svg";
import hamburger from "../images/icon-menu.svg";
import close from "../images/icon-close-menu.svg";
import calendar from "../images/icon-calendar.svg";
import reminders from "../images/icon-reminders.svg";
import planning from "../images/icon-planning.svg";
import todo from "../images/icon-todo.svg";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [featOpen, setFeatOpen] = useState(false);
  const [compOpen, setCompOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!open);
  };

  const closeNavMobile = () => {
    if (window.innerWidth <= 768) {
      setOpen(false);
    }
  };
  const dropOpenFeat = () => {
    setFeatOpen(!featOpen);
    setCompOpen(false);
  };

  const dropOpenComp = () => {
    setCompOpen(!compOpen);
    setFeatOpen(false);
  };

  return (
    <nav className="navbar">
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
      <div className={`menu ${open && "active"}`}>
        <div onClick={toggleNav} className="navClose">
          <ReactSVG src={close} />
        </div>
        <ul className="mainList">
          <li onClick={dropOpenFeat} id="feat">
            Features
            <span className="arrow">
              <img src={arrow} alt="arrow" />
            </span>
          </li>
          {featOpen ? (
            <ul className="dropMenu" id="dropFeat">
              <li>
                <img src={todo} alt="todo" />
                Todo List
              </li>
              <li>
                <img src={calendar} alt="calendar" />
                Calendar
              </li>
              <li>
                <img src={reminders} alt="reminders" />
                Reminders
              </li>
              <li>
                <img src={planning} alt="planning" />
                Planning
              </li>
            </ul>
          ) : null}
          <li onClick={dropOpenComp} id="comp">
            Company
            <span className="arrow">
              <img src={arrow} alt="arrow" />
            </span>
          </li>
          {compOpen ? (
            <ul className="dropMenu" id="dropComp">
              <li>History</li>
              <li>Our Team</li>
              <li>Blog</li>
            </ul>
          ) : null}
          <li id="careers">
            <a onClick={closeNavMobile} href="#contact">
              Careers
            </a>
          </li>
          <li id="about">
            <a onClick={closeNavMobile} href="#about">
              About
            </a>
          </li>
        </ul>
        <div className="buttonContainer">
          <button className="login">Login</button>
          <button className="register">Register</button>
        </div>
      </div>
      <div onClick={toggleNav} className="navHamburger">
        <ReactSVG src={hamburger} />
      </div>
    </nav>
  );
};

export default Navbar;
