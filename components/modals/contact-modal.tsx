import { useModal } from "@/hooks/use-modal-store";
import Modal from "../ui/modal";
import ContactBlock from "../contact-blok";
import logo from '@/public/assets/logo.jpg';


const ContactModal = () => {
    const { isOpen, onClose, type, data } = useModal();
    const { contactTitle } = data;

    const isModalOpen = isOpen && type === 'contact';

    return (
        <Modal isOpen={isModalOpen} onChangeClose={onClose}>
            <div className="p-4 flex flex-col gap-4">
                <div className="flex flex-col items-center">
                    <h1 className="text-white text-xl">{contactTitle}</h1>
                    <p className="text-gray-500">Свяжитесь с нами в ВК</p>
                </div>
                <div>
                    <ContactBlock
                        btnText="Написать"
                        href="https://vk.com/im?media=&sel=-224248018"
                        icon={logo}
                        title="PCASSEMBLY /// Cборка игровых ПК"
                        type="vk"
                        key={1}
                    />
                </div>
            </div>
        </Modal>
    );
}

export default ContactModal;