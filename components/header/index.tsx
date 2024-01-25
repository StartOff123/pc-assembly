'use client';

import React from 'react';
import classNames from 'classnames';
import { Exo_2 } from 'next/font/google';
import { Link } from 'react-scroll';

import Button from '@/components/button';
import Container from '@/components/Container';
import { menuLinks } from '@/settings/menu-links';
import { useModal } from '@/hooks/use-modal-store';
import { useBurgerMenu } from '@/hooks/use-burger-store';

const exo2 = Exo_2({ subsets: ['latin'] });

const Header = () => {
    const { onOpen } = useModal();
    const { onOpenMenu } = useBurgerMenu();

    const header = React.useRef<HTMLElement>(null);
    const [isScrolling, setIsScrolling] = React.useState<boolean>(false);

    const toggleScroll = () => {
        const currentScroll = window.scrollY;

        if (currentScroll !== 0) setIsScrolling(true)
        else setIsScrolling(false);
    };

    React.useEffect(() => {
        window.addEventListener('scroll', toggleScroll);
        window.addEventListener('load', toggleScroll);

        return () => {
            window.removeEventListener('scroll', toggleScroll);
            window.removeEventListener('load', toggleScroll);
        };
    }, []);

    return (
        <header ref={header} className={classNames(
            'fixed w-full z-40 transition-all',
            isScrolling ? 'py-3 bg-zinc-900' : 'py-7 bg-transparent'
        )}>
            <Container>
                <div className='flex justify-between items-center text-white'>
                    <div className='text-2xl font-light'>
                        <div className={exo2.className}>
                            PC<span className='font-bold'>ASSEMBLY</span>
                        </div>
                    </div>
                    <nav className='md:block hidden'>
                        <div className="flex gap-x-4">
                            {menuLinks.map(link => (
                                <Link
                                    to={link.href}
                                    duration={500}
                                    spy
                                    offset={-60}
                                    smooth
                                    className='font-semibold text-sm uppercase text-white hover:text-gray-300 transition' key={link.key} href={link.href}
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    </nav>
                    <div className='flex gap-4 items-center'>
                        <Button className='sm:block hidden' onClick={() => onOpen('contact', { contactTitle: 'Что-то заинтересовало?' })}>связаться с нами</Button>
                        <div className='relative w-8 h-4 cursor-pointer block md:hidden' onClick={onOpenMenu}>
                            <span className='absolute w-full h-[2px] bg-white' />
                            <span className='absolute w-3/4 h-[2px] bg-white top-1/2 -translate-y-1/2 right-0' />
                            <span className='absolute w-1/2 h-[2px] bg-white bottom-0 right-0' />
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
}

export default Header;