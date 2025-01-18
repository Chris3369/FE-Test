import styled from "styled-components"
import { QRCodeSVG } from 'qrcode.react'
import CopyToClipboardButton from "./CopyToClipboardButton"

interface Props {
    id: string
    link: string
}

const QRCode = (props: Props) => {
    const { id, link } = props
    return (
        <Container>
            <BackLink>Back to Class List</BackLink>
            <Title>Join 302 Science</Title>
            <Info>
                <CopyToClipboardButton content={`ID: ${id}`} value={id} />
                <CopyToClipboardButton content="Link" value={link} />
            </Info>
            <QRCodeSVG size={400} value={link} />
        </Container>
    )
}

export default QRCode

const Container = styled.div`
    margin:0 2rem
`

const BackLink = styled.p`
    text-decoration: none;
    color: black;
    font-size:0.5rem
`

const Title = styled.p`
    color: black;
    margin: 0.5rem 0;
`

const Info = styled.div`
    display: flex;
    align-items: center;
    margin: 0 0 1rem 0;
`
