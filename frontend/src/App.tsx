import { useState } from 'react'
import { ThemeProvider, createGlobalStyle, styled } from 'styled-components'
import QRCode from './components/QRCode'
import ClassRoom from './components/ClassRoom'

import Frame from './components/Frame'

const theme = {
  colors: {
    body: 'white',
  }
}

const App = () => {

  const [open1, setOpen1] = useState(true)
  const [open2, setOpen2] = useState(true)

  const ID = "X58E9647"
  const LINK = "https://www.classswift.viewsonic.io/"

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        {open1 && (
          <Frame cb={() => setOpen1(false)}>
            <QRCode id={ID} link={LINK} />
          </Frame>
        )}

        {open2 && (
          <Frame cb={() => setOpen2(false)}>
            <ClassRoom />
          </Frame>
        )}
      </Container>
    </ThemeProvider>
  )
}

export default App

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  body {
      font-family: 'Arial', sans-serif;
      font-weight: 400;
      background: ${({ theme }) => theme.colors.body};
  }
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 100vh;
`