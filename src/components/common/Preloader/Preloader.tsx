
import React from 'react'
import s from './Preloader.module.css'

type PropsType = {
    
}
 
let Preloader = (props: PropsType) => {
    return <div className={s.preloader}>
        <div className={s.ldsRoller}>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
        </div>
    </div>
}

export default Preloader