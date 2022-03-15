import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

library.add(faTwitter, faDiscord, faEnvelope);

const TeamMember = ({ member: { name, role, image, twitter } }) => {
    return (
        <div className="team-member">
            <div className="gradient-border" id="box">
                <img src={image} alt={image} />
            </div>

            <h3>{name}</h3>
            <h5>{role}</h5>
            <Container className="team-social-icons">
                <Row>
                    <Col xs={12}>
                        <a href={twitter} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} size="xl" /></a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TeamMember;
