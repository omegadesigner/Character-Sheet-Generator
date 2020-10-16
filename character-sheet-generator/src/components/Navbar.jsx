import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
        }
    }
    render()
    {
        return (
            <div className="navbar-layout">
                <Link to="/create-new" className="nav-link">
                    <button className="nav-button">New Sheet</button>
                </Link>
                {this.props.sampleSheets.map((sampleSheet, index) => 
                    <Link key={index} to={`/${sampleSheet.fields.class}`} className="nav-link">
                        <button className="nav-button">{sampleSheet.fields.class}</button>
                    </Link>
                )}
            </div>
        );
    }
}

export default Navbar;