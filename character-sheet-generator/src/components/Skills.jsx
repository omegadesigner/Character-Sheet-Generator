import React, {Component} from 'react';

class Skills extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            skillList: 
            {
                Acrobatics: "dex", 
                Athletics: "str", 
                Deception: "cha", 
                Hacking: "tech", 
                Intimidation: "cha",
                Scanning: "tech",
                Mechanic: "tech",
                Medic: "int",
                Repairs: "tech",
                Resistence: "mat",
                Perception: "int",
                Persuasion: "cha",
                SleightOfHand: "dex",
                Stealth: "dex"
            }
        }
    }
    render()
    {
        return (
            <div>
                {Object.keys(this.state.skillList).map((skill, index) =>
                <h4 key={index}className="skills-list">{skill}<h2 className="skills-list-numbers">+0</h2></h4>
                )}
            </div>
        );
    }
}

export default Skills;