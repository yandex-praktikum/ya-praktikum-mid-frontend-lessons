import React from 'react';

type OwnProps = React.InputHTMLAttributes<HTMLInputElement> & {
    customField: string;
};

export type Props = OwnProps;