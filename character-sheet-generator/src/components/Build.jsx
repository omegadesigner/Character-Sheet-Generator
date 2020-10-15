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
        // console.log(this.props.equipment)
        // console.log(this.props.equipment.filter((item) => item.fields.equipSlot))
        // console.log(this.state.headGear)
    }
    render()
    {
        return (
            <div className="buildLayout">
                <div id="SkillsList" className="skillsLayout">
                    <div className="skills">
                        Skills
                        <Skills />
                    </div>
                </div>
                <div id="EquipmentList" className="equipmentLayout">
                    <div className="headSlot">
                        Head Gear
                        <select 
                            id="HeadGear"
                            className="equipmentInput"
                            defaultValue="default">
                            <option value="default"></option>
                        {this.props.equipment.map((item) =>
                            <option key={item.id}>{item.fields.itemName}</option>
                        )}
                        </select>
                    </div>
                    <div className="faceSlot">
                        Face Gear
                        <select 
                            id="FaceGear"
                            className="equipmentInput"
                            defaultValue="default">
                            <option value="default"></option>
                        {this.props.equipment.map((item) =>
                            <option key={item.id}>{item.fields.itemName}</option>
                        )}
                        </select>
                    </div>
                    <div className="backSlot">
                        On Back
                        <select 
                            id="OnBack"
                            className="equipmentInput"
                            defaultValue="default">
                            <option value="default"></option>
                        {this.props.equipment.map((item) =>
                            <option key={item.id}>{item.fields.itemName}</option>
                        )}
                        </select>
                    </div>
                    <div className="torsoSlot">
                        Torso
                        <select 
                            id="Torso"
                            className="equipmentInput"
                            defaultValue="default">
                            <option value="default"></option>
                        {this.props.equipment.map((item) =>
                            <option key={item.id}>{item.fields.itemName}</option>
                        )}
                        </select>
                    </div>
                    <div className="armsSlot">
                        Arms
                        <select 
                            id="Arms"
                            className="equipmentInput"
                            defaultValue="default">
                            <option value="default"></option>
                        {this.props.equipment.map((item) =>
                            <option key={item.id}>{item.fields.itemName}</option>
                        )}
                        </select>
                    </div>
                    <div className="leftHandSlot">
                        Left Hand
                        <select 
                            id="LeftHand"
                            className="equipmentInput"
                            defaultValue="default">
                            <option value="default"></option>
                        {this.props.equipment.map((item) =>
                            <option key={item.id}>{item.fields.itemName}</option>
                        )}
                        </select>
                    </div>
                    <div className="rightHandSlot">
                        Right Hand
                        <select 
                            id="RightHand"
                            className="equipmentInput"
                            defaultValue="default">
                            <option value="default"></option>
                        {this.props.equipment.map((item) =>
                            <option key={item.id}>{item.fields.itemName}</option>
                        )}
                        </select>
                    </div>
                    <div className="legsSlot">
                        Legs
                        <select 
                            id="Legs"
                            className="equipmentInput"
                            defaultValue="default">
                            <option value="default"></option>
                        {this.props.equipment.map((item) =>
                            <option key={item.id}>{item.fields.itemName}</option>
                        )}
                        </select>
                    </div>
                    <div className="footwearSlot">
                        Footwear
                        <select 
                            id="Footwear"
                            className="equipmentInput"
                            defaultValue="default">
                            <option value="default"></option>
                        {this.props.equipment.map((item) =>
                            <option key={item.id}>{item.fields.itemName}</option>
                        )}
                        </select>
                    </div>
                </div>
                <div id="BodyView" className="bodyLayout">
                    <div className="head"></div>
                    <div className="chest"></div>
                    <div className="leftArm"></div>
                    <div className="rightArm"></div>
                    <div className="leftHand"></div>
                    <div className="rightHand"></div>
                    <div className="waist"></div>
                    <div className="pelvis"></div>
                    <div className="leftLeg"></div>
                    <div className="rightLeg"></div>
                    <div className="leftFoot"></div>
                    <div className="rightFoot"></div>
                </div>
                <div id="ProgramsList" className="programsLayout">
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