import React, { Component } from 'react';
import './helper.scss';

export default class Helper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: false
        }
    }

    clickHandle() {
        this.setState({ status: !this.state.status });
    }

    render() {
        return (
            <div className="helper-wrapper"> 
                <div className="helper-container">
                    <div className="helper" onClick={() => this.clickHandle()}>
                    { !this.state.status ? <i className="fas fa-arrow-left"></i> : <i className="fas fa-arrow-right"></i> }
                    </div>
                    <div className={ !this.state.status ? "helper-button" : "helper-button is-open"}>
                        <i className="fas fa-sign-in-alt"></i>
                        <i className="fas fa-palette"></i>
                        <i className="fas fa-ruble-sign"></i>
                        <i className="fas fa-balance-scale"></i>
                    </div>
                </div>
            </div>    
        )
    }
}
