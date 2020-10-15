import React, {Component} from 'react';
import Navbar from './components/Navbar';
import Options from './components/Options';
import Sheet from './components/Sheet';
import CreatedCharacters from './components/CreatedCharacters'
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
      races: [],
      createdSheets: [],
      update: false
    }
  }

  async grabRulebook()
  {
    //const tables = Object.keys(this.state)
    const tables = [ "programs", "equipment", "weapons", "sampleSheets", "classes", "races", "createdSheets" ]
    console.log(tables)
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
      }, 300 *(i + 1));
    })
    
  }

  async handleUpdate()
  {
    console.log(this.state)
    //this.forceUpdate();
    //await this.grabRulebook();
    // this.setState({update: !this.update})
  }

  async componentDidMount()
  {
    await this.grabRulebook();
    
  }
  
  render()
  {
    return (
      <div className="appLayout">
        <div id="Navbar">
          <Navbar 
            sampleSheets={this.state.sampleSheets}
            update={this.state.update}
          />
        </div>
        <div id="Options">
          <Options 
            update={this.state.update}
          />
        </div>
        <div id="CreatedCharacters">
          <CreatedCharacters 
            createdSheets={this.state.createdSheets}
            update={this.handleUpdate}
          />
        </div>
        <div id="CharacterSheet">
          <Sheet 
            programs={this.state.programs}
            equipment={this.state.equipment}
            weapons={this.state.weapons}
            classes={this.state.classes}
            races={this.state.races}
            update={this.handleUpdate}
          />
        </div>
      </div>
    );
  }
}

export default App;