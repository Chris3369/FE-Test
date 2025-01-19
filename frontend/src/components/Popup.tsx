import { useEffect, useState } from 'react'
import { styled } from "styled-components"
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import Icon from './Icon'

interface Props {
    children: React.ReactNode
}

const Popup = ({ children }: Props) => {
    const [visible, setVisible] = useState(false)

    const togglePopup = () => setVisible(!visible)

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setVisible(false)
        }, 3000)

        return () => clearTimeout(timeoutId)
    }, [visible])

    return (
        <Container>
            <div onClick={togglePopup}>
                <Icon icon={faEllipsisVertical} />
            </div>
            {visible && <Content>{children}</Content>}
        </Container>
    )
}

export default Popup

const Container = styled.div`
    position: relative; 
    display: inline-block;
`

const Content = styled.div`
    width: 100px;
    position: absolute;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    border-radius: 5px;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
    padding: 0 1rem;
    zIndex: 1000;
`