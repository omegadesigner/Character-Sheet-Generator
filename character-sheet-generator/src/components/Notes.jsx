import React, {Component} from 'react';

class Notes extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
        }
    }
    render()
    {
        return (
            <div className="notes-layout">
                <h1>Notes</h1>
                <input type="text" className="notes-input"></input>
            </div>
        );
    }
}

export default Notes;