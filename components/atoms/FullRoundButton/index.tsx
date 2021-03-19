import React from 'react';
import classNames from 'classnames';
import {motion} from 'framer-motion';
import FullRoundButtonProps from './type';
import { useState } from 'react';
import { useEffect } from 'react';

export default function FullRoundButton({
    childern,
    label,
    as = 'button',
    href = '',
    className,
    animationComplete,
    active = false,
    onClick
}: FullRoundButtonProps){
    const [animationFinish, setAnimationFinish] = useState<boolean>(false);
    const classes = classNames(
        'flex items-center justify-center w-12 h-12 rounded-full focus:outline-none focus:ring-2 ring-indigo-500 ring-offset-2',
        className,
        {
            'shadow-lg':animationComplete,
            'scale-75' : animationComplete === false,
            'transiton-all transform duration-500' : animationComplete !== null && !animationFinish,
            'bg-indigo-500 hover:bg-indigo-600 text-white': !active,
            'bg-white text-indigo-600' : active
        }
    );

    useEffect(() => {
        if(animationComplete){
            setTimeout(() => {
                setAnimationFinish(true);
            }, 500);
        }
    }, [animationComplete]);

    if(as === 'button'){
        return(
            <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.8}} className={classes} onClick={onClick}>
                {childern}
                <span className="sr-only">{label}</span>
            </motion.button>
        );
    }
    return(
        <motion.a href={href} whileHover={{scale: 1.1}} whileTap={{scale: 0.8}} className={classes} onClick={onClick}>
            {childern}
            <span className="sr-only">{label}</span>
        </motion.a>
    )
}