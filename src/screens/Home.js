import React from "react";
import '../App.css';
import '../styles/home.css';
import $ from 'jquery';
// import $ from 'jQuery';

function Home() {
    return (
        <div className="main-app">
            <div className="main-appGradiant">
                <div className="introText-home">
                    <div className="introText-home1">
                        <p className="introText1">Your Trusted Technology Partners</p>
                    </div>
                    <div className="introText-home2">
                        <p className="introText2">IT Services, Web Development, and Cloud Services</p>
                    </div>
                </div>

                <div className="settingsMenuContainer">
                    <div className="settingsMenuInnerC">
                        {/* image of settings menu */}
                    </div>
                </div>

                <div className="bulletDesign">
                    <div className="bulletTextContainer">
                        <p className="bulletText">Keep Scrolling</p>
                    </div>
                    <div className="bulletCircle">
                        <div className="circle"></div>
                    </div>
                    <div className="bulletLine">
                        <p className="bulletLineText">|</p>
                    </div>
                </div>
            </div>

            <div className="homeTextGridContainer">
                <div className="homeTextGridLeft">
                    <div className="homeTextGridLeftInner">
                        <h4 className="homeTextParagraph1">
                            For 25 years and counting, Advantage Services
                            has been assisting a broad cross-section of businesses
                            to utilize the latest technologies to improve operations
                            and increase profits.
                        </h4>
                    </div>
                </div>
                <div className="homeTextGridRight">
                    <div className="homeTextParagraph2">
                        <p className="homeTextInner">
                            With an entire team of experts at Advantage Services,
                            you get a full IT department at your disposal. We
                            have a passion for technology, and we are thrilled to
                            share our expertise and creative capabilities with you.
                        </p>
                    </div>
                    <div className="homeTextParagraph3">
                        <p className="homeTextInner">
                            We are very proud to follow the mantra of “Do what you
                            say you are going to do and do it better than the other
                            guys”. This philosophy has helped us achieve long term
                            relationships with our clients, many of which have been
                            with us since our first years in business.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

$(window).scroll(function () {
    var windowScroll = this.window.scrollY;
    var defaultWindowValue = 0;

    if (windowScroll > defaultWindowValue) {
        $(".main-app").css({
            'background-position-y': -windowScroll / 4
        });
    } else if (windowScroll === defaultWindowValue) {
        $(".main-app").css({
            "background-position-y": defaultWindowValue
        });
    }
});

export default Home;