import React from 'react';
import HBox from '../../components/HBox';
import VBox from '../../components/VBox';
import {Breakpoint} from 'react-socks';
import {Pad16, SHeader} from "../../styling/styles";
import "../../App.css";
import ContactMe from "../../components/ContactMe.js";
import ScrollAnimation from 'react-animate-on-scroll';
import "../../animate.css";
import Footer from '../../components/Footer';
import SkillsCloud from '../../components/SkillsCloud';
import ToggleCard from '../../components/ToggleCard';

const ContactMeView = (<ContactMe projects/>);

const proj1 = [
    {
        img: '../images/bounce-game.png',
        title: (<div>Simple Game<br/>(HTML, CSS, JavaScript)</div>),
        link: 'https://ryanarveseth.github.io/Application/game.html',
        description: (<div>The purpose of this game (well, kind of a game) is to try to create as many circle collisions as you can.
                     I'll let you figure out the rest!
                     <br/>
                     Use the gear icon to modify game settings.</div>)
    },
    {
        img: '../images/bounce-game-code.png',
        title: 'See the Code!',
        link: 'https://github.com/ryanarveseth/ryanarveseth.github.io/tree/master/Application',
        description: (<div>
                            This game was originally created for school, to pass off various JS skills. The class was Mobile Application Development
                      </div>)
    }
];

const proj2 = [
    {
        img: '../images/smartsheet.png',
        title: (<div>Add Rows, Attachments to Smartsheet (Python)</div>),
        link: 'https://github.com/ryanarveseth/Smartsheet-Python-API',
        description: (<div>
                           I created this script to append rows and add attachments at the same time in Smartsheet. 
                           This capability didn't already exist. It creates a row, waits for the new row ID, then adds the attachment.
                      </div>)
    }
];

const proj3 = [
    {
        img: '../RA_logo.png',
        title: (<div>ryan-arveseth.com (this site!)</div>),
        link: 'http://ryan-arveseth.com',
        description: (<div>
                           Yes, this site was created 100% from scratch using React, and various NPM installations.
                           No site-builders were used for the development of this site!
                      </div>)
    }
];

const proj4 = [
    {
        img: '../../images/red-general-stuff.png',
        title: (<div>More Projects Coming Soon!</div>),
        link: 'http://ryan-arveseth.com',
        description: (<div>
                           Check again soon for more of my projects!
                      </div>)
    }
];



const project1 = (
    <ScrollAnimation animateIn="show" animateOut="hinge"><ToggleCard item1={proj1[0]} item2={proj1[1]}/></ScrollAnimation>
);

const project2 = (
    <ScrollAnimation animateIn="show" animateOut="hinge"><ToggleCard item1={proj2[0]}/></ScrollAnimation>
);

const project3 = (
    <ScrollAnimation animateIn="show" animateOut="hinge"><ToggleCard item1={proj3[0]}/></ScrollAnimation>
);

const project4 = (
    <ScrollAnimation animateIn="show" animateOut="hinge"><ToggleCard item1={proj4[0]}/></ScrollAnimation>
);


const Projects = () => (
    <>
        <Breakpoint small down>
            <VBox red part1={(<ScrollAnimation animateIn="fadeInLeft">
                                <Pad16><SHeader>Projects + Code</SHeader></Pad16>
                              </ScrollAnimation>)}/>
            <HBox part1={project1} part2={project3} part3={project4}/>
            <VBox red part1={(<ScrollAnimation animateIn="fadeInLeft">
                                <Pad16><SHeader>Code Only</SHeader></Pad16>
                              </ScrollAnimation>)}/>
            <HBox part1={project2} part2={project4}/>
            <VBox red part2={SkillsCloud}/>
            <HBox part1={ContactMeView} part2={Footer}/>
        </Breakpoint>

        <Breakpoint medium up>
            <VBox red part1={(<ScrollAnimation animateIn="fadeInLeft">
                                <Pad16><h1>Projects + Code</h1></Pad16>
                              </ScrollAnimation>)}/>
            <VBox part1={project1} part2={project3} part3={project4}/>
            <VBox red part1={(<ScrollAnimation animateIn="fadeInLeft">
                                <Pad16><h1>Projects Code Only</h1></Pad16>
                              </ScrollAnimation>)}/>
            <VBox part1={project2} part2={project4}/>

            <VBox red part2={SkillsCloud}/>
            <VBox part1={ContactMeView} part2={Footer}/>
        </Breakpoint>
    </>
);

export default Projects;