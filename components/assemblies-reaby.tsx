import React from 'react';
import { motion } from 'framer-motion';

import { CardPc } from './card-pc';
import Container from './Container';
import { assembly } from '@/settings/assembly';
import { animations } from '@/settings/animatios';

const AssembliesReady = () => {
    return (
        <div className="relative bg-zinc-950">
            <Bevel position='top' />
            <div className='py-4'>
                <Container>
                    <div className="flex flex-col gap-16">
                        <motion.div initial='hidden' whileInView='visible' viewport={{ once: true }} className="flex flex-col gap-4">
                            <motion.h1 variants={animations['fadeDown']} custom={1} className="text-3xl text-white text-center">Готовые сборки</motion.h1>
                            <motion.p variants={animations['fadeDown']} custom={2} className="text-center text-gray-400">Готовые сбалансированные сборки ПК, собранные нами заранее</motion.p>
                        </motion.div>
                        <motion.div
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true }}
                            className='grid grid-cols-3 gap-4'
                        >
                            {assembly.map((item, i) => (
                                <motion.div
                                    variants={animations['fadeDown']}
                                    custom={i + 2.2}
                                    key={item.id}
                                >
                                    <CardPc
                                        item={item}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </Container>
            </div >
            <Bevel position='bottom' />
        </div >
    );
}

const Bevel = ({ position }: { position: 'top' | 'bottom' }) => {
    return (
        <div className='relative h-28'>
            <span
                className="absolute bg-black h-28 w-full z-10"
                style={
                    position === 'top' ?
                        { clipPath: 'polygon(0 0, 100% 0, 100% 29%, 0 100%)' } :
                        { clipPath: 'polygon(0 81%, 100% 0%, 100% 100%, 0% 100%)' }
                }
            />
        </div>
    );
}

export default AssembliesReady;