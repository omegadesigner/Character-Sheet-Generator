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
            <div className="options-layout">
                <Link to="/build" className="options-link">
                    <button className="options-button">View Build</button>
                </Link>
                <Link to="/info" className="options-link">
                    <button className="options-button">View Info</button>
                </Link>
                <Link to="/notes" className="options-link">
                    <button className="options-button">View Notes</button>
                </Link>
                <Link to="" className="options-link">
                    <button className="options-button">Save Sheet</button>
                </Link>
            </div>
        );
    }
}

export default Navbar;