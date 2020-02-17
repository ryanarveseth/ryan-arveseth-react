import React, {useState} from 'react';
import "../App.css";
import {Container, Row, Col} from "react-bootstrap";
import {VertCenter} from "../styling/styles.js";
import ScrollAnimation from 'react-animate-on-scroll';

const ResponsiveGrid = ({one, list}) => (
    <Container>
        <Row>
            <Col>
                <VertCenter>{one}</VertCenter>
            </Col>
        </Row>
        {
            list && list.map((item, ndex) => (
                <Row>
                {
                    item.map((subItem) => 
                        (<Col key={subItem + '2'} >
                            {
                                Math.floor(Math.random() * 2) === 0 ? 
                                (<ScrollAnimation animateIn="flipInX"
                                                    animateOut="flipOutX"
                                                    className={`d${ + Math.floor(Math.random() * 7) } HeaderFont`}>
                                    <VertCenter>
                                        <h3>{subItem}</h3>
                                    </VertCenter>
                                </ScrollAnimation>)
                                :
                                (<ScrollAnimation animateIn="flipInY"
                                                    animateOut="flipOutY"
                                                    className={`d${ + Math.floor(Math.random() * 7) } HeaderFont`}>
                                    <VertCenter>
                                        <h3>{subItem}</h3>
                                    </VertCenter>
                                </ScrollAnimation>)
                            }  
                        </Col>)) 
                }
                </Row>
            ))
        }
    </Container>
);


export default ResponsiveGrid;