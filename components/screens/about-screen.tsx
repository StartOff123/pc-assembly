'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { useOrigin } from '@/hooks/use-origin';
import Container from '@/components/Container';
import ScreenTitle from '@/components/screen-title';
import buildPc from '@/public/assets/build-pc-fon.jpg';
import { whyUsList } from '@/settings/why-us-list';
import { animations } from '@/settings/animatios';

const AboutScreen = () => {
    const origin = useOrigin();

    return (
        <section id='about'>
            <Container>
                <div className='flex flex-col gap-y-6'>
                    <ScreenTitle>О нас</ScreenTitle>
                    <div className='my-6 relative'>
                        <div className='absolute bg z-10 grid grid-cols-3 h-full'>
                            <div className='flex items-center col-span-2'>
                                <motion.div
                                    initial='hidden'
                                    whileInView='visible'
                                    viewport={{ once: true }}
                                    variants={animations['fadeLeft']}
                                    custom={2}
                                    className='bg-[rgba(0,0,0,0.4)] p-5 rounded shadow-2xl flex flex-col gap-4'
                                >
                                    <h1 className='text-white text-3xl'>Кто мы такие?</h1>
                                    <p className='text-gray-400 leading-7'>
                                        Мы команда, работающая над реализацией крутых и мощных игровых сборок ПК.
                                        Находимся в Златоусте и предоставляем услуги и сборки только в пределах этого города (но с развитием будем внедрять систему доставки и работать по всей России).
                                        Наша задача - помочь людям собрать свой комп мечты. Мы не занимаемся кастомизацией корпусов, а лишь делаем красивые сборки из готовых компонентов на любой вкус и цвет.
                                        Также мы занимаемся клинингом системного блока и обновлением операционной системы.
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                        <div className='-z-10'>
                            <video src={origin + '/assets/video.mp4'} autoPlay muted loop />
                        </div>
                        <div className='absolute bg-black w-full h-full opacity-70 top-0 left-0' />
                        <div className='absolute w-full h-full top-0 left-0 shadow-[inset_0_0px_100px_80px_rgba(0,0,0,1)]' />
                    </div>
                    <div className='relative'>
                        <motion.div
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true }}
                            className='grid grid-cols-3 items-center overflow-hidden py-2'
                        >
                            <motion.span variants={animations['fadeLeft']} custom={2} className='w-full h-[1px] bg-gray-500' />
                            <motion.h1 variants={animations['fadeUp']} custom={2} className='text-white text-2xl text-center'>Почему именно мы?</motion.h1>
                            <motion.span variants={animations['fadeRight']} custom={2} className='w-full h-[1px] bg-gray-500' />
                        </motion.div>
                        <div className='absolute grid grid-cols-2 z-10 w-full h-full py-6'>
                            <motion.div initial='hidden' whileInView='visible' viewport={{ once: true }} variants={animations['fadeLeft']} custom={1} className='py-5 px-8 bg-zinc-900 col-start-2 rounded'>
                                <h1
                                    className='
                                        text-white
                                        text-2xl
                                        text-center
                                        pb-4
                                        mb-4
                                        relative
                                        before:absolute
                                        before:w-full
                                        before:h-[1px]
                                        before:bottom-0
                                        before:left-0
                                        before:bg-gradient-to-r
                                        before:from-indigo-500
                                        before:via-purple-500
                                        before:to-pink-500'
                                >
                                    Почему стоит выбрать именно нас
                                </h1>
                                <ul className='flex flex-col gap-2'>
                                    {whyUsList.map((item, i) => (
                                        <motion.li
                                            variants={animations['fadeLeft']}
                                            custom={item.animationDelay}
                                            className='
                                                text-gray-400 
                                                text-xl
                                                pl-6 
                                                relative 
                                                before:absolute
                                                before:w-2 
                                                before:h-2
                                                before:top-1/2 
                                                before:-translate-y-1/2 
                                                before:rounded-full
                                                before:bg-indigo-500
                                                before:left-0'
                                            key={i}
                                        >
                                            {item.content}
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                        <div className='relative h-[463px] my-7'>
                            <div className='opacity-35 absolute w-full h-full'>
                                <Image src={buildPc} alt='bpf' />
                            </div>
                            <div className='absolute w-full h-[463px] top-0 left-0 shadow-[inset_0_0px_100px_80px_rgba(0,0,0,1)]' />
                            <span className='absolute w-[1px] h-[1px] rounded-full bg-[#974F23] shadow-[0px_0px_560px_205px_rgb(189,0,0)] top-[232px] right-56 opacity-20' />
                        </div>
                    </div>
                </div>
            </Container>
        </section >
    );
}

export default AboutScreen;