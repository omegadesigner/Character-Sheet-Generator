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
      programs: {},
      equipment: {},
      weapons: {},
      samples: {},
      classes: {},
      races: {}
    }
  }
  async grabRulebook()
  {
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/programs`;
      const respPrograms = await axios.get(airtableURL, 
      {
        headers: 
        {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
        }
      });
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/equipment`;
      const respEquipminet = await axios.get(airtableURL, 
      {
        headers: 
        {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
        }
      });
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/weapons`;
      const respWeapons = await axios.get(airtableURL, 
      {
        headers: 
        {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
        }
      });
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/sampleSheets`;
      const respSamples = await axios.get(airtableURL, 
      {
        headers: 
        {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
        }
      });
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/classes`;
      const respClasses = await axios.get(airtableURL, 
      {
        headers: 
        {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
        }
      });
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/races`;
      const respRaces = await axios.get(airtableURL, 
      {
        headers: 
        {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
        }
      });
      this.setState({programs: respPrograms.records})
      this.setState({equipment: respEquipminet.records})
      this.setState({weapons: respWeapons.records})
      this.setState({samples: respSamples.records})
      this.setState({classes: respClasses.records})
      this.setState({races: respRaces.records})
  }
  render()
  {
    return (
      <div className="App">
        <div>
          <Navbar 
            samples={this.state.samples}
          />
        </div>
        <div>
          <Sheet 
            programs={this.state.programs}
            equipment={this.state.equipment}
            weapons={this.state.weapons}
            classes={this.state.classes}
          />
        </div>
      </div>
    );
  }
}

export default App;
