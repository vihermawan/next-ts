import React, {ReactNode} from 'react';
import classNames from 'classnames';

interface Props{
    childern: ReactNode;
    className? : string;
    tag? : 'div' | 'h2';
}

export default function HeaderText({childern, className, tag='div'}: Props){
    if(tag === 'div'){
        return (
            <div className={classNames('text-3xl font-bold leading-normal text-gray-800', className)}>
                {childern}
            </div>
        );
    }
    return(
        <h2 className={classNames('text=3xl font-bold leading-normal text-gray-800', className)}>
            {childern}
        </h2>
    );
}