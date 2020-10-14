import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
    constructor()
    {
        super();
        this.state = {
        }
    }
    render()
    {
        return (
            <div className="optionsLayout">
                <Link to="/build" className="optionsLink">
                    <button className="optionsButton">View Build</button>
                </Link>
                <Link to="/info" className="optionsLink">
                    <button className="optionsButton">View Info</button>
                </Link>
                <Link to="/notes" className="optionsLink">
                    <button className="optionsButton">View Notes</button>
                </Link>
                <Link to="" className="optionsLink">
                    <button className="optionsButton">Save Sheet</button>
                </Link>
            </div>
        );
    }
}

export default Navbar;