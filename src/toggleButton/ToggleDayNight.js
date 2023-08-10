import { useContext } from 'react';
import clsx from 'clsx';

import StyleDay from './day.module.css'
import StyleNight from './night.module.css'
import { NightContext } from '../App';

function Toggle() {
    const state = useContext(NightContext);
    const style = (state === "night") ? StyleNight : StyleDay;

    return (
        <div className={ style.buttonFrame }>
            <div className={ style.shineLarge }>
                <div className={ style.shineMedium }>
                    <div className={ style.shineSmall }>
                    <div className={ clsx(style.layerA, style.cloud1) }></div>
                    <div className={ clsx(style.layerA, style.cloud2) }></div>
                    <div className={ clsx(style.layerA, style.cloud3) }></div>
                    <div className={ clsx(style.layerA, style.cloud4) }></div>
                    <div className={ clsx(style.layerA, style.cloud5) }></div>
                    <div className={ clsx(style.layerA, style.cloud6) }></div>
                    <div className={ clsx(style.layerB, style.cloud7) }></div>
                    <div className={ clsx(style.layerB, style.cloud8) }></div>
                    <div className={ clsx(style.layerB, style.cloud9) }></div>
                    <div className={ clsx(style.layerB, style.cloud10) }></div>
                    <div className={ clsx(style.layerB, style.cloud11) }></div>
                    <div className={ clsx(style.layerB, style.cloud12) }></div>
                    <div className={ style.sunMoon }></div> 
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Toggle;