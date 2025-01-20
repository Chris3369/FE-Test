import { styled } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

interface Props {
    children: React.ReactNode
    cb: () => void
}

const Frame = ({ children, cb }: Props) => {
    return (
        <Container>
            <CloseBtn onClick={cb}>
                <FontAwesomeIcon icon={faClose} />
            </CloseBtn>
            <Content>
                {children}
            </Content>
        </Container>
    )
}

export default Frame

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: grey;
    width: 45rem;
    height: 45rem;
    margin: 1rem auto;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
`

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const CloseBtn = styled.div`
    align-self: flex-end;
    padding: 1rem;
    cursor: pointer;
`