import {ReactNode} from 'react';

export default interface HighlightedTextProps {
    childern: ReactNode;
    as? : 'a' | 'span';
    href? : string;
    className? : string;
}