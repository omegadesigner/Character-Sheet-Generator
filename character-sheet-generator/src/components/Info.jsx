import React, {Component} from 'react';

class Info extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
        }
    }
    render()
    {
        return (
            <div className="info-layout">
                <h1>Info</h1>
                <input type="text" className="info-input"></input>
            </div>
        );
    }
}

export default Info;