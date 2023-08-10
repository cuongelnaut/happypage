import clsx from 'clsx';
import { useContext } from 'react';

import Body from "./Body/body.module.css";
import Day from "./Change/day.module.css"
import Night from "./Change/night.module.css"
// import Static from "./EarsAndShadow/static.module.css";
// import Waving from "./EarsAndShadow/waving.module.css";
// import normalEyes from "./Eyes/normalEyes.module.css";
// import SupriseEyes from "./Eyes/supriseEyes.module.css";
import { NightContext } from '../App'


function Rabbit () {
    const state = useContext(NightContext);

    const style = (state === "night") ? Night : Day;
    return (
        <div className={ Body.sevenColorRabbit }>
            <div className={ style.shadow }>
                <div className={ Body.legShadow }></div>
            </div>
            <div className={ clsx(Body.ears, style.leftEar) }></div>
            <div className={ clsx(Body.ears, style.rightEar) }></div>
            <div className={ clsx(Body.hands, Body.leftHand) }></div>
            <div className={ clsx(Body.hands, Body.rightHand) }></div>
            <div className={ Body.head }>
                <div className={ style.eyes }>
                <div className={ style.eyesPupil }></div>
                </div>
                <div className={ Body.dimples }></div>
            </div>
            <div className={ Body.body }></div>
            <div className={ clsx(Body.legs, Body.leftLeg) }></div>
            <div className={ clsx(Body.legs, Body.rightLeg) }></div>
        </div>
    )
}
export default Rabbit;