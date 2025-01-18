import { useState } from 'react'
import styled from "styled-components"
import StudentList from './StudentList'
import StudentGroup from './StudentGroup'

const ClassRoom = () => {

  const tabs = [
    { id: 1, name: 'Student List' },
    { id: 2, name: 'Group' }
  ]

  const [tabId, setTabId] = useState(1)

  return (
    <TabContainer>
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
      </NavTab>

      <Content>
        {tabId === 1 && <StudentList />}
        {tabId === 2 && <StudentGroup />}
      </Content>
    </TabContainer>
  )
}

export default ClassRoom

const TabContainer = styled.div`
  width: 800px;
  min-height: 500px;
  margin: 0 ;
`

const NavTab = styled.ul`
  list-style: none;
  padding: 0;
  margin-left: 2rem;
  display: flex;
`
const Tab = styled.li<{ $active: boolean }>`
  padding: 0 20px;
  line-height: 50px;
  font-weight: bold;
  color: ${props => props.$active ? '#3399ff' : 'black'};
  background: ${props => props.$active ? 'white' : '#b3b3b3'};
  border-radius: 5px 5px 0 0;
  cursor: pointer;
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