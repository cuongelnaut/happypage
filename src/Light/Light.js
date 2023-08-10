import { useContext } from 'react';
import style from './Light.module.css'
import { NightContext } from '../App'

function Light() {
    const state = useContext(NightContext);
    return (
        <div className={ (state==="day") ? style.cover : style.appear }>
        <div className={ (state==="day") ? style.light1 : style.light2}>
            <div className={ (state==="day") ? style.highlight1 : style.highlight2 }></div>
        </div>
        </div>
    )
}
export default Light;