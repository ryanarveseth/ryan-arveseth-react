import React from 'react';
import {Image, Button} from "react-bootstrap";
import VBox from "../../components/VBox.js";
import HBox from "../../components/HBox.js";
import {Breakpoint} from 'react-socks';
import {Img, Centered, Pad16} from "../../styling/styles";
import ResponsiveGrid from "../../components/ResponsiveGrid.js";
import ContactMe from "../../components/ContactMe.js";
import ScrollAnimation from 'react-animate-on-scroll';
import Footer from '../../components/Footer';
import SkillsCloud from '../../components/SkillsCloud';
import "../../animate.css";
import "../../App.css";

const handleScrollToBot = () => {
    window.scrollBy({
        top: 2700,
        left: 0,
        behavior: 'smooth'
      });
};

// Component 1, part 1
const B1P1 = (
    <h1 className="HeaderFont">
        <Centered>
            <ScrollAnimation animateIn="zoomIn"
                    animateOut="zoomOut">
                <Pad16>
                    Ryan Arveseth
                </Pad16>
            </ScrollAnimation>
        </Centered>
        <Centered>
            <ScrollAnimation animateIn="zoomIn"
                    animateOut="zoomOut">
                <Img src="images/RyanArveseth.png" 
                    width="225" 
                    height="225" 
                    roundedCircle/>
            </ScrollAnimation>
        </Centered>
        <Centered>
            <Pad16>
                <ScrollAnimation animateIn="zoomIn"
                        animateOut="zoomOut">
                    <div>
                        Full Stack Developer
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="zoomIn"
                    animateOut="zoomOut">
                    <Button variant="outline-light" onClick={handleScrollToBot}>
                        Contact Me!
                    </Button>
                </ScrollAnimation>
            </Pad16>
        </Centered>
    </h1>
);


const MySkills = [
    ['Java','Spring Boot'],
    ['Python','React','HTML5', 'jQuery'],
    ['AngularJS', 'XML', 'AJAX'],
    [`JavaScript`,'PHP','CSS3', 'Sharepoint'],
    ['SQL','mySQL'],
    ['VBScript', 'Smartsheet' ,'APIs'],
    ['Jira','Git', 'Bitbucket', ''],
    ['Android', 'VBA']
];

const MyExperience = [
    ['I\'m a highly motivated Software/Web Developer working to start my career.',
     'Major sports junkie! I love football, basketball, and yes, I love ping-pong.'
    ],
    ['I am successful with finding, designing, and implementing innovative solutions that slash costs.',
     'There\'s no quit in me! I do not give up, I only try harder.' 
    ],
    ['I\'m a problem solver! If I don\'t know the solution, I do my research and find the answer.',
     'I am and always will be driven to improve myself to succeed!'
    ]
];

const SkillsList = (
        <ResponsiveGrid one={(
                        <h1 className="HeaderFont grow">Skills</h1>
                        )}
                        list={MySkills}/>
);

const AboutMe = (
        <ResponsiveGrid one={(
                            <h1 className="HeaderFont grow">About Me</h1>
                        )}
                        list={MyExperience}/>
);

const CodeImg = (<Centered><Image src="images/red-general-stuff.png" fluid/></Centered>);

const ComputerImg = (
    <ScrollAnimation animateIn="fadeInLeft"
                     animateOut="fadeOutLeft">
        <Centered>
            <Image src="images/general-computer.png" fluid/>
        </Centered>
    </ScrollAnimation>);

const ContactMeView = (<ContactMe/>);

const Home = () => (
    <div>
        <Breakpoint small down>
            <HBox red part1={B1P1} part2={ComputerImg}/>
            <HBox part1={SkillsList} part2={CodeImg} part3={AboutMe}/>
            <VBox red part2={SkillsCloud}/>
            <HBox part1={ContactMeView} part2={Footer}/>
        </Breakpoint>
        <Breakpoint medium up>
            <VBox red part1={B1P1} part2={SkillsList}/>
            <VBox part1={ComputerImg} part2={AboutMe}/>
            <VBox red part2={SkillsCloud}/>
            <VBox part1={ContactMeView} part2={Footer}/>
        </Breakpoint>
    </div>
);

export default Home;