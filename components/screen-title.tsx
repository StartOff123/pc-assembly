import React from 'react';
import { motion } from 'framer-motion';
import { animations } from '@/settings/animatios';

interface ScreenTitleProps {
    children: React.ReactNode;
}

const ScreenTitle = ({ children }: ScreenTitleProps) => {
    return (
        <motion.div
            viewport={{ once: true }}
            initial='hidden'
            whileInView='visible'
            className='grid grid-flow-col mt-8 overflow-hidden'
        >
            <motion.span variants={animations['fadeUp']} custom={1} className='absolute -top-4'>
                <p className='text-white text-[64px] font-bold opacity-10'>{children}</p>
            </motion.span>
            <motion.p variants={animations['fadeLeft']} custom={2} className='text-white text-3xl font-semibold'>{children}</motion.p>
            <div className='w-full relative'>
                <motion.span variants={animations['fadeRight']} custom={1} className='absolute w-3/4 h-[1px] bg-gray-500 right-0 top-2' />
                <motion.span variants={animations['fadeRight']} custom={2} className='absolute w-1/2 h-[1px] bg-gray-500 right-0 top-1/2 -translate-y-1/2' />
                <motion.span variants={animations['fadeRight']} custom={3} className='absolute w-1/4 h-[1px] bg-gray-500 right-0 bottom-2' />
            </div>
        </motion.div>
    );
}

export default ScreenTitle;