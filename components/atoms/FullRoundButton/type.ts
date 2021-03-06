import {ReactNode} from 'react';

export default interface FullRoundButtonProps {
    childern? : ReactNode;
    label? : string;
    as? : 'button' | 'a';
    href? : string;
    className?: string,
    animationComplete?: boolean;
    active? : boolean;
    onClick? : (params:any) => any;
}