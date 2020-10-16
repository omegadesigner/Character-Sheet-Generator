import React, {Component} from 'react';

class Programs extends Component {
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
                {this.props.programs.map((program, index) =>
                <select 
                    key={index} 
                    className="programs-list"
                    defaultValue="default">
                    <option value="default"></option>
                    {this.props.programs.map((program) =>
                    <option key={program.id}>{program.fields.programName}</option>
                    )}
                </select>
                )}
            </div>
        );
    }
}

export default Programs;