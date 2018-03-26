import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="navbar has-shadow">
                <div className="container">
                    <div className="navbar-brand">
                        <a href="/" className="navbar-item">MyCompany</a>

                        <div className="navbar-burger">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className="navbar-menu">
                        <div className="navbar-end ">
                            <a href="/" className="navbar-item r-item">Home</a>
                            <a className="navbar-item r-item">About</a>
                            <a className="navbar-item r-item">Features</a>
                            <a href="/faq" className="navbar-item r-item">FAQ</a>
                            <div className="navbar-item">
                                <p className="control">
                                    <a className="button is-primary is-outlined">
                                        <span className="icon">
                                          <i className="fa fa-download"></i>
                                        </span>
                                        <span>Join Now</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Header;
