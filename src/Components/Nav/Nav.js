import React from 'react'
import './nav.css'

function Nav() {
    return (
        <div className="nav_container">
            <div className="nav_bar">
                <div className="nav_clicks">
                    <div className="nav_un_clkd">
                        <div id="nav_arrow" className="opened">
                            <a id="button" href="#">
                                <img src="./images/Asset-3.svg" alt="wd"/>
                            </a>
                    </div>
                </div>
            </div>
            <div className="nav_logo">
                <a href="index.html">
                    <img src="./images/Asset-3.svg" alt=""/>
                </a>
            </div>
            <div className="nav_rightside">
                <div className="navWrapperAbout opened">
                    <a href="about.html" id="about">About</a>
                </div>
                <div className="navWrapperContact opened">
                    <a href="contact.html" id="contact">Contact</a>
                </div>
                <div id="nav_holo">
                    <img src="assets/nav_holo.svg" alt=""/>
                </div>
                <div className="nav_clkd">
                    <div className="arrow-container">
                        <div className="clkd_arow">
                            <a id="clkd_button">
                                <img src="assets/clkd_arow.svg" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
                <div className="nav_leftside">
                    <div id="ball" className="nav_dot opened">
                        <img src="assets/nav_dot.svg" alt=""/>
                    </div>
                    <div className="navItems">
                        <div className="navPhoto">
                            <div className="holder">
                                <a href="photography.html" id="photography">Photography</a>
                            <div id="hover"></div>
                            </div>
                        </div>
                        <div className="navVid">
                            <div className="holder">
                                <a id="videography" href="videography.  html">Videography</a>
                                <div id="hover"></div>
                            </div>
                        </div>
                        <div className="navWeb">
                            <div className="holder">
                                <a href="web.html" id="web">Web/UI/UX</a> 
                                <div id="hover"></div>
                            </div>
                        </div>
                        <div className="navDesi">
                            <div className="holder">
                                <a id="design" href="design.html">Design</a>
                                <div id="hover"></div>
                            </div>
                        </div>
                            <div className="navWrit">
                                <div className="holder">
                                    <a id="writing" href="writing.html">Writing</a>
                                <div id="hover"></div>
                            </div>
                        </div>
                        <div className="navArt">
                            <div className="holder">
                                    <a id="art" href="art.html">Art</a>
                                <div id="hover"></div>
                            </div>
                        </div>
                    </div>
                    <div className="nav_holo_long">
                        <img src="assets/long_nav_holo.svg" alt=""/>
                    </div>
                    <div className="default clkd_long">
                        <img src="assets/clkd_long.svg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav