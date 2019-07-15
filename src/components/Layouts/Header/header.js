import React, { Component } from 'react'
import './style.scss';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { withCookies } from 'react-cookie';
import Helper from './helper';
import Menu from './menu';
import ScrollReveal from 'scrollreveal';

class header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    componentDidMount() {
        if(this.state.show === true) {
            ScrollReveal().reveal('.show', { opacity: 0.8 });
            ScrollReveal().sync();
        }
    }

    show() {
        this.setState({ show: !this.state.show });
    }

    setShow() {
        this.setState({ show: false });
    }

    render() {

        const isAuthenticated = false;

        return (
            <header className="header">
                <div className="brand">
                    <p>Hyppnotic<span>store.</span></p>
                </div>
                <div className="menu">
                    <ul>
                        <li>Каталог</li>
                        <li>О нас</li>
                        <li>Помощь</li>
                        <li>Поддержка</li>
                    </ul>
                </div>
                <Helper />
                <Menu show={this.state.show} setShow={this.setShow.bind(this)} />
                <div className="button-xs" onClick={() => this.show()}><i className="fas fa-bars"></i></div>
            </header>
        )
    }
}

export default withCookies(header)
