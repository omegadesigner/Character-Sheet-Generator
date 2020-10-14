import React, {Component} from 'react';

class Build extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
        }
    }
    render()
    {
        return (
            <div className="buildLayout">
                <div id="SkillsList" className="skillsLayout">
                    <h4 className="skills">Skills</h4>
                </div>
                <div id="EquipmentList" className="equipmentLayout">
                    <div className="headSlot">
                        Head Gear
                        <input 
                            id="HeadGear"
                            className="equipmentInput"
                            value="Helmet  +2"
                        />
                    </div>
                    <div className="faceSlot">
                        Face Gear
                        <input 
                            id="FaceGear"
                            className="equipmentInput"
                            value="Visor    +1"
                        />
                    </div>
                    <div className="backSlot">
                        On Back
                        <input 
                            id="OnBack"
                            className="equipmentInput"
                            value="Backpack"
                        />
                    </div>
                    <div className="torsoSlot">
                        Torso
                        <input 
                            id="Torso"
                            className="equipmentInput"
                            value="Jacket   +4"
                        />
                    </div>
                    <div className="armsSlot">
                        Arms
                        <input 
                            id="Arms"
                            className="equipmentInput"
                            value="Wire Jacks"
                        />
                    </div>
                    <div className="leftHandSlot">
                        Left Hand
                        <input 
                            id="LeftHand"
                            className="equipmentInput"
                            value="Scanner +2"
                        />
                    </div>
                    <div className="rightHandSlot">
                        Right Hand
                        <input 
                            id="RightHand"
                            className="equipmentInput"
                            value="Pistol    +1"
                        />
                    </div>
                    <div className="legsSlot">
                        Legs
                        <input 
                            id="Legs"
                            className="equipmentInput"
                            value="Pants    +3"
                        />
                    </div>
                    <div className="footwearSlot">
                        Footwear
                        <input 
                            id="Footwear"
                            className="equipmentInput"
                            value="Boots    +4"
                        />
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
                    <h4 className="programs">Programs</h4>
                </div>
            </div>
        );
    }
}

export default Build;