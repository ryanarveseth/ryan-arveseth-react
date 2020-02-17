import styled from "styled-components";
import {Row, 
        Image,
        Container} from "react-bootstrap";
import {fadeInLeftBig} from "react-animations";
import Radium from 'radium';

const Logos = styled(Image)`
    filter: brightness(0) invert(1);
    max-height: 25px;
`;

const Darkness = styled.div`
    background-color: black;
    margin: 0 10px 25px;
    color: white;
    border-top: 1px solid lightgrey;
`;

const Darkness50 = styled.div`
    background-color: black;
    margin: 0 50px 50px;
    color: white;
    border-top: 1px solid lightgrey;
`;

const StyledLogo = styled.img`
    height: 100px; 
    width: 100px;
    text-align: left;
`;

const StyledLogo300 = styled(Image)`
    height: 300px;
    width: 300px;
`;

const Centered = styled.div`
    text-align: center;
    display: block;
`;

const Pad16 = styled.div`
    padding: 16px;
`;

const Mg16 = styled.div`
    margin: 16px;
`;

const SHeader = styled.h1 `
    font-size: 1.5rem;
`;

const SingleLine = styled.div `
    display: flex;
    height: 100px; 
    line-height: 100px;
    margin: 5px 10px 5px; 
    color: white;
`;

const SingleLineSmall = styled.div `
    display: flex;
    height: 50px; 
    line-height: 50px;
    margin: 5px 5px 5px; 
    color: white;
`;

const SingleLine50 = styled.div `
    display: flex;
    height: 100px; 
    line-height: 100px;
    margin: 5px 50px 5px; 
    color: white;
`;

const VertCenter = styled.div `
    display: flex;
    height: 100%; 
    align-items: center;
    justify-content: center;
`;

const Row250 = styled(Row)`
    min-height: 250px;
`;

const Img = styled(Image)`
    object-fit: cover;
`;

const FadeInLeft = {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeInLeftBig, 'fadeInLeftBig')
};

const RED = {
    background: "rgb(151,0,0)"
};

const BGIMG = {
    backgroundImage: "url('images/red-black-bg.jpg')",
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: '100% auto'
};

const BGIMGFLIP = {
    backgroundImage: "url('images/red-black-bg-flip.jpg')",
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: '100% auto'
};

const LineH100 = styled.h2`
    line-height: 100px;
`;


const Contain = styled(Container)`
    padding: 0;
    margin-top: 60px;
    margin-bottom: 60px;
`;



export {Darkness, StyledLogo, StyledLogo300, SingleLine, Centered, RED, VertCenter, LineH100, Row250, Img, 
        Darkness50, SingleLine50, Contain, Mg16, Pad16, BGIMG, BGIMGFLIP, Logos, FadeInLeft, SingleLineSmall,
        SHeader};