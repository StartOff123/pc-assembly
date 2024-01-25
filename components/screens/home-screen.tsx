import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown } from 'react-bootstrap-icons';
import { animateScroll } from 'react-scroll';

import pc from '@/public/assets/pc.png';
import { MButton } from '@/components/button';
import fon from '@/public/assets/fon.jpg';
import Container from '@/components/Container';
import { animations } from '@/settings/animatios';


const HomeScreen = () => {
    return (
        <motion.section
            id='home'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='w-full h-dvh relative'
        >
            <Container>
                <motion.div variants={animations['fadeUp']} custom={2} className='absolute top-24 left-0'>
                    <h1 className='text-white lg:text-[126px] md:text-[96px] text-[64px] font-semibold opacity-5'>
                        <span className='font-light'>PC</span>ASSEMBLY
                    </h1>
                </motion.div>
                <div className='flex flex-col-reverse md:flex-row h-full'>
                    <div className='text-white flex-1 flex flex-col justify-center gap-y-6'>
                        <motion.h1
                            variants={animations['fadeUp']}
                            className='lg:text-[46px] text-3xl font-bold'
                        >
                            Добро пожаловать!
                        </motion.h1>
                        <motion.p
                            variants={animations['fadeLeft']}
                            className='text-gray-500 leading-5'
                        >
                            Хочешь себе мощный копм, но из ресурсов и навыков имеешь только деньги?
                        </motion.p>
                        <motion.p
                            variants={animations['fadeLeft']}
                            custom={1}
                            className='text-gray-500 leading-5'
                        >
                            Или может твой железный монстр тормозит и требует уборки?
                        </motion.p>
                        <motion.p
                            variants={animations['fadeLeft']}
                            custom={2}
                            className='text-gray-500 leading-5'
                        >
                            Или твоя операционная система устарела и ей срочно нужен апгрейд?
                        </motion.p>
                        <div className='grid grid-flow-col items-center'>
                            <span className='w-full h-[2px] bg-gray-300' />
                            <motion.p
                                variants={animations['fadeRight']}
                                custom={3}
                                className='text-right font-semibold text-lg text-gray-300'
                            >
                                Тогда я помогу тебе с решить эти вопросы
                            </motion.p>
                        </div>
                        <motion.div custom={4} variants={animations['fadeDown']} className='flex justify-end pt-10'>
                            <MButton onClick={() => animateScroll.scrollTo(window.innerHeight - 60)} icon={<ArrowDown />}>Давай начнем</MButton>
                        </motion.div>
                    </div>
                    <div className='max-md:h-24 h-full md:flex-1 relative flex items-center justify-end'>
                        <motion.div custom={1} variants={animations['fadeRight']} className='z-10'>
                            <Image className='max-md:h-36 w-auto' src={pc} alt='pc' />
                        </motion.div>
                        <motion.span custom={1.5} variants={animations['fadeRight']} className='absolute animate-pulse-slow w-[1px] h-[1px] rounded-full bg-[#974F23] shadow-[0px_0px_560px_205px_rgb(151,79,35)] top-1/2 right-56' />
                    </div>
                </div>
            </Container>
            <Image className='absolute w-full h-full top-0 -z-10 opacity-30 pointer-events-none' src={fon} alt='fon' />
            <span className='absolute w-full bottom-0 h-[1px] bg-black shadow-[0px_0px_60px_105px_rgb(0,0,0)]' />
        </motion.section>
    );
}

export default HomeScreen;