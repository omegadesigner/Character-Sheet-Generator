import React, {Component} from 'react';
// import Programs from './components/Programs';
// import Equipment from './components/Equipment';
// import Weapons from './components/Weapons';
// import Samples from './components/Samples';
import Sheet from './components/Sheet';
import Navbar from './components/Navbar';
import { Route, Link } from "react-router-dom";
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor()
  {
    super();
    this.state = {
      programs: [],
      equipment: [],
      weapons: [],
      sampleSheets: [],
      classes: [],
      races: []
    }
  }

  async grabRulebook()
  {
    const tables = Object.keys(this.state)
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/`;
    tables.forEach((table, i) =>
    {
      setTimeout(async () => 
      {
        const response = await axios.get(`${airtableURL}${table}`, 
        {
          headers: 
          {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
          }
        });
        this.setState({[table]: response.data.records});
      }, 200 *(i + 1));
    })
  }

  async componentDidMount()
  {
    await this.grabRulebook();
  }

  render()
  {
    return (
      <div className="layout">
        <div id="Navbar">
          <Navbar 
            sampleSheets={this.state.sampleSheets}
          />
        </div>
        <div id="Options">
          Options
        </div>
        <div id="CreatedCharacters">
          Created Characters
        </div>
        <div id="CharacterSheet">
          Character Sheet
        </div>
      </div>
    );
  }
}

export default App;

{/* 
    <Sheet 
      programs={this.state.programs}
      equipment={this.state.equipment}
      weapons={this.state.weapons}
      classes={this.state.classes}
      races={this.state.races}
    /> */}