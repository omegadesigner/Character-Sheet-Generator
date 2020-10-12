import React, {Component} from 'react';
import { Route, Link } from "react-router-dom";

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
            <div>
                <Link to="/create-new"><button>Create New</button></Link>
                {this.props.sampleSheets.map((sampleSheet) => 
                    <Link to={`/${sampleSheet.fields.class}`}><button>{sampleSheet.fields.class}</button></Link>
                )}
            </div>
        );
    }
}

export default Navbar;