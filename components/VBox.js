import React from "react";
import {RED, VertCenter, Contain, BGIMG, BGIMGFLIP} from "../styling/styles";
import {Col, Row} from "react-bootstrap";

const VBox = (props) => 
    (<Contain style={props.red && RED} fluid>
        <Row noGutters="false">
            <Col style={props.bg && BGIMG}>
                <VertCenter>
                    {props.part1}
                </VertCenter>
            </Col>
            {
                props.part2 &&
                <Col style={props.bg && BGIMGFLIP}>
                    <VertCenter>
                        {props.part2}
                    </VertCenter>
                </Col>
            }
            {
                props.part3 && 
                <Col>
                    <VertCenter>
                        {props.part3}
                    </VertCenter>
                </Col>
            }
            {
                props.part4 && 
                <Col>
                    <VertCenter>
                        {props.part4}
                    </VertCenter>
                </Col>
            }
        </Row>
    </Contain>);

export default VBox;