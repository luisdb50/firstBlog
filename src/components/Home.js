import React from "react"
import { Col, Container, Row } from "react-bootstrap";
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

import "../css/home.css"

import img from "../img/sample.jpg"

export function Home() {
    return(
        <div className="principal">
            <Header />
            <Container fluid className="body">
                <Row className="content_body">
                    
                    <Col className="aside izq back">
                        <div className="div_aside">
                            <p className="text_center">Heading level 2</p>
                            <p className="text_p">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                ...
                            </p>
                            <p className="text_center n">Heading level 3</p>
                            <p className="text_p">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                                do eiusmod tempor incididunt ut labore et dolore magna aliqu...
                            </p>
                        </div>
                    </Col>

                    <Col md={7} className="r">
                        <Row className="div_section1 back">
                            <img className="title_img t" alt="heading" src={img} />
                        </Row>

                        <Row className="div_section2">
                            <Col md={9}>
                                <Row className="content_items">
                                    <Col className="section_item back">
                                        <img className="title_img" alt="heading" src={img} />
                                    </Col>
                                    <Col className="section_item back">
                                        <img className="title_img" alt="heading" src={img} />
                                    </Col>
                                </Row>

                                <Row className="content_items">
                                    <Col className="section_item back">
                                        <img className="title_img" alt="heading" src={img} />
                                    </Col>
                                    <Col className="section_item back">
                                        <img className="title_img" alt="heading" src={img} />
                                    </Col>
                                </Row>
                            </Col>
                            
                            <Col className="section_item s back">
                                <img className="title_img" alt="heading" src={img} />
                            </Col>
                        </Row>
                    </Col>

                    <Col className="aside der back">
                        <div className="div_aside">
                            <p className="text_center">Heading level 2</p>
                            <img className="aside_img" alt="heading" src={img} />
                            <p className="text_p m">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation...
                            </p>
                            <p className="text_center n">Heading level 3</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
}