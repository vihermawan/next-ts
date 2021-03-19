import React from 'react';
import classNames from 'classnames';
import HighlightedTextProps from './types';

export default function HightlightedText({
    childern,
    as = 'span',
    href,
    className,
}: HighlightedTextProps){
    const classes = classNames('px-3 bg-white rouned-full shadow-md focus-outline-none focus:ring-2 ring-indigo-500', className);
    if(as === 'span'){
        return (
            <span className={classes}>
                {childern}
            </span>
        )
    }
    return (
        <a href={href} className={classes}>
            {childern}
        </a>
    )
}