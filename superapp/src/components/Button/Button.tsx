import React from 'react';

import {Props} from './types';

export default function Button({onClick, children}: Props) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    )
}

