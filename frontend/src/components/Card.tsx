import { styled } from "styled-components"
import Student from "../types/Student"
import CounterBtn from "./CounterBtn"

const pad = (num: number, size: number) => {
    let s = num.toString();
    while (s.length < size) s = "0" + num;
    return s;
}

const Card = (props: Student) => {
    const { name, active, score, id } = props

    return (
        <Container>
            <Header $active={active}>{pad(id, 2)}</Header>
            <Content $active={active}>{name}</Content>
            <Footer $active={active}>
                <CounterBtn {...props} type="decrement" />
                <span>{score}</span>
                <CounterBtn {...props} type="increment" />
            </Footer>
        </Container>
    )
}

export default Card

const Container = styled.div`
    width: 7.5rem;
    height: 7.5rem;
    background: white;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
`

const Header = styled.div<{ $active: boolean }>`
    width: 100%;
    height: 1.5rem;
    background: ${props => props.$active ? "#3399ff" : "#b3b3b3"};
    color: white;
    border-radius: 0.5rem 0.5rem 0 0;
    text-align: center;
    line-height: 1.5rem;
`

const Content = styled.div<{ $active: boolean }>`
    width: 100%;
    height: 4rem;
    background: white;
    color: ${props => props.$active ? "#000000" : "#b3b3b3"};
    text-align: center;
    line-height: 4rem;
    padding: 0 0.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Footer = styled.div<{ $active: boolean }>`
    width: 100%;
    height: 1.5rem;
    line-height: 1.5rem;
    padding-top: 0.5rem;
    background: white;
    border-top: 1px solid ${props => props.$active ? "#3399ff" : "#b3b3b3"};
    color: ${props => props.$active ? "#000000" : "#b3b3b3"};
    display: flex;
    justify-content: space-evenly;
    align-items: center;`