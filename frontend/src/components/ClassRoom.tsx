import { useState } from 'react'
import styled from "styled-components"
import { useSelector } from "react-redux"
import { faUser } from '@fortawesome/free-solid-svg-icons'
import StudentList from './StudentList'
import StudentGroup from './StudentGroup'
import { getName, getActiveStudentCount, getTotalStudentCount } from "../store/student"
import Icon from './Icon'
import Popup from './Popup'

const ClassRoom = () => {

  const tabs = [
    { id: 1, name: 'Student List' },
    { id: 2, name: 'Group' }
  ]

  const name = useSelector(getName)
  const activeCount = useSelector(getActiveStudentCount)
  const totalCount = useSelector(getTotalStudentCount)

  const [tabId, setTabId] = useState(1)

  const renderMenu = () => {
    return (
      <Menu>
        <li>Option 1</li>
        <li>Option 2</li>
        <li>Option 3</li>
      </Menu>
    )
  }

  return (

    <div>
      <Header>
        <h3>{name}</h3>
        <Icon icon={faUser} />
        <p>{`${activeCount}/${totalCount}`}</p>
      </Header>

      <NavTab>
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            $active={tab.id === tabId}
            onClick={() => setTabId(tab.id)}
          >
            {tab.name}
          </Tab>
        ))}

        <Ellipsis>
          <Popup children={renderMenu()} />
        </Ellipsis>
      </NavTab>

      <Content>
        {tabId === 1 && <StudentList />}
        {tabId === 2 && <StudentGroup />}
      </Content>
    </div>

  )
}

export default ClassRoom

const Header = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 2rem;
  font-weight: bold;

  h3 {
    margin-right: 1rem;
  }
`

const NavTab = styled.ul`
  list-style: none;
  padding: 0;
  margin-left: 2rem;
  display: flex;
`
const Tab = styled.li<{ $active?: boolean }>`
  padding: 0 20px;
  line-height: 50px;
  font-weight: bold;
  color: ${props => props.$active ? '#3399ff' : 'black'};
  background: ${props => props.$active ? 'white' : '#b3b3b3'};
  border-radius: 5px 5px 0 0;
  cursor: pointer;
  margin-right: 0.5rem;
`

const Ellipsis = styled.li`
  padding: 0 20px;
  line-height: 50px;
  font-weight: bold;
  cursor: pointer;
  margin-right: 2rem;
  margin-left:auto
`

const Content = styled.div`
  display: flex;
  width: 100%;
  heught: 100%;
  background: white;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-top: none;
  border-top-width: 0;
`

const Menu = styled.ul`
  list-style: none;
  line-height: 2rem;

  li {
      font-weight: normal;
      color: grey;
      cursor: pointer;

      &:hover {
          color: black;
      }
  }
`