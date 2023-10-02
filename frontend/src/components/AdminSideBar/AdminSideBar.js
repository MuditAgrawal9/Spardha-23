import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHome
// } from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from 'reactstrap';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import './AdminSideBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaTasks } from 'react-icons/fa';
// import { FaUserAlt } from 'react-icons/fa';
import { FaHome,FaEdit } from 'react-icons/fa';
import { HiUsers } from "react-icons/hi";
import { CgFileDocument } from "react-icons/cg";
import { IoMdBasketball } from "react-icons/io";
// import { FaSignOutAlt } from 'react-icons/fa';
import { isMobile } from 'react-device-detect';
// import {Link } from 'react-router';

// import SubMenu from "./SubMenu";

const SideBar = ({ isOpen, toggle }) => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    // console.log('mobile=', isMobile);
    if (isMobile) {
      setMobile(true);
    }
  }, []);

  const handleClick = () => {
    // console.log('handle click');
    if (mobile) {
      toggle();
    }
  };
  const handleClick2 = () => {
    // console.log('handle click');
    if (mobile) {
      toggle();
    }

    localStorage.removeItem('token');
    // window.location.href = '/';
  };

  return (
    <div
      className={classNames('sidebar', { 'is-open': isOpen })}
      id="navigation"
    >
      <div className="sidebar-header">
        <span color="info" onClick={toggle} style={{ color: '#fff' }}>
          &times;
        </span>
        {/* <h3>Bootstrap Sidebar</h3> */}
        <div className="logo_db">
          <Link to="/">
            <img
              src="/images/spardha-logo-white.png"
              alt="spardha-logo"
              className="hidden-sm spardha-logo"
            />
            {/* <img src="/images/logo/spardha-small-white.png" alt="spardha-logo" className="visible-xs visible-sm circle-logo"/> */}
          </Link>
        </div>
      </div>
      <div className="side-menu">
        <Nav vertical className="list-unstyled pb-3 navi">
          {/* <p>Dummy Heading</p> */}
          {/* <SubMenu title="Home" icon={faHome} items={submenus[0]} /> */}

          <NavItem className="item_nav">
            <NavLink
              tag={Link}
              to={'/'}
              onClick={() => {
                handleClick();
              }}
            >
              {/* <FontAwesomeIcon icon={faHome} className="mr-2 icon_bar" /> */}
              <FaHome className="mr-2 icon_bar" />
              DashBoard
            </NavLink>
          </NavItem>
          <NavItem className="item_nav">
            <NavLink
              tag={Link}
              to={"/allUsers"}
              onClick={() => {
                handleClick();
              }}
            >
              {/* <FontAwesomeIcon icon={faBriefcase} className="mr-2 icon_bar" /> */}
              {/* <FaTasks className="mr-2 icon_bar" /> */}
              <HiUsers/>

            All Users
            </NavLink>
          </NavItem>
          {/* <SubMenu title="Pages" icon={faCopy} items={submenus[1]} /> */}
          <NavItem className="item_nav">
            <NavLink
              tag={Link}
              to={'/sportsRegistrations'}
              onClick={() => {
                handleClick();
              }}
            >
              {/* <FontAwesomeIcon icon={faImage} className="mr-2 icon_bar" /> */}
              <FaEdit/>
             Sports Registration
            </NavLink>
          </NavItem>
          <NavItem className="item_nav">
            <NavLink
              tag={Link}
              to={'/documentVerification'}
              onClick={() => {
                handleClick2();
              }}
            >
              {/* <FontAwesomeIcon icon={faImage} className="mr-2 icon_bar" /> */}
              {/* <FaSignOutAlt className="mr-2 icon_bar" /> */}
              <CgFileDocument/>
             Doc Verification
            </NavLink>
          </NavItem>
          <NavItem className="item_nav">
            <NavLink
              tag={Link}
              to={'/allGames'}
              onClick={() => {
                handleClick2();
              }}
            >
              {/* <FontAwesomeIcon icon={faImage} className="mr-2 icon_bar" /> */}
              <IoMdBasketball/>
             All Games
            </NavLink>
          </NavItem>
          {/* <NavItem>
          <NavLink tag={Link} to={"/faq"}>
            <FontAwesomeIcon icon={faQuestion} className="mr-2" />
            FAQ
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/contact"}>
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
            Contact
          </NavLink>
        </NavItem> */}
        </Nav>
      </div>
    </div>
  );
};

// const submenus = [
//   [
//     {
//       title: "Home 1",
//       target: "Home-1",
//     },
//     {
//       title: "Home 2",
//       target: "Home-2",
//     },
//     {
//       itle: "Home 3",
//       target: "Home-3",
//     },
//   ],
//   [
//     {
//       title: "Page 1",
//       target: "Page-1",
//     },
//     {
//       title: "Page 2",
//       target: "Page-2",
//     },
//   ],
// ];

export default SideBar;
