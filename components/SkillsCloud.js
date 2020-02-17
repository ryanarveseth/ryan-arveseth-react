import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import {Centered} from '../styling/styles';
import {Image} from 'react-bootstrap';

const SkillsCloud = (
    <ScrollAnimation animateIn="fadeInLeft"
                     animateOut="fadeOutLeft">
        <Centered>
            <Image src="images/black-white-skills.png" fluid/>
        </Centered>
    </ScrollAnimation>
);

export default SkillsCloud;