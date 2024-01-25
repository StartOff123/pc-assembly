import React from 'react';
import { menuLinks } from '@/settings/menu-links';
import { X } from 'react-bootstrap-icons';
import { Link } from 'react-scroll';
import Button from './button';
import { useModal } from '@/hooks/use-modal-store';
import classNames from 'classnames';

interface BurgerMenuProps {
    isOpen: boolean;
    onChangeClose: () => void;
}

const BurgerMenu = ({ isOpen, onChangeClose }: BurgerMenuProps) => {
    const { onOpen } = useModal();

    const handleCloseClick = () => onChangeClose();

    React.useEffect(() => {
        // @ts-ignore
        document.body.style = isOpen ? 'overflow: hidden;' : 'overflow: auto;';
    }, [isOpen])
    return (
        <>
            <div className={classNames(
                "fixed block md:hidden bg-zinc-900 w-[250px] h-full z-[99] transition-all",
                isOpen ? 'right-0' : '-right-full'
            )}>
                <div className='flex flex-col gap-2'>
                    <div className='p-4 flex justify-between items-center border-b-[1px] border-zinc-800 pb-4'>
                        <h1 className='text-gray-400'>Меню</h1>
                        <X className="cursor-pointer text-gray-300 hover:text-gray-500 transition" onClick={handleCloseClick} size={32} />
                    </div>
                    <nav className='flex flex-col'>
                        {menuLinks.map(link => (
                            <Link
                                to={link.href}
                                duration={500}
                                spy
                                offset={-60}
                                smooth
                                activeClass='bg-zinc-800'
                                className='font-semibold text-sm uppercase text-white hover:text-gray-300 transition py-3 px-4' key={link.key} href={link.href}
                            >
                                {link.title}
                            </Link>
                        ))}
                    </nav>
                    <div className='pt-4 border-t-[1px] border-zinc-800 flex justify-center'>
                        <Button onClick={() => onOpen('contact', { contactTitle: 'Что-то заинтересовало?' })}>связаться с нами</Button>
                    </div>
                </div>
            </div>
            <span className={classNames(
                "fixed bg-black h-full w-full z-[98] transition-all",
                isOpen ? 'opacity-70 pointer-events-auto' : 'opacity-0 pointer-events-none',
            )} onClick={handleCloseClick} />
        </>
    );
}

export default BurgerMenu;