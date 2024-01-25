import React from 'react';
import Image from 'next/image';
import { Carousel } from 'antd';
import { ArrowRight, ArrowLeft } from 'react-bootstrap-icons';

import Button from '@/components/button';
import { IAssembly } from '@/settings/assembly';
import { numberWithSpaces } from '@/utils/number-with-spaces';
import { useModal } from '@/hooks/use-modal-store';
import { redirectToOrder } from '@/utils/redirect-to-order';

interface CardPcProps {
    item: IAssembly;
}

export const CardPc = React.forwardRef<HTMLDivElement, CardPcProps>(({ item }, ref) => {
    const { onOpen } = useModal();

    const [hover, setHover] = React.useState<boolean>(false);

    return (
        <div
            ref={ref}
            className='flex flex-col gap-4 bg-transparent hover:bg-[#0f0f0f] cursor-pointer py-6 px-8 rounded-lg transition-all hover:shadow-2xl shadow-black relative'
            onMouseMove={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <Carousel
                arrows={hover}
                className='z-10'
                nextArrow={
                    <ArrowRight color='#fff' />
                }
                prevArrow={<ArrowLeft color='#fff' />}
                dots={hover}
            >
                {item.images.map((image, i) => (
                    <div className='relative h-[300px]'>
                        <Image className='absolute h-full  w-auto left-1/2 -translate-x-1/2' key={i} src={image} alt='PC' />
                    </div>
                ))}
            </Carousel>
            <div>
                <div className='relative pb-4 mb-4 before:absolute before:w-full before:h-[1px] before:bg-gray-500 before:bottom-0'>
                    <h1 className='font-semibold text-white'>{item.title}</h1>
                    <p className='text-gray-400'>{item.subtitle}</p>
                    <p className='text-indigo-500 font-bold text-2xl py-4'>{numberWithSpaces(item.price)} ₽</p>
                </div>
                <div className='flex items-center gap-2'>
                    <Button onClick={() => redirectToOrder(item.assemblyId)}>Заказать</Button>
                    {hover && <Button btnType='default' onClick={() => onOpen('modeDetails', { assembly: item })}>Подробнее</Button>}
                </div>
            </div>
            <span className='absolute w-[1px] h-[1px] rounded-full bg-[#974F23] shadow-[0px_0px_160px_50px_rgb(255,255,255)] top-40 left-1/2 -translate-x-1/2' />
        </div>
    );
});