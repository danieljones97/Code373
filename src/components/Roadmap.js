import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NeonLine from '../images/neon/vertical-neon-line.png';
import Cherries from '../images/neon/cherries.png';

const Roadmap = () => {
    return (
        <div className="module-content">
            <div id="roadmap-content">
                <h1>Road<span id="roadmap-m-flicker">m</span>ap</h1>
                <Container>
                    <Row>
                        <Col xs="5" className="milestone-section">
                            <div>
                                <h3>Milestone 1</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed condimentum neque.
                                    Mauris tempus orci id nisi commodo, ac dapibus massa interdum. Sed tincidunt mauris
                                    tristique interdum tincidunt. </p>
                            </div>
                        </Col>
                        <Col xs="2" className="d-flex"><img className="roadmap-neon-line" src={NeonLine} alt={NeonLine} /></Col>
                        <Col xs="5" className="d-flex"><img id="roadmap-cherries" src={Cherries} alt={Cherries} /></Col>
                    </Row>

                    <Row>
                        <Col xs="5" className="d-flex"><img id="roadmap-cherries" src={Cherries} alt={Cherries} /></Col>
                        <Col xs="2" className="d-flex"><img className="roadmap-neon-line" src={NeonLine} alt={NeonLine} /></Col>
                        <Col xs="5" className="milestone-section">
                            <div>
                                <h3>Milestone 2</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed condimentum neque.
                                    Mauris tempus orci id nisi commodo, ac dapibus massa interdum. Sed tincidunt mauris
                                    tristique interdum tincidunt. </p>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs="5" className="milestone-section">
                            <div>
                                <h3>Milestone 3</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed condimentum neque.
                                    Mauris tempus orci id nisi commodo, ac dapibus massa interdum. Sed tincidunt mauris
                                    tristique interdum tincidunt. </p>
                            </div>
                        </Col>
                        <Col xs="2" className="d-flex"><img className="roadmap-neon-line" src={NeonLine} alt={NeonLine} /></Col>
                        <Col xs="5" className="d-flex"><img id="roadmap-cherries" src={Cherries} alt={Cherries} /></Col>
                    </Row>

                    <Row>
                        <Col xs="5" className="d-flex"><img id="roadmap-cherries" src={Cherries} alt={Cherries} /></Col>
                        <Col xs="2" className="d-flex"><img className="roadmap-neon-line" src={NeonLine} alt={NeonLine} /></Col>
                        <Col xs="5" className="milestone-section">
                            <div>
                                <h3>Milestone 4</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed condimentum neque.
                                    Mauris tempus orci id nisi commodo, ac dapibus massa interdum. Sed tincidunt mauris
                                    tristique interdum tincidunt. </p>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>
        </div>
    );
};

export default Roadmap;
