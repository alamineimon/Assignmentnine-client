import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import RightSide from '../components/RightSide';

const Main = (props) =>{
    return (
      <div>
        <Header />
        <Container>
          <Row>
            <Col lg="9">
              <Outlet />
            </Col>
            <Col lg="3" className="d-none d-lg-block">
              <RightSide />
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default Main;