import React, {Component} from 'react';
import axios from 'axios'

class CreatedCharacters extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            test: "test"
        }
    }
    
    handleDelete = async (id) =>
    { 
        const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/createdSheets /${id}`;
        await axios.delete(airtableURL,
        {
            headers:
            {
                Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
            }
        })
        this.props.update()
    }

    render()
    {
        return (
            <div className="created-sheets">
                <ul>
                    {this.props.createdSheets.map((sheet) =>
                        <li key={sheet.id} className="created-sheets-list">
                            <strong className="character-name">{sheet.fields.characterName}</strong>
                            <div>{sheet.fields.race} {sheet.fields.class}</div>
                            <strong className="character-level">{sheet.fields.characterLevel}</strong>
                            <button onClick={() => this.handleDelete(sheet.id)}>✗</button>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default CreatedCharacters;