import React from 'react';

interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    type?: 'button' | 'submit' | 'reset';
    dataAttributes?: { [key: string]: string | number | boolean };
}

const Button: React.FC<ButtonProps> = ({ onClick, children, color = 'primary', type = 'button', dataAttributes }) => {
    return (
        <button
            className={`btn btn-${color}`}
            onClick={onClick}
            type={type}
            {...dataAttributes}
        >
            {children}
        </button>
    );
};

export default Button;