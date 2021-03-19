import React, {ReactNode} from 'react';
import classNames from 'classnames';

interface Props{
    childern: ReactNode;
    className? : string;
}

export default function ContentText({childern, className} : Props) {
    return (
        <p className={classNames('text-center text-gray-700 leading-extra-loose',className)}>
            {childern}
        </p>
    )
}