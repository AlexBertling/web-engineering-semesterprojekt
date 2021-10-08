import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './a14.css';

class A14 extends React.Component {
    render() { 
        return <div class="a14">
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Oswald&family=Roboto&display=swap" rel="stylesheet"/>
                <div class="body">
                    <div class="header">
                    <h1>Survey Form</h1>
                </div>
                <div class="content">
                    <form>
                        <div class="formRow">Let us know how we can improve freeCodeCamp</div>
                        <div class="formRow">
                            <div class="label">
                                <label for="name">Name: </label>
                            </div>
                            <div class="input">
                                <input id="name" type="text" placeholder="Enter your name"/>
                            </div>
                        </div>
                        <div class="formRow">
                            <div class="label">
                                <label for="email">Email: </label>
                            </div>
                            <div class="input">
                                <input id="email" type="email" placeholder="Enter your Email"/>
                            </div>
                        </div>
                        <div class="formRow">
                            <div class="label">
                                <label for="age">Age: </label>
                            </div>
                            <div class="input">
                                <input id="age" min="1" type="number" placeholder="Age"/>
                            </div>
                        </div>
                        <div class="formRow">
                            <div class="label">
                                <label for="role">Which option best describes your current role? </label>
                            </div>
                            <div class="input">
                                <select id="role">
                                    <option>Student</option>
                                </select>
                            </div>
                        </div>
                        <div class="formRow">
                            <div class="label">
                                <label for="recommend">How likely is that you would recommend freeCodeCamp to a friend? </label>
                            </div>
                            <div class="input">
                                <input id="recommend1" type="radio" name="recommend" value="Definitely" />
                                <label for="recommend1">Definitely</label><br/>
                                <input id="recommend2" type="radio" name="recommend" value="Maybe" />
                                <label for="recommend2">Maybe</label><br/>
                                <input id="recommend3" type="radio" name="recommend" value="Not sure" />
                                <label for="recommend3">Not sure</label>
                            </div>
                        </div>
                        <div class="formRow">
                            <div class="label">
                                <label for="mostlike">Which option best describes your current role? </label>
                            </div>
                            <div class="input">
                                <select id="mostlike">
                                    <option>Select an option</option>
                                </select>
                            </div>
                        </div>
                        <div class="formRow">
                            <div class="label">
                                <label for="improve">Things that should be improved in the future <br/>(Check all that apply): </label>
                            </div>
                            <div class="input">
                                <input id="improve1" type="checkbox" name="improve" value="Front-end Projects" />
                                <label for="improve1">Front-end Projects</label><br/>
                                <input id="improve2" type="checkbox" name="improve" value="Back-end Projects" />
                                <label for="improve2">Back-end Projects</label><br/>
                                <input id="improve3" type="checkbox" name="improve" value="Data Visualisation" />
                                <label for="improve3">Data Visualisation</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>;
    }
}
 
export default A14;

A14.propTypes = {

}

A14.defaultProps = {

};