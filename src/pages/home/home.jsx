import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../../component/sidebar/sidebar";
import './home.css';
import Cardsproduct from "../../component/cardProduct/cardProduct";

const Home = () => {
    return(
        <div>
            <Container fluid>
                <Row style={{textAlign: 'left'}}>
                    <Col sm={2} style={{textAlign: 'center'}}>
                        <Sidebar/>
                    </Col>
                    <Col sm={10}>
                        <br />
                        <Row>
                            <Col><Cardsproduct/></Col>
                        </Row>
                        <br />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home;