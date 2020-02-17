import React, {useState} from 'react';
import {Card} from 'react-bootstrap';
import '../App.css';
import styled from 'styled-components';
import { Centered, SingleLineSmall } from '../styling/styles';

const ProjectCard = styled.div`
    height: 375px;
    width: 325px;
    margin: 10px;
    padding: 5px;
    background: rgb(255,255,255);
    border-radius: 10px;
    box-shadow: 0 0 10px red;
    color: black !important;
`;


const ToggleCard = (props) => {
    const [toggled, setToggled] = useState(false);

    return (
        <ProjectCard> 
        {
            !toggled ?
            <Centered>
                <SingleLineSmall>
                    <table className="w100">
                        <tbody>
                        <tr>
                            <td>
                                <Card.Title>{props.item1.title}</Card.Title>
                            </td>
                            { props.item2 &&
                            <td className="right-align">
                                <label className="switch">
                                    <input type="checkbox" checked={toggled} onChange={() => setToggled(!toggled)}/>
                                    <span className="slider round"></span>
                                </label>
                            </td>
                            }
                        </tr>
                        </tbody>
                    </table>
                </SingleLineSmall>
                <a rel="noopener noreferrer" target="_blank" href={props.item1.link}>
                    <Card className="bg-dark text-white Shadow10 w300">
                        <Card.Img src={props.item1.img} height={300} width={300} />
                        <div className="overlay">{props.item1.description}</div>
                    </Card>
                </a>
            </Centered>
            :
            props.item2 &&
            <Centered>
                <SingleLineSmall>
                    <table className="w100">
                        <tbody>
                        <tr>
                            <td>
                                <Card.Title>{props.item2.title}</Card.Title>
                            </td>
                            <td className="right-align">
                                <label className="switch">
                                    <input type="checkbox" checked={toggled} onChange={() => setToggled(!toggled)}/>
                                    <span className="slider round"></span>
                                </label>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </SingleLineSmall>
                <a rel="noopener noreferrer" target="_blank" href={props.item2.link}>
                    <Card className="bg-dark text-white Shadow10 w300">
                        <Card.Img src={props.item2.img} height={300} width={300} />
                        <div className="overlay">{props.item2.description}</div>
                    </Card>
                </a>
            </Centered>
            
        }
        </ProjectCard>
    );
};


export default ToggleCard;