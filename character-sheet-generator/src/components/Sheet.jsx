import React, {Component} from 'react';
import { Route } from "react-router-dom";
import axios from 'axios'
import Build from "./Build"
import Info from "./Info"
import Notes from "./Notes"

class Sheet extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            name: "Test",
            race: "",
            characterClass: "",
            level: "",
            str: "10",
            dex: "10",
            mat: "10",
            tech: "10",
            int: "10",
            cha: "10",
            currentHP: ""
        }
    }

    handleSubmit = async (e) =>
    {
        e.preventDefault();
        let fields = 
        {
            characterName: this.state.name,
            race: this.state.race,
            class: this.state.characterClass,
            characterLevel: this.state.level
        }

        const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/createdSheets`;
        await axios.post(airtableURL, {fields},
        {
            headers: 
            {
                Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
            }
        });
        this.props.update()
    }

    render()
    {
        return (
            <div className="sheet-layout">
                <form id="CharacterHeader" className="sheet-header-layout" onSubmit={this.handleSubmit}>
                    <div className="name">
                        <h3>Character Name</h3>
                        <input 
                            className="header-input"
                            name="characterName"
                            value={this.name}
                            onChange={(event) => this.setState({name: event.target.value})}
                        />
                    </div>
                    <div className="race">
                        <h4>Race</h4>
                        <select 
                            className="header-input"
                            name="characterRace"
                            defaultValue="default"
                            onChange={(event) => this.setState({race: event.target.value})}>
                            <option value="default"></option>
                        {this.props.races.map((race) =>
                            <option 
                                key={race.id}
                                value={race.fields.raceName}
                            >
                                {race.fields.raceName}
                            </option>
                        )}
                        </select>
                    </div>
                    <div className="class">
                        <h4>Class</h4>
                        <select 
                            className="header-input"
                            name="characterClass"
                            defaultValue="default"
                            onChange={(event) => this.setState({characterClass: event.target.value})}>
                            <option value="default"></option>
                        {this.props.classes.map((item) =>
                            <option 
                                key={item.id} 
                                value={item.fields.className}
                            >
                                {item.fields.className}
                            </option>
                        )}
                        </select>
                    </div>
                    <div className="level">
                        <h4>Level</h4>
                        <select 
                            className="header-input"
                            name="characterLevel"
                            defaultValue="default"
                            onChange={(event) => this.setState({level: event.target.value})}>
                            <option value="default"></option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='6'>6</option>
                            <option value='7'>7</option>
                            <option value='8'>8</option>
                            <option value='9'>9</option>
                            <option value='10'>10</option>
                            <option value='11'>11</option>
                            <option value='12'>12</option>
                            <option value='13'>13</option>
                            <option value='14'>14</option>
                            <option value='15'>15</option>
                            <option value='16'>16</option>
                            <option value='17'>17</option>
                            <option value='18'>18</option>
                            <option value='19'>19</option>
                            <option value='20'>20</option>
                        </select>
                    </div>
                </form>
                <div id="CharacterStats" className="sheet-stat-layout">
                    <div className="str">
                        <h4>STR</h4>
                        <h2>{this.state.str}</h2>
                        <input 
                            className="stats-input"
                            name="str"
                            value={this.str}
                            onChange={(event) => this.setState({str: event.target.value})}
                        />
                    </div>
                    <div className="dex">
                        <h4>DEX</h4>
                        <h2>{this.state.dex}</h2>
                        <input 
                            className="stats-input"
                            name="dex"
                            value={this.dex}
                            onChange={(event) => this.setState({dex: event.target.value})}
                        />
                    </div>
                    <div className="mat">
                        <h4>MAT</h4>
                        <h2>{this.state.mat}</h2>
                        <input 
                            className="stats-input"
                            name="mat"
                            value={this.mat}
                            onChange={(event) => this.setState({mat: event.target.value})}
                        />
                    </div>
                    <div className="tech">
                        <h4>TECH</h4>
                        <h2>{this.state.tech}</h2>
                        <input 
                            className="stats-input"
                            name="tech"
                            value={this.tech}
                            onChange={(event) => this.setState({tech: event.target.value})}
                        />
                    </div>
                    <div className="int">
                        <h4>INT</h4>
                        <h2>{this.state.int}</h2>
                        <input 
                            className="stats-input"
                            name="int"
                            value={this.int}
                            onChange={(event) => this.setState({int: event.target.value})}
                        />
                    </div>
                    <div className="cha">
                        <h4>CHA</h4>
                        <h2>{this.state.cha}</h2>
                        <input 
                            className="stats-input"
                            name="cha"
                            value={this.cha}
                            onChange={(event) => this.setState({cha: event.target.value})}
                        />
                    </div>
                    <div className="health">
                        <h4>HEALTH</h4>
                        <h2>{this.state.currentHP + "/" + (10 + ((8 + Math.floor((this.state.mat - 10) / 2)) * this.state.level))}</h2>
                        <input 
                            className="stats-input"
                            name="currentHP"
                            value={this.currentHP}
                            onChange={(event) => this.setState({currentHP: event.target.value})}
                        />
                    </div>
                </div>
                <div id="CharacterOptions">
                    <Route path="/build">
                        <Build
                            equipment={this.props.equipment}
                            programs={this.props.programs}
                            str={this.state.str}
                            dex={this.state.dex}
                            mat={this.state.mat}
                            tech={this.state.tech}
                            int={this.state.int}
                            cha={this.state.cha}
                        />
                    </Route>
                    <Route path="/info">
                        <Info />
                    </Route>
                    <Route path="/notes">
                        <Notes />
                    </Route>
                </div>
            </div>
        );
    }
}

export default Sheet;