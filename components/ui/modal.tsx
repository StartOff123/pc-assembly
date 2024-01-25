import React from "react";
import classNames from "classnames";
import { X } from 'react-bootstrap-icons';

interface ModalProps {
    children: React.ReactNode;
    className?: string;
    isOpen: boolean;
    headerTitle?: string;
    onChangeClose: () => void;
    isScrollContent?: boolean;
}

const Modal = ({ children, className, isOpen, onChangeClose, headerTitle, isScrollContent }: ModalProps) => {
    const [heightContent, setHeigthContent] = React.useState<number>(0);
    
    const handleCloseClick = () => onChangeClose();
    
    React.useEffect(() => {
        setHeigthContent(window.innerHeight - 104);

        window.addEventListener('resize',() =>  setHeigthContent(window.innerHeight - 104));

        return () =>  window.removeEventListener('resize',() =>  setHeigthContent(window.innerHeight - 104));
    }, []);
    
    React.useEffect(() => {
        // @ts-ignore
        document.body.style = isOpen ? 'overflow: hidden;' : 'overflow: auto;';
    }, [isOpen])

    return (
        <>
            <div className={classNames(
                'fixed z-[99] transition-all top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-900 rounded-sm',
                isOpen ? 'opacity-1 pointer-events-auto' : 'opacity-0 pointer-events-none',
                isScrollContent && 'overflow-hidden h-[calc(100%-50px)]',
                className
            )}>
                <div className="flex flex-col">
                    <div className={classNames(
                        "flex items-center p-3 pl-5",
                        headerTitle ? 'justify-between' : 'justify-end',
                        isScrollContent && 'fixed w-full'
                    )}>
                        {headerTitle && <h1 className="text-gray-400">{headerTitle}</h1>}
                        <X className="cursor-pointer text-gray-300 hover:text-gray-500 transition" onClick={handleCloseClick} size={30} />
                    </div>
                    <div
                        className={classNames(
                            isScrollContent && `mt-[54px] overflow-auto`
                        )}
                        style={isScrollContent ? { height: heightContent } : {}}
                    >
                        {children}
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

export default Modal;