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
                    <h3 className="name">Character Name</h3>
                    <h4 className="race">Race</h4>
                    <h4 className="class">Class</h4>
                    <h4 className="level">Level</h4>
                </div>
                <div id="CharacterStats" className="sheetStatLayout">
                    <h4 className="str">STR</h4>
                    <h4 className="dex">DEX</h4>
                    <h4 className="mat">MAT</h4>
                    <h4 className="tech">TECH</h4>
                    <h4 className="int">INT</h4>
                    <h4 className="cha">CHA</h4>
                    <h4 className="health">HEALTH</h4>
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