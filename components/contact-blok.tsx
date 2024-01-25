import { StaticImageData } from "next/image";
import Image from "next/image";
import Button from "./button";
import VkSvg from "./svg/vkSvg";
import { useRouter } from "next/navigation";

type ContactBlockType = 'vk' | 'trlrgram';

interface ContactBlockProps {
    icon: StaticImageData;
    title: string;
    href: string;
    btnText: string;
    type: ContactBlockType;
}

const ContactBlock = ({ icon, title, btnText, href }: ContactBlockProps) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(href);
    };

    return (
        <div className='flex gap-2 bg-zinc-800 p-2 border-zinc-700 border-[1px]'>
            <div className='w-20 h-20 relative overflow-hidden rounded-full'>
                <Image className='absolute top-1/2 left-1/2 scale-125 -translate-x-1/2 -translate-y-1/2' src={icon} alt='logo' />
            </div>
            <div className='flex flex-col justify-between py-2'>
                <h1 className='text-gray-300 text-base'>{title}</h1>
                <div>
                    <Button onClick={handleClick} className='py-1' icon={<VkSvg />}>{btnText}</Button>
                </div>
            </div>
        </div>
    );
}

export default ContactBlock;