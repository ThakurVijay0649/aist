import React, { useState } from 'react'
import logo from "../images/logo.svg";
import "../Styles/Header.scss"
import { FiSettings } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Header = () => {
    const [show, setShow] = useState("");

    const showDisplay = () => { 
        if (show === "") {
            setShow("show");
        } else {
            setShow("");
        }
    }
    return (
        <header>
            <nav className="navbar">
                <Link to='/' className="left">
                    <img src={logo} alt="" />
                </Link>
                <div className={`center ${show}`}>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li style={{cursor:"pointer"}} className="courses-btn">Courses <IoIosArrowDown/>
                        </li>
                        <li><Link to="/">Events</Link></li>
                        <li><Link to="/">Blog</Link></li>
                        <li style={{cursor:"pointer"}} className="pages-btn">Pages <IoIosArrowDown />
                        </li>
                        <li><Link to="/">Contact</Link></li>
                    </ul>
                </div>
                <div className="right">
                    <Link to="/"> <FiSettings /></Link>
                    <Link to="/"><FaShoppingCart /></Link>
                    <HiOutlineMenuAlt3 onClick={showDisplay}/>
                </div>
            </nav>
        </header>
    )
}

export default Header
