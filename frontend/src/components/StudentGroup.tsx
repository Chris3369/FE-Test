import { useSelector } from "react-redux"
import { styled } from "styled-components"
import Student from "../types/Student"
import { getStudents } from "../store/student"
import Card from "./Card"

const randomSplitIntoGroups = (students: Student[], groupCount: number) => {
  const groups: Student[][] = Array.from({ length: groupCount }, () => [])
  students.forEach((item, index) => {
    groups[index % groupCount].push(item);
  })
  return groups;
}


const StudentGroup = () => {

  const students = useSelector(getStudents)
  const groups = randomSplitIntoGroups(students, 6)

  return (
    <Container>
      {groups.map((group, index) => (
        <GroupContainer key={index}>
          <h2>Group {index + 1}</h2>
          <Group>
          {group.map((student) => (
            <Card key={student.id} {...student} />
          ))}
          </Group>
        </GroupContainer>
      ))}
    </Container>
  )
}

export default StudentGroup

const Container = styled.div`
  padding: 0 1rem 1rem 1rem
`

const GroupContainer = styled.div`
padding: 1rem;
margin: 1rem 0;
border-radius: 5px;
box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
`

const Group = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem auto;
`