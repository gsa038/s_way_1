import React, { Suspense } from 'react';
import Preloader from '../components/common/Preloader/Preloader';

export const withSuspense = (Component, componentProps) => {
    return (props) => {
        return <Suspense fallback={<Preloader />}>
            <Component {...componentProps} />
        </Suspense>
    }
}
