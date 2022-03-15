import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import PlaceholderImage from '../images/background2.gif';

const Events = () => {
  return (
    <div className="module-content">
      <div id="events-content">
        <h1>Events</h1>
        <Container>
          <Row>
            <Col xs={4}>
              <div class="card">
                <img class="card-img-top" src={PlaceholderImage} alt={PlaceholderImage} />
                <div class="card-body">
                  <h5 class="card-title">Event #1</h5>
                  <h6 class="card-text">01/01/2022</h6>
                  <p class="card-text">Description about the event.</p>
                  <a href="#" class="btn">Go somewhere</a>
                </div>
              </div>
            </Col>
            <Col xs={4}>
              <div class="card">
                <img class="card-img-top" src={PlaceholderImage} alt={PlaceholderImage} />
                <div class="card-body">
                  <h5 class="card-title">Event #2</h5>
                  <h6 class="card-text">01/01/2022 - 12/12/2022</h6>
                  <p class="card-text">Description about the event.</p>
                  <a href="#" class="btn">Go somewhere</a>
                </div>
              </div>
            </Col>
            <Col xs={4}>
              <div class="card">
                <img class="card-img-top" src={PlaceholderImage} alt={PlaceholderImage} />
                <div class="card-body">
                  <h5 class="card-title">Event #3</h5>
                  <h6 class="card-text">01/01/2023</h6>
                  <p class="card-text">Description about the event.</p>
                  <a href="#" class="btn">Go somewhere</a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

      </div>
    </div>
  )
}

export default Events