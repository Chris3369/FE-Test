import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import styled from "styled-components"

interface Props {
    icon: IconDefinition
    color?: string
    bcColor?: string
}

const Icon = ({ icon, color, bcColor }: Props) => {
    return (
        <Container $bcColor={bcColor}>
            <FontAwesomeIcon color={color} icon={icon} />
        </Container>
    )
}

export default Icon

const Container = styled.span<{ $bcColor?: string }>`
    background-color: ${props => props.$bcColor};
    padding: 0.3rem 0.4rem;
    border-radius: 0.3rem;
`