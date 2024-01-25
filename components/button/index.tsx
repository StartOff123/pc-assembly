import React from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';

interface ButtonProps {
    icon?: React.ReactNode;
    btnType?: 'primary' | 'default';
    textClassName?: string;
}

const Button = React.forwardRef<
    HTMLButtonElement, React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & ButtonProps
>(({ children, className, icon, btnType, textClassName, ...props }, ref) => {
    return (
        <button ref={ref} {...props} className={classNames(
            className,
            'py-2 px-4 transition cursor-pointer rounded-sm uppercase text-xs outline-none flex items-center font-semibold border-[1px]',
            btnType === 'default' ?
                'border-gray-600 text-gray-600 hover:border-indigo-500 hover:text-indigo-500' :
                'border-indigo-400 bg-indigo-400 hover:border-indigo-500 active:border-indigo-600 hover:bg-indigo-500 text-white active:bg-indigo-600'
        )}>
            <p className={classNames(icon && 'mr-2', textClassName)}>{children}</p>
            {icon && icon}
        </button>
    );
})

export const MButton = motion(Button);

export default Button;