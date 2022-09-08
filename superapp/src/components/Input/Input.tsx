import React from 'react';

import {Props} from './types';

export default function Input({ onChange, value }: Props) {
    return (
        <input onChange={onChange} value={value}/>
    );
}