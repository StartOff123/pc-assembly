import { useModal } from "@/hooks/use-modal-store";
import Modal from "../ui/modal";
import { Carousel } from "antd";
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Cart } from "react-bootstrap-icons";
import Button from "../button";
import { numberWithSpaces } from "@/utils/number-with-spaces";

import fon from '@/public/assets/fon.jpg';
import React from "react";
import Equipment from "../equipment";
import { redirectToOrder } from "@/utils/redirect-to-order";

const MoreDetailsModal = () => {
    const { isOpen, onClose, type, data } = useModal();
    const isModalOpen = isOpen && type === 'modeDetails';
    const { assembly } = data;

    return (
        <Modal isScrollContent className="w-11/12 max-w-[1176px]" isOpen={isModalOpen} onChangeClose={onClose} headerTitle={assembly?.title}>
            <div className="flex flex-col gap-2">
                <div className="grid grid-cols-7 p-4 gap-4 relative overflow-hidden">
                    <div className="flex flex-col col-span-3 z-10 p-4">
                        <div className="flex flex-col gap-3 flex-1">
                            <h1 className="text-white text-3xl font-semibold">{assembly?.title}</h1>
                            <p className="text-gray-400 text-lg">{assembly?.description}</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <Button onClick={() => assembly && redirectToOrder(assembly?.assemblyId)} textClassName="text-xl" icon={<Cart size={20} />}>заказать</Button>
                            <p className="text-indigo-400 text-3xl font-semibold">{numberWithSpaces(assembly?.price)} ₽</p>
                        </div>
                    </div>
                    <div className="col-span-4 relative">
                        <Carousel
                            arrows
                            className='z-10'
                            nextArrow={
                                <ArrowRight color='#fff' />
                            }
                            prevArrow={<ArrowLeft color='#fff' />}
                        >
                            {assembly?.images.map((image, i) => (
                                <div className="h-[500px] relative">
                                    <Image className="absolute h-full w-auto left-1/2 -translate-x-1/2" src={image} alt="img" />
                                </div>
                            ))}
                        </Carousel>
                        <span className='absolute w-[1px] h-[1px] rounded-full bg-[#974F23] shadow-[0px_0px_160px_150px_rgb(255,255,255)] top-1/2 left-1/2 -translate-y-1/2' />
                    </div>
                    <Image className="absolute z-0 opacity-35" src={fon} alt="fon" />
                </div>
                {assembly && <Equipment list={assembly.components} assemblyId={assembly.assemblyId} />}
            </div>
        </Modal>
    );
}

export default MoreDetailsModal;