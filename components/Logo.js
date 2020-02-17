import React from "react";
import {SingleLine, StyledLogo, Centered, LineH100, SingleLine50, Logos} from "../styling/styles.js"
import "../App.css";
import {Breakpoint} from 'react-socks';
import ScrollAnimation from 'react-animate-on-scroll';
import "../animate.css";

const Logo = () => (
    <div>
        <Breakpoint small down>
            <Centered>

                    <span>
                        <a rel="noopener noreferrer" target="_blank" href="https://github.com/ryanarveseth">
                            <Logos src="./images/GitHub_Logo_White.png"/>
                        </a>
                    </span>
                
                &nbsp;
                <a href="/"><StyledLogo className="main-logo" src="RA_logo.png"/></a>
                &nbsp;
                &nbsp;
                <span>
                    <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/ryan-arveseth/">
                        <Logos src="./images/linkedin_logo.png"/>
                    </a>
                </span>
            </Centered>
        </Breakpoint>
        <Breakpoint medium>
            <SingleLine>
                <LineH100 className="HeaderFont">
                    <a href="/"><StyledLogo className="main-logo" src="RA_logo.png"/></a>
                    &nbsp;&nbsp;&nbsp;Ryan Arveseth
                </LineH100>    
            </SingleLine>
        </Breakpoint>
        <Breakpoint large up>
            <SingleLine50>
                <LineH100 className="HeaderFont">
                    <a href="/"><StyledLogo  className="main-logo" src="RA_logo.png"/></a>
                    &nbsp;&nbsp;&nbsp;Ryan Arveseth
                </LineH100>
                &nbsp;
                <span>
                    <a rel="noopener noreferrer" target="_blank" href="https://github.com/ryanarveseth">
                        <Logos src="./images/GitHub_Logo_White.png"/>
                    </a>
                </span>
                &nbsp;
                <span>
                    <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/ryan-arveseth/">
                        <Logos src="./images/linkedin_logo.png"/>
                    </a>
                </span>
            </SingleLine50>
        </Breakpoint>
    </div>
);

export default Logo;