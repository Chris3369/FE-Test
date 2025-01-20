import { useState } from 'react';
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import styled from "styled-components"
import Icon from './Icon';

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
            <Icon icon={faCopy} color='white' bcColor='#3399ff' />
        </Button>
    );
};

export default CopyToClipboardButton;

const Button = styled.div`
    display: flex;
    cursor: pointer;
    margin-right: 1.5rem;

    p {
        line-height: 1.5rem;
        margin-right: 0.5rem;
        padding: 0.3rem 0 0 0;
    }

    &:hover {
        opacity: 0.6;
        color: white;
    }
`