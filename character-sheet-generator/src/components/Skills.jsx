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
                SlightOfHand: "dex",
                Stealth: "dex"
            }
        }
    }
    render()
    {
        return (
            <div>

            </div>
        );
    }
}

export default Skills;