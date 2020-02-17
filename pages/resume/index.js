import React from 'react';
import HBox from '../../components/HBox';
import VBox from '../../components/VBox';
import {Breakpoint} from 'react-socks';
import {Image, Button} from "react-bootstrap";
import {Img, Centered, Pad16, StyledLogo300} from "../../styling/styles";
import "../../App.css";
import ResponsiveGrid from "../../components/ResponsiveGrid.js";
import ContactMe from "../../components/ContactMe.js";
import ScrollAnimation from 'react-animate-on-scroll';
import "../../animate.css";
import Footer from '../../components/Footer';
import SkillsCloud from '../../components/SkillsCloud';



const ContactMeView = (<ContactMe resume/>);

const Resume = () => (
    <>
        <Breakpoint small down>
            <VBox red part2={SkillsCloud}/>
            <HBox part1={ContactMeView} part2={Footer}/>
        </Breakpoint>

        <Breakpoint medium up>

            <VBox red part2={SkillsCloud}/>
            <VBox part1={ContactMeView} part2={Footer}/>
        </Breakpoint>
    </>
);

export default Resume;