import React from 'react';
import classNames from 'classnames';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
    return (
        <div className={classNames(
            "max-w-[1176px] mx-auto px-8 w-full h-full relative",
            className
        )}>
            {children}
        </div>
    );
}

export default Container;