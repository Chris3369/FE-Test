import { useState, useRef, useEffect } from "react"
import { styled } from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

interface Props {
    open: boolean
    onClose: () => void,
    children: React.ReactNode
}

const Dialog = (props: Props) => {

    const { open, onClose, children } = props

    const [isModalOpen, setModalOpen] = useState(open);

    const modalRef = useRef<HTMLDialogElement | null>(null);

    useEffect(() => {
        setModalOpen(open);
    }, [open])

    useEffect(() => {
        const modalElement = modalRef.current;

        if (modalElement) {
            if (isModalOpen) {
                modalElement.showModal();
            } else {
                modalElement.close();
            }
        }
    }, [isModalOpen]);

    const handleCloseModal = () => {
        if (onClose) {
            onClose();
        }
        setModalOpen(false);
    };

    return (
        <Modal ref={modalRef} className="modal">
            <CloseBtn onClick={handleCloseModal}>
                <FontAwesomeIcon icon={faClose} />
            </CloseBtn>
            {children}
        </Modal>
    )
}

export default Dialog

const Modal = styled.dialog`
    padding: 1rem 0 0 0;
    border: 0;
    border-radius: 0.5rem;
    position: fixed;
    background: #d9d9d9;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &::backdrop {
        background: #e6e6e6;
    }
`

const CloseBtn = styled.div`
  float: right;
  padding: 0 1rem 1rem 1rem;
  cursor: pointer;
`