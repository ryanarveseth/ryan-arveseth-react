import React from "react";
import {RED, Row250, VertCenter, Contain} from "../styling/styles";
import {Col} from "react-bootstrap";


const HBox = (props) => 
    (<Contain style={props.red && RED} fluid>
        <Row250 className="" noGutters="true">
            <Col>
                <VertCenter>
                    {props.part1}
                </VertCenter>
            </Col>
        </Row250>
        <Row250 className="" noGutters="true" >
            <Col>
                <VertCenter>
                    {props.part2}
                </VertCenter>
            </Col>
        </Row250>
        {
            props.part3 && (
                <Row250 className="" noGutters="true">
                    <Col>
                        <VertCenter>
                            {props.part3}
                        </VertCenter>
                    </Col>
                </Row250>)
        }
        {
            props.part4 && (
                <Row250 className="" noGutters="true">
                    <Col>
                        <VertCenter>
                            {props.part4}
                        </VertCenter>
                    </Col>
                </Row250>)
        }
    </Contain>);

export default HBox;