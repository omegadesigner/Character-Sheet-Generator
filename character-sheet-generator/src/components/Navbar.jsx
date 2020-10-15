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
            <div className="navbarLayout">
                <Link to="/create-new" className="navLink">
                    <button className="navButton">Create New</button>
                </Link>
                {this.props.sampleSheets.map((sampleSheet, index) => 
                    <Link key={index} to={`/${sampleSheet.fields.class}`} className="navLink">
                        <button className="navButton">{sampleSheet.fields.class}</button>
                    </Link>
                )}
            </div>
        );
    }
}

export default Navbar;