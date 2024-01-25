import { IQuestionsList } from "@/settings/questions-list";
import { XLg } from 'react-bootstrap-icons';
import React from "react";
import classNames from "classnames";
import { motion } from "framer-motion";
import { animations } from "@/settings/animatios";

interface AccordionProps {
    className?: string;
    children: React.ReactNode;
}

interface AccordionItemProps {
    items: IQuestionsList[];
}

interface AccordionItemRoopProps {
    id: number;
    title: string;
    children: React.ReactNode;
    isOpen: boolean;
    onClick: (id: number) => void;
}

export const Accordion = ({ className, children }: AccordionProps) => {
    const ref = React.useRef<HTMLDivElement>(null);

    // @ts-ignore
    const items: IQuestionsList[] = children.props.items as IQuestionsList[];
    const [currentOpenItemId, setCurrentOpenItemId] = React.useState<number | null>(null);

    const handleClickItem = (id: number) => {
        if (id === currentOpenItemId) return setCurrentOpenItemId(null);
        setCurrentOpenItemId(id);
    };

    React.useEffect(() => {
        const handleClickOutside = (event: any) => ref.current?.contains(event.target) || setCurrentOpenItemId(null);
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <motion.div initial='hidden' whileInView='visible' viewport={{ once: true }} ref={ref} className={className}>
            {items.map((item, i) => (
                <AccordionItemRoot variants={animations['fadeLeft']} custom={i + 1.2} id={i} onClick={handleClickItem} key={i} title={item.title} isOpen={currentOpenItemId === i ? true : false}>
                    {item.children}
                </AccordionItemRoot>
            ))}
        </motion.div>
    );
}

const AccordionItemRoot = motion(React.forwardRef<HTMLDivElement, AccordionItemRoopProps>(({ children, title, isOpen, onClick, id }, ref) => {
    const rootRef = React.useRef<HTMLDivElement>(null);

    return (
        <div ref={ref} className="rounded-lg overflow-hidden">
            <div onClick={() => onClick(id)} className="bg-zinc-900 flex justify-between items-center p-4 text-gray-300 cursor-pointer hover:bg-zinc-800 transition">
                <h1>{title}</h1>
                <span className={classNames(
                    'transition-all',
                    !isOpen && "rotate-45"
                )}><XLg /></span>
            </div>
            <div ref={rootRef} className={classNames(
                "bg-zinc-950 overflow-hidden transition-all px-4",
                isOpen ? `py-4 max-h-[${rootRef.current?.scrollHeight}px]` : 'max-h-0 py-0'
            )}
                style={isOpen ? { maxHeight: `${rootRef.current ? rootRef.current.scrollHeight + 32 : 0}px` } : { maxHeight: '0px' }}
            >
                {children}
            </div>
        </div>
    );
}))

export const AccordionItems: React.FC<AccordionItemProps> = () => <></>;
