
import React from 'react';
import s from './Preloader.module.css';
import * as SVGLoaders from 'svg-loaders-react';

let Preloader = (props) => {
    return <div className={s.preloader}>
        <SVGLoaders.TailSpin width='72' height='72' stroke="black" />
    </div>
}

export default Preloader;