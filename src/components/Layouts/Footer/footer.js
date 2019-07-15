import React, { Component } from 'react'
import './style.scss';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown, Container, Row, Col } from 'react-bootstrap';
import { withCookies } from 'react-cookie';

export default class footer extends Component {
    render() {

        const isAuthenticated = false;

        return (
            <footer>
                <Container>
                    <Row>
                        <Col md={12} xs={12}>
                            <div className="footer-brand">
                                Hyppnotic.store
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <div className="footer-links">
                                <ul>
                                    <li>Главная</li>
                                    <li>Магазин</li>
                                    <li>О нас</li>
                                    <li>Помощь</li>
                                    <li>Поддержка</li>
                                </ul>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <div className="footer-links">
                                <ul>
                                    <li>Группа VK</li>
                                    <li>Instagram</li>
                                    <li>Twitter</li>
                                    <li>Github</li>
                                    <li>Facebook</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className="footer-rights">
                    <Row>
                        <Col xs={12}>
                                <p>All rights are reserved by Hyppnotic company @2018-2019</p>
                        </Col>    
                    </Row>
                </Container>
            </footer>
        )
    }
}
