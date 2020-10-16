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
                <h4 className="skills-list">Acrobatics<h2 className="skills-list-numbers">{Math.floor((this.props.dex - 10) / 2) > 0 ? "+"+Math.floor((this.props.dex - 10) / 2): 0}</h2></h4>
                <h4 className="skills-list">Athletics<h2 className="skills-list-numbers">{Math.floor((this.props.str - 10) / 2) > 0 ? "+"+Math.floor((this.props.str - 10) / 2): 0}</h2></h4>
                <h4 className="skills-list">Deception<h2 className="skills-list-numbers">{Math.floor((this.props.cha - 10) / 2) > 0 ? "+"+Math.floor((this.props.cha - 10) / 2): 0}</h2></h4>
                <h4 className="skills-list">Hacking<h2 className="skills-list-numbers">{Math.floor((this.props.tech - 10) / 2) > 0 ? "+"+Math.floor((this.props.tech - 10) / 2): 0}</h2></h4>
                <h4 className="skills-list">Intimidation<h2 className="skills-list-numbers">{Math.floor((this.props.cha - 10) / 2) > 0 ? "+"+Math.floor((this.props.cha - 10) / 2): 0}</h2></h4>
                <h4 className="skills-list">Scanning<h2 className="skills-list-numbers">{Math.floor((this.props.tech - 10) / 2) > 0 ? "+"+Math.floor((this.props.tech - 10) / 2): 0}</h2></h4>
                <h4 className="skills-list">Mechanic<h2 className="skills-list-numbers">{Math.floor((this.props.tech - 10) / 2) > 0 ? "+"+Math.floor((this.props.tech - 10) / 2): 0}</h2></h4>
                <h4 className="skills-list">Medic<h2 className="skills-list-numbers">{Math.floor((this.props.int - 10) / 2) > 0 ? "+"+Math.floor((this.props.int - 10) / 2): 0}</h2></h4>
                <h4 className="skills-list">Repairs<h2 className="skills-list-numbers">{Math.floor((this.props.tech - 10) / 2) > 0 ? "+"+Math.floor((this.props.tech - 10) / 2): 0}</h2></h4>
                <h4 className="skills-list">Resistence<h2 className="skills-list-numbers">{Math.floor((this.props.mat - 10) / 2) > 0 ? "+"+Math.floor((this.props.mat - 10) / 2): 0}</h2></h4>
                <h4 className="skills-list">Perception<h2 className="skills-list-numbers">{Math.floor((this.props.int - 10) / 2) > 0 ? "+"+Math.floor((this.props.int - 10) / 2): 0}</h2></h4>
                <h4 className="skills-list">Persuasion<h2 className="skills-list-numbers">{Math.floor((this.props.cha - 10) / 2) > 0 ? "+"+Math.floor((this.props.cha - 10) / 2): 0}</h2></h4>
                <h4 className="skills-list">SleightOfHand<h2 className="skills-list-numbers">{Math.floor((this.props.dex - 10) / 2) > 0 ? "+"+Math.floor((this.props.dex - 10) / 2): 0}</h2></h4>
                <h4 className="skills-list">Stealth<h2 className="skills-list-numbers">{Math.floor((this.props.dex - 10) / 2) > 0 ? "+"+Math.floor((this.props.dex - 10) / 2): 0}</h2></h4>
            </div>
        );
    }
}

export default Skills;