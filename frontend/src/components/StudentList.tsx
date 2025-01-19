import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { styled } from "styled-components"
import {
  fetchStudents,
  getStudents,
  getStatus,
} from "../store/student"
import { AppDispatch } from "../store"
import Card from "./Card"

const StudentList = () => {
  const dispatch = useDispatch<AppDispatch>()

  const students = useSelector(getStudents)
  const status = useSelector(getStatus)

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchStudents())
    }
  }, [status, dispatch])

  return (
    <Container>
      {students.map(student => (
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
`