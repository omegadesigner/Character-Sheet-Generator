import React, {Component} from 'react';
import { Route } from "react-router-dom";
import Build from "./Build"
import Info from "./Info"
import Notes from "./Notes"
// import Skills from "./Skills"

class Sheet extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
        }
    }

    render()
    {
        return (
            <div className="sheetLayout">
                <div id="CharacterHeader" className="sheetHeaderLayout">
                    <div className="name">
                        <h3>Character Name</h3>
                        <input className="headerInput"/>
                    </div>
                    <div className="race">
                        <h4>Race</h4>
                        <input className="headerInput"/>
                    </div>
                    <div className="class">
                        <h4>Class</h4>
                        <input className="headerInput"/>
                    </div>
                    <div className="level">
                        <h4>Level</h4>
                        <input className="headerInput"/>
                    </div>
                </div>
                <div id="CharacterStats" className="sheetStatLayout">
                    <div className="str">
                        <h4>STR</h4>
                        <input className="statsInput"/>
                    </div>
                    <div className="dex">
                        <h4>DEX</h4>
                        <input className="statsInput"/>
                    </div>
                    <div className="mat">
                        <h4>MAT</h4>
                        <input className="statsInput"/>
                    </div>
                    <div className="tech">
                        <h4>TECH</h4>
                        <input className="statsInput"/>
                    </div>
                    <div className="int">
                        <h4>INT</h4>
                        <input className="statsInput"/>
                    </div>
                    <div className="cha">
                        <h4>CHA</h4>
                        <input className="statsInput"/>
                    </div>
                    <div className="health">
                        <h4>HEALTH</h4>
                        <input className="statsInput"/>
                    </div>
                </div>
                <div id="CharacterOptions">
                    <Route path="/build">
                        <Build />
                    </Route>
                    <Route path="/info">
                        <Info />
                    </Route>
                    <Route path="/notes">
                        <Notes />
                    </Route>
                </div>
            </div>
        );
    }
}

export default Sheet;