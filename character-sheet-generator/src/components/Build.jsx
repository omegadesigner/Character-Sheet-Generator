import React, {Component} from 'react';
import Skills from './Skills'
import Programs from './Programs'

class Build extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            headGear: []
        }
    }
    getEquipment()
    {
        let headGearTemp = this.props.equipment.map((item) => 
        {
            if(item.fields.equipSlot === "headSlot")
            {
                return item
            }
            else
            {
                return "waka"
            }
        })
        this.setState({headGear: headGearTemp}) 
    }
    render()
    {
        return (
            <div className="build-layout">
                <div id="SkillsList" className="skills-layout">
                    <div className="skills">
                        Skills
                        <Skills 
                            str={this.props.str}
                            dex={this.props.dex}
                            mat={this.props.mat}
                            tech={this.props.tech}
                            int={this.props.int}
                            cha={this.props.cha}
                        />
                    </div>
                </div>
                <div id="EquipmentList" className="equipment-layout">
                    <div className="head-slot">
                        Head Gear
                        <select 
                            id="HeadGear"
                            className="equipment-input"
                            defaultValue="default">
                            <option value="default"></option>
                        {this.props.equipment.map((item) =>
                            <option key={item.id}>{item.fields.itemName}</option>
                        )}
                        </select>
                    </div>
                    <div className="face-slot">
                        Face Gear
                        <select 
                            id="FaceGear"
                            className="equipment-input"
                            defaultValue="default">
                            <option value="default"></option>
                        {this.props.equipment.map((item) =>
                            <option key={item.id}>{item.fields.itemName}</option>
                        )}
                        </select>
                    </div>
                    <div className="back-slot">
                        On Back
                        <select 
                            id="OnBack"
                            className="equipment-input"
                            defaultValue="default">
                            <option value="default"></option>
                        {this.props.equipment.map((item) =>
                            <option key={item.id}>{item.fields.itemName}</option>
                        )}
                        </select>
                    </div>
                    <div className="torso-slot">
                        Torso
                        <select 
                            id="Torso"
                            className="equipment-input"
                            defaultValue="default">
                            <option value="default"></option>
                        {this.props.equipment.map((item) =>
                            <option key={item.id}>{item.fields.itemName}</option>
                        )}
                        </select>
                    </div>
                    <div className="arms-slot">
                        Arms
                        <select 
                            id="Arms"
                            className="equipment-input"
                            defaultValue="default">
                            <option value="default"></option>
                        {this.props.equipment.map((item) =>
                            <option key={item.id}>{item.fields.itemName}</option>
                        )}
                        </select>
                    </div>
                    <div className="left-hand-slot">
                        Left Hand
                        <select 
                            id="LeftHand"
                            className="equipment-input"
                            defaultValue="default">
                            <option value="default"></option>
                        {this.props.equipment.map((item) =>
                            <option key={item.id}>{item.fields.itemName}</option>
                        )}
                        </select>
                    </div>
                    <div className="right-hand-slot">
                        Right Hand
                        <select 
                            id="RightHand"
                            className="equipment-input"
                            defaultValue="default">
                            <option value="default"></option>
                        {this.props.equipment.map((item) =>
                            <option key={item.id}>{item.fields.itemName}</option>
                        )}
                        </select>
                    </div>
                    <div className="legs-slot">
                        Legs
                        <select 
                            id="Legs"
                            className="equipment-input"
                            defaultValue="default">
                            <option value="default"></option>
                        {this.props.equipment.map((item) =>
                            <option key={item.id}>{item.fields.itemName}</option>
                        )}
                        </select>
                    </div>
                    <div className="footwear-slot">
                        Footwear
                        <select 
                            id="Footwear"
                            className="equipment-input"
                            defaultValue="default">
                            <option value="default"></option>
                        {this.props.equipment.map((item) =>
                            <option key={item.id}>{item.fields.itemName}</option>
                        )}
                        </select>
                    </div>
                </div>
                <div id="BodyView" className="body-layout">
                    <div className="head"></div>
                    <div className="chest"></div>
                    <div className="left-arm"></div>
                    <div className="right-arm"></div>
                    <div className="left-hand"></div>
                    <div className="right-hand"></div>
                    <div className="waist"></div>
                    <div className="pelvis"></div>
                    <div className="left-leg"></div>
                    <div className="right-leg"></div>
                    <div className="left-foot"></div>
                    <div className="right-foot"></div>
                </div>
                <div id="ProgramsList" className="programs-layout">
                    <div className="programs">
                        Programs
                        <Programs programs={this.props.programs}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Build;