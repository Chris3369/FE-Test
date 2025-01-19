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
            <QRCodeWraper size={400} value={link} />
        </Container>
    )
}

export default QRCode

const Container = styled.div`
    margin: 0.5rem 2rem 2rem 2rem
`

const BackLink = styled.p`
    color: black;
    font-size:0.6rem;

    &:before {
        content: "\\276E    ";
    }
`

const Title = styled.p`
    color: black;
    margin: 0.5rem 0;
`

const Info = styled.div`
    display: flex;
    align-items: flex-end;
    margin: 0 0 1rem 0;
`
const QRCodeWraper = styled(QRCodeSVG)`
    padding: 1rem;
    background-color: white;
`