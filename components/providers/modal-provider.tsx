import ContactModal from "../modals/contact-modal";
import MoreDetailsModal from "../modals/mode-details-modal";

const ModalProvider = () => {
    return (
        <>
            <MoreDetailsModal />
            <ContactModal />
        </>
    );
}

export default ModalProvider;