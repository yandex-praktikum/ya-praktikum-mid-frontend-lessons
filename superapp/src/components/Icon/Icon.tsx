import React, {useMemo} from 'react';

import {Props} from './types';
import cn from 'classnames';

import './Icon.css';

export default function Icon({src, className = '', alt}: Props) {
    const classNames = useMemo(() => {
        return cn('icon', className);
    }, [className]);

    return (
        <img 
            src={src}
            className={classNames}
            alt={alt}
        />
    );
}