import React from "react";
import HeaderLogo from '../images/advantage-services-logo.svg';
import { Route, Routes, Link } from 'react-router-dom';
import $ from 'jquery';

import "../styles/header.css";

function Header() {
    return (
        <div className="headerContainer">
            <div className="blurHeader"></div>
            <div className="headerLeft">
                <div className="imageHeadContainer">
                    <img className="headerImage" src={HeaderLogo} />
                </div>
            </div>
            <div className="headerRight">
                <div className="linkContainer">
                    <nav>
                        {/* Change containers to UL */}
                        <ul className="ulLinkContainer">
                            <li className="ulHeadLinks">
                                <Link className="headLink1 headLinkGlobal" to="/it_services">IT Services</Link>
                            </li>
                            <li className="ulHeadLinks">
                                <Link className="headLink2 headLinkGlobal" to="web_design">Web Design</Link>
                            </li>
                            <li className="ulHeadLinks">
                                <Link className="headLink3 headLinkGlobal" to="office_365">Office 365</Link>
                            </li>
                            <li className="ulHeadLinks">
                                <Link className="headLink4 headLinkGlobal" to="about">About</Link>
                            </li>
                            <li className="ulHeadLinks">
                                <Link className="headLink5 headLinkGlobal" to="blog">Blog</Link>
                            </li>
                            <li className="ulHeadLinks">
                                <Link className="headLink6 headLinkGlobal" to="contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

$(window).scroll(function () {
    var windowY = window.scrollY;
    if (windowY >= 55) {
        $(".blurHeader").css({
            "background-color": "rgba(255, 255, 255, 0.5",
            "backdrop-filter": "blur(10px)"
        });
        $(".headLinkGlobal").css({
            "color": "#475569",
            "font-weight": "700"
        });
        $(".headerImage").css({
            "filter": "invert(100%)"
        })
    } else if (windowY <= 55) {
        $(".blurHeader").css({
            "background-color": "transparent",
            "backdrop-filter": "blur(0)"
        });
        $(".headLinkGlobal").css({
            "color": "rgb(166,166,166)",
            "font-weight": "700" //Change Font Weight
        });
        $(".headerImage").css({
            "filter": "invert(0)"
        })
    }
});

export default Header;