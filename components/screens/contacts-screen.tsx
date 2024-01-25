import { menuLinks } from '@/settings/menu-links';
import Container from '../Container';
import Image from 'next/image';

import logo from '@/public/assets/logo.jpg';
import Button from '../button';
import VkSvg from '../svg/vkSvg';
import { Exo_2 } from 'next/font/google';
import ContactBlock from '../contact-blok';
import { Link } from 'react-scroll';

const exo2 = Exo_2({ subsets: ['latin'] });

const ContactsScreen = () => {
    return (
        <section id='contacts' className="z-20">
            <Container>
                <div className='py-4 flex flex-col gap-14'>
                    <nav className='relative before:absolute before:w-full before:h-[1px] before:bg-zinc-500 before:-bottom-4'>
                        <div className="flex gap-x-4 justify-center">
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
                    <div>
                        <div className='grid grid-cols-2 gap-8'>
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-gray-300 text-lg'>Мы во ВКонтакте</h1>
                                <ContactBlock
                                    icon={logo}
                                    href='https://vk.com/pcassembly_zlat'
                                    btnText='Перейти'
                                    title='PCASSEMBLY /// Cборка игровых ПК'
                                    type='vk'
                                    key={2}
                                />
                            </div>
                            <div className='flex items-center'>
                                <div className='text-3xl text-white font-light'>
                                    <div className={exo2.className}>
                                        PC<span className='font-bold'>ASSEMBLY</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-end'>
                            <p className='text-gray-600 text-sm'>© 2024 PCASSEMBLY</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default ContactsScreen;