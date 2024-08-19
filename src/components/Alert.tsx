import React from 'react'
import Button from './Button';

interface AlertProps {
    message: string;
    type: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    children?: React.ReactNode; // This is a special type in TypeScript that represents any valid JSX and HTML content
    onClose: () => void;
}

const Alert = ({ message, type, children, onClose }: AlertProps) => {
    return (
        <div className={`alert alert-${type}`} role="alert">
            <strong>{message}</strong> {children}

            <Button onClick={onClose} type='button' color='primary' dataAttributes={{ 'data-bs-dismiss': 'alert', 'aria-label': 'Close' }} >
                &#x2715;
            </Button>
        </div>
    )
}

export default Alert