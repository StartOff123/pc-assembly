import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import { IServicesList } from '@/settings/services-list';
import Button from './button';
import { redirectToOrder } from '@/utils/redirect-to-order';

interface ServicesProps {
    item: IServicesList;
}

const Services = ({ item }: ServicesProps) => {
    const [isMove, setIsMove] = React.useState<boolean>(false);

    return (
        <div
            className='bg-zinc-900 rounded-lg overflow-hidden'
            onMouseMove={() => setIsMove(true)}
            onMouseLeave={() => setIsMove(false)}
        >
            <div className='relative w-full h-[190px] overflow-hidden'>
                <Image
                    className={classNames(
                        'absolute left-0 top-1/2 -translate-y-1/2 transition-all',
                        isMove && 'scale-105'
                    )}
                    src={item.image}
                    alt='img' />
            </div>
            <div className='flex gap-4 py-4 px-6 flex-col h-[calc(100%-190px)]'>
                <div className='flex-1 flex flex-col gap-2'>
                    <h1 className='text-white text-xl font-semibold'>{item.title}</h1>
                    <p className='text-gray-500'>{item.discription}</p>
                    <ul>
                        {item.list.map((listItem, i) => (
                            <li className='text-gray-400 pl-6 relative before:absolute before:w-2 before:h-2 before:top-1/2 before:-translate-y-1/2 before:rounded-full before:bg-indigo-500 before:left-0' key={i}>{listItem}</li>
                        ))}
                    </ul>
                </div>
                <div className='w-full'>
                    <Button className='w-full justify-center' onClick={() => redirectToOrder(item.type)}>{item.btnText}</Button>
                </div>
            </div>
        </div>
    );
}

export default Services;