import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import Container from '../Container';
import ScreenTitle from '../screen-title';
import { buildPc, servicesList } from '@/settings/services-list';
import Services from '../services';
import Button from '../button';
import AssembliesReady from '../assemblies-reaby';
import { animations } from '@/settings/animatios';
import { useModal } from '@/hooks/use-modal-store';

const ServicesScreen = () => {
    const { onOpen } = useModal();

    return (
        <section id='services' className="py-12">
            <div className='bg-black z-10 relative'>
                <Container>
                    <div className='flex flex-col gap-y-6'>
                        <ScreenTitle>Услуги</ScreenTitle>
                    </div>
                </Container>
            </div>
            <AssembliesReady />
            <div className='bg-black relative'>
                <span className="absolute bg-[rgba(20,83,45,0.45)] shadow-[0px_0px_160px_50px_rgb(20,83,45)] h-[1px] w-full top-1/2" />
                <div>
                    <Container>
                        <div className="py-12">
                            <motion.div
                                initial='hidden'
                                whileInView='visible'
                                viewport={{ once: true }}
                                className='grid grid-cols-3 items-center overflow-hidden py-2'
                            >
                                <motion.span variants={animations['fadeLeft']} custom={2} className='w-full h-[1px] bg-gray-500' />
                                <motion.h1 variants={animations['fadeUp']} custom={2} className='text-white text-2xl text-center'>Наши услуги</motion.h1>
                                <motion.span variants={animations['fadeRight']} custom={2} className='w-full h-[1px] bg-gray-500' />
                            </motion.div>
                        </div>
                        <div className='flex flex-col gap-8'>
                            <motion.div initial='hidden' whileInView='visible' viewport={{ once: true }} className='grid grid-cols-3 gap-4'>
                                {servicesList.map((item, i) => (
                                    <motion.div key={i} variants={animations['fadeDown']} custom={i + 1.2} className='flex flex-1' >
                                        <Services item={item} />
                                    </motion.div>
                                ))}
                            </motion.div>
                            <motion.div initial='hidden' whileInView='visible' viewport={{ once: true }}>
                                <motion.div variants={animations['fadeLeft']} custom={1} className='grid grid-cols-2 gap-2 bg-zinc-900 overflow-hidden rounded-lg'>
                                    <div className='flex'>
                                        <div className='relative'>
                                            <motion.div variants={animations['fadeLeft']} custom={2}>
                                                <Image className='z-10 relative' src={buildPc.image} alt='img' height={500} />
                                            </motion.div>
                                            <motion.span variants={animations['fadeLeft']} custom={1.5} className='absolute animate-pulse-slow bg-[rgba(0,104,50,0.4)] h-full right-0 top-0 w-[1px] shadow-[0px_0px_200px_50px_rgb(0,104,50)]' />
                                        </div>
                                    </div>
                                    <div className='flex py-6 px-8 flex-col'>
                                        <div className='flex-1 text-right flex flex-col gap-2'>
                                            <h1 className='text-white text-xl font-semibold'>{buildPc.title}</h1>
                                            <p className='text-gray-500'>{buildPc.discription}</p>
                                            <ul className='py-10'>
                                                {buildPc.list.map((item, i) => (
                                                    <motion.li
                                                        variants={animations['fadeRight']}
                                                        custom={i + 1.2}
                                                        key={i}
                                                        className='
                                                            text-gray-400 
                                                            pr-6
                                                            relative 
                                                            before:absolute 
                                                            before:w-2
                                                            before:h-2
                                                            before:top-1/2 
                                                            before:-translate-y-1/2 
                                                            before:rounded-full
                                                            before:bg-indigo-500 
                                                            before:right-0'
                                                    >
                                                        {item}
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>
                                        <motion.div variants={animations['fadeUp']} custom={6} className='flex justify-end'>
                                            <Button onClick={() => onOpen('contact', { contactTitle: 'Хотите заказать сборку ПК?' })}>{buildPc.btnText}</Button>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </Container>
                </div>
            </div >
        </section >
    );
}

export default ServicesScreen;