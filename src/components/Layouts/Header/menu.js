import React, { Component } from 'react';
import './menu.scss';

export default class menu extends Component {

    render() {
        return (
            <div className={ this.props.show ? "mobile-menu-container show" : "mobile-menu-container"}> 
                <div className="mobile-menu">
                    <div className="mobile-menu-brand">Hyppnotic</div>
                    <div className="mobile-menu-button" onClick={() => this.props.setShow()}><i className="fas fa-times"></i></div>
                    <div className="mobile-menu-links">Links</div>
                </div>
            </div>
        )
    }
}
