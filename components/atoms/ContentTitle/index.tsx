import React, { ReactNode } from 'react';
import classNames from 'classnames';

interface Props {
    childern: ReactNode;
    className?: string;
}

export default function ContentTitle({ childern, className }: Props){
    return <h3 className={classNames('text-lg font-bold text-gray-800')}>{childern}</h3>
}