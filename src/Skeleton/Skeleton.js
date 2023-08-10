import clsx from 'clsx';

import Body from './Body/Body.module.css'
import nEAH from './EyesAndHands/normal.module.css'

function Skeleton () {
    return (
        <div className={ Body.skeleton }>
            <div className={ Body.head }>
                <div className={ Body.skull }></div>
                <div className={ clsx(Body.jaw, Body.jawA) }></div>
                <div className={ clsx(Body.jaw, Body.jawB) }></div>
                <div className={ clsx(Body.jaw, Body.jawC) }></div>
                <div className={ clsx(Body.jaw, Body.jawD) }></div>
                <div className={ nEAH.eyes }>
                <div className={ nEAH.leftEye }>
                    <div className={ nEAH.eyelids }></div>
                    <div className={ nEAH.eyesPupil }></div>
                </div>
                <div className={ nEAH.rightEye }>
                    <div className={ nEAH.eyelids }></div>
                    <div className={ nEAH.eyesPupil }></div>
                </div>
                </div>
            </div>
            <div className={ Body.body }>
                <div className={ Body.backbone }>
                <div className={ clsx(Body.rib, Body.ribA) }></div>
                <div className={ clsx(Body.rib, Body.ribB) }></div>
                <div className={ clsx(Body.rib, Body.ribC) }></div>
                </div>
            </div>
            <div className={ nEAH.hand }>
                <div className={ nEAH.leftHand }>
                    <div className={ nEAH.humerus }></div>
                    <div className={ nEAH.radius }></div>
                </div>
                <div className={ nEAH.rightHand }>
                    <div className={ nEAH.humerus }></div>
                    <div className={ nEAH.radius }></div>
                </div>
            </div>
            <div className={ Body.hip }>
                <div className={ Body.pelvis }></div>
            </div>
            
            <div className={ Body.leg }>
                <div className={ Body.thigh }></div>
                <div className={ Body.shin }></div>
            </div>
        </div>
    )
}
export default Skeleton;