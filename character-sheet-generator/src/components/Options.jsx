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
                <Link to="/build"><button>Build</button></Link>
                <Link to="/info"><button>Info</button></Link>
                <Link to="/notes"><button>Notes</button></Link>
            </div>
        );
    }
}

export default Navbar;