import { styled } from "styled-components"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../store"
import { increment, decrement } from "../store/student"
import Student from "../types/Student"

interface Props extends Student {
    type: "increment" | "decrement"
}

const CounterBtn = ({ id, type, active, score }: Props) => {

    const dispatch = useDispatch<AppDispatch>()

    const isActive = active ? type === "decrement" ? score > 0 : true : false

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation()
        
        if (!isActive) return

        if (type === "decrement") {
            dispatch(decrement({ id }))
        } else {
            dispatch(increment({ id }))
        }
    }

    return (
        <Container
            $active={isActive}
            $increment={type === "increment"}
            onClick={handleClick}>
            <span>1</span>
        </Container>
    )
}

export default CounterBtn

interface StyleProps {
    $increment?: boolean
    $active?: boolean
}

const Container = styled.div<StyleProps>`
    background: ${props => props.$active ? props.$increment ? "green" : "red" : "#b3b3b3"};
    color: white;
    font-size: 14px;
    width: 2rem;
    height: 1.5rem;
    border-radius: 15%;
    cursor: ${props => props.$active ? "pointer" : "default"};
    padding: 0 0.5rem;
    line-height: 1.5rem;

    &:hover {
        opacity: ${props => props.$active ? 0.6 : 1};
    }

    &:before {
        content: "${props => props.$increment ? `\\002B` : `\\002D`}";
    }
`