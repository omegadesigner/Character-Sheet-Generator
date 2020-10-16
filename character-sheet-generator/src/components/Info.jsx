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
                <div>
                    <h2>BackGround</h2>
                    <input type="text" className="info-input"></input>
                </div>
                <div>
                    <h2>Class/Race Bonus</h2>
                    <input type="text" className="info-input"></input>
                </div>
                <div>
                    <h2>Special Equipment</h2>
                    <input type="text" className="info-input"></input>
                </div>
                <div>
                    <h2>Languages</h2>
                    <input type="text" className="info-input"></input>
                </div>
                <div>
                    <h2>Feats/Skill Bonus</h2>
                    <input type="text" className="info-input"></input>
                </div>
            </div>
        );
    }
}

export default Info;