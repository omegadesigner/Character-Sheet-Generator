import React, {Component} from 'react';
import { Route, Link } from "react-router-dom";
import Build from "./Build"
import Info from "./Info"
import Notes from "./Notes"
import Skills from "./Skills"

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
                    <h3 className="name">Character Name</h3>
                    <h4 className="race">Race</h4>
                    <h4 className="class">Class</h4>
                    <h4 className="level">Level</h4>
                </div>
                <div id="CharacterStats" className="sheetStatLayout">
                    <div className="str">STR</div>
                    <div className="dex">DEX</div>
                    <div className="mat">MAT</div>
                    <div className="tech">TECH</div>
                    <div className="int">INT</div>
                    <div className="cha">CHA</div>
                    <div className="health">HEALTH</div>
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