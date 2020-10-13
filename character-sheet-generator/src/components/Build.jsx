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
                <div id="EquipmentList" className="epuipmentLayout">
                    <div className="headSlot">Head Gear</div>
                    <div className="faceSlot">Face Gear</div>
                    <div className="backSlot">On Back</div>
                    <div className="torsoSlot">Torso</div>
                    <div className="armsSlot">Arms</div>
                    <div className="leftHandSlot">Left Hand</div>
                    <div className="rightHandSlot">Right Hand</div>
                    <div className="legsSlot">Legs</div>
                    <div className="footwearSlot">Footwear</div>
                </div>
                <div id="BodyView" className="bodyLayout">
                    <div className="head">Head</div>
                    <div className="chest">Chest</div>
                    <div className="leftArm">Left Arm</div>
                    <div className="rightArm">Right Arm</div>
                    <div className="leftHand">Left Hand</div>
                    <div className="rightHand">Right Hand</div>
                    <div className="waist">Waist</div>
                    <div className="pelvis">Pelvis</div>
                    <div className="leftLeg">Left Leg</div>
                    <div className="rightLeg">Right Leg</div>
                    <div className="leftFoot">Left Foot</div>
                    <div className="rightFoot">Right Foot</div>
                </div>
                <div id="ProgramList" className="programLayout">
                    <h4 className="programs">Programs</h4>
                </div>
            </div>
        );
    }
}

export default Build;