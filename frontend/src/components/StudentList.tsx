import { useSelector } from "react-redux"
import { styled } from "styled-components"
import { getStudents } from "../store/student"
import Card from "./Card"

const StudentList = () => {

  const students = useSelector(getStudents)

  return (
    <Container>
      {students.length > 0 && students.map(student => (
        <Card key={student.id} {...student} />
      ))}
    </Container>
  )
}

export default StudentList

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 0 auto;
  padding: 1rem;

  height: 37rem;
  width:100%;
  overflow-y: scroll;
`