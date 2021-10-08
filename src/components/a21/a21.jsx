import React from 'react';
import PropTypes from 'prop-types';

import "./a21.css";

/**
 * Responsiv mit Flexbox Desktop-First
 */
class A21 extends React.Component {
    render() { 
        return <div class="a21">
            <div class="body">
                <div class="red"></div>
                <div class="green"></div>
                <div class="blue"></div>
                <div class="pink"></div>
            </div>
        </div>;
    }
}
 
export default A21;