import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TeamMember from './TeamMember';
import DannyJImage from '../images/dannyj-profile.png';
import LongedImage from '../images/longed-profile.jpg';
import OasisImage from '../images/oasis-profile.jpg';
import MeowImage from '../images/meow-profile.jpg';
import TulfixImage from '../images/tulfix-profile.jpg';
import ArrellrImage from '../images/arrellr-profile.jpg';

const Team = () => {

    const DannyJ = {
        name: "DannyJ",
        role: "Developer",
        image: DannyJImage,
        twitter: "https://twitter.com/DanjonesETH"
    }
    const Meow = {
        name: "Meow",
        role: "Project Manager",
        image: MeowImage,
        twitter: "https://twitter.com/MeowETH_373"
    }
    const NFTOasis = {
        name: "NFTOasis",
        role: "Founder / Developer",
        image: OasisImage,
        twitter: "https://twitter.com/NFT_Oasis373"
    }
    const Longed = {
        name: "Longed",
        role: "Founder",
        image: LongedImage,
        twitter: "https://twitter.com/LongedEth373"
    }
    const Tulfix = {
        name: "TULFIX",
        role: "Artist",
        image: TulfixImage,
        twitter: "https://twitter.com/ToniPlanells3"
    }
    const Arrellr = {
        name: "Arrellr",
        role: "Community Engagement",
        image: ArrellrImage,
        twitter: "https://twitter.com/arrellr"
    }




    return (
        <div className="module-content">
            <Container fluid id="team-content">
                <Row>
                    <Col>
                        <h1>T<span id="team-e-flicker">e</span>am</h1>
                    </Col>
                </Row>
                <Row className="team-row" id="team-row-1">
                    <Col xs={4}>
                        <TeamMember member={Longed} />
                    </Col>
                    <Col xs={4}>
                        <TeamMember member={NFTOasis} />
                    </Col>
                    <Col xs={4}>
                        <TeamMember member={Meow} />
                    </Col>
                </Row>
                <Row className="team-row" id="team-row-2">
                    <Col xs={4}>
                        <TeamMember member={Tulfix} />
                    </Col>
                    <Col xs={4}>
                        <TeamMember member={Arrellr} />
                    </Col>
                    <Col xs={4}>
                        <TeamMember member={DannyJ} />
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Team;
