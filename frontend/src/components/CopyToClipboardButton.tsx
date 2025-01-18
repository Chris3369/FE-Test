import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import styled from "styled-components"

const useCopyToClipboard = () => {
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = async (content: string) => {
        try {
            await navigator.clipboard.writeText(content);
            setIsCopied(true);
        } catch (error) {
            setIsCopied(false);
        }
    };

    return { isCopied, copyToClipboard };
};

interface Props {
    content: string
    value: string
}

const CopyToClipboardButton = ({ content, value }: Props) => {
    const { copyToClipboard } = useCopyToClipboard();

    return (
        <Button onClick={() => copyToClipboard(value)}>
            <p>{content}</p>
            <FontAwesomeIcon color="#3399ff" icon={faCopy} />
        </Button>
    );
};

export default CopyToClipboardButton;

const Button = styled.div`
    display: flex;
    cursor: pointer;
    margin-right: 1.5rem;

    p {
        margin-right: 0.2rem;
    }
`