import React, { useState } from 'react';
import Button from './Button';

interface ExpendableTextProps {
    length: number;
    children: string;
}

const ExpendableText: React.FC<ExpendableTextProps> = ({ length, children }) => {
    const [expanded, setExpanded] = useState(false);

    const handleClick = () => {
        setExpanded(!expanded);
    };

    if (children.length <= length) {
        return <p>{children}</p>;
    }

    return (
        <>
            {expanded ? (
                <p>{children}</p>
            ) : (
                <p>{children.slice(0, length)}...</p>
            )}
            <Button onClick={handleClick} color='primary'>
                {expanded ? 'Read Less' : 'Read More'}
            </Button>
        </>
    );
};

export default ExpendableText;