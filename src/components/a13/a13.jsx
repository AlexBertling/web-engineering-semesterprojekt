import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './a13.css';

class A13 extends React.Component {
    render() { 
        return <div class="a13">
            <div class="body">
                <div class="header">
                    <h1>Dr. Norman Borlaug</h1>
                    <span>The man who saved a billion lives</span>
                </div>
                <div class="content">
                    <img src="https://kaul.inf.h-brs.de/wem/assets/img/tribute-img.png" />
                </div>
            </div>
        </div>;
    }
}
 
export default A13;

A13.propTypes = {

}

A13.defaultProps = {

};