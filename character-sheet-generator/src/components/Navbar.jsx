import React, {Component} from 'react';
import { Route, Link } from "react-router-dom";

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
            <div>
                <Link to="/create-new"><button>Create New</button></Link>
                
            </div>
        );
    }
}

export default Navbar;