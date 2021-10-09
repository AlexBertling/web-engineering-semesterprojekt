import React from 'react';
import PropTypes from "prop-types";

import "./a24.css";

// TODO: A15 nutzen

/**
 * Responsiv mit Grid
 */
 class A24 extends React.Component {
    render() { 
        return <div class="a24">
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Oswald&family=Roboto&display=swap" rel="stylesheet"/>
            <div class="body">
                <div class="header">
                <div class="headerInner">
                    <div><a href="#">The book series</a></div>
                    <div><a href="#">Testimonials</a></div>
                    <div><a href="#">The Author</a></div>
                    <div><a href="#">Free resources</a></div>
                </div>
            </div>
            <div class="content">
                <div>
                    <h1>You dont know JavaScript</h1>
                </div>
                <div class="row">
                    <div class="left">
                        <img src="https://kaul.inf.h-brs.de/wem/assets/img/landing-img.png" />
                    </div>
                    <div class="right">
                        <div>Don't just drift through Javascript.</div>
                        <div>Understand how JavaScript works.</div>
                        <div>Start your journey through the bumpy side of Javascript.</div>
                        <div><a class="orange">Order Your Copy Now</a></div>
                    </div>
                </div>
            </div>
            <div class="footer">
                <div>The first ebook in the book series is absolutely free.</div>
                <div><a class="orange">Find out more about this offer</a></div>
            </div>
            </div>
        </div>;
    }
}
 
export default A24;