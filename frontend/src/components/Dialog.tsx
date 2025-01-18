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
    padding: 2rem;
    border: 0;
    border-radius: 0.5rem;
    border-radius: 1rem;
    position: fixed;
    box-shadow: hsl(0 0% 0% / 10%) 0 0 0.5rem 0.25rem;
    border: 1px solid #ccc;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

  &::backdrop {
    background: rgba(0, 0, 0, 0.5);
  }
`

const CloseBtn = styled.div`
  float: right;
  padding: 0 0 1rem 1rem;
  cursor: pointer;
`