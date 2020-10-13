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
            <div>
                <Link to="/build"><button>View Build</button></Link>
                <Link to="/info"><button>View Info</button></Link>
                <Link to="/notes"><button>View Notes</button></Link>
                <Link to=""><button>Save Sheet</button></Link>
            </div>
        );
    }
}

export default Navbar;