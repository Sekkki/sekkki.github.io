import React, { Component } from 'react'
import Header from './Header/header';
import Footer from './Footer/footer';

export default class index extends Component {
    render() {
        return (
            <div className="root">
                <Header />
                <div className="container-height">
                {this.props.children}
                </div>
                <Footer />
            </div>
        )
    }
}
