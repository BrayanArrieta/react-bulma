import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <section className="hero pd">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">Soaring to new heights</h1>
                            <div className="is-two-thirds column is-paddingless">
                                <h2 className="subtitle is-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                            </div>
                            <a className="button is-large is-primary">Learn more</a>
                        </div>
                    </div>
                </section>


                <section className="section pd">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-1 has-text-centered">
                                <i className="fa fa-cog fa-spin is-primary"></i>
                            </div>
                            <div className="column is-one-third">
                                <p className="title"><strong>We provide superior logistics so that your business can succeed in a crazy world.</strong></p>
                            </div>
                            <div className="column">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </div>
                        </div>

                        <div className="columns pd">
                            <div className="column">
                                <div className="card">
                                    <div className="card-content">
                                        <p className="title">“There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”</p>
                                        <p className="subtitle">Jeff Atwood</p>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="card">
                                    <div className="card-content">
                                        <p className="title">“There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”</p>
                                        <p className="subtitle">Jeff Atwood</p>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="card">
                                    <div className="card-content">
                                        <p className="title">“There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”</p>
                                        <p className="subtitle">Jeff Atwood</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

export default Home;
