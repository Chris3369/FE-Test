import { useState } from 'react'
import { ThemeProvider, createGlobalStyle, styled } from 'styled-components'
import Dialog from './components/Dialog'
import QRCode from './components/QRCode'
import ClassRoom from './components/ClassRoom'

const theme = {
  colors: {
    body: 'white',
  }
}

const App = () => {

  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)

  const ID = "X58E9647"
  const LINK = "https://www.classswift.viewsonic.io/"

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Button onClick={() => setOpen1(true)}>QRCode</Button>
        <Button onClick={() => setOpen2(true)}>ClassRoom</Button>

        <Dialog open={open1} onClose={() => setOpen1(false)}>
          <QRCode id={ID} link={LINK} />
        </Dialog>

        <Dialog open={open2} onClose={() => setOpen2(false)}>
          <ClassRoom />
        </Dialog>

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
      font-family: 'Verdana', sans-serif;
      font-weight: 400;
      background: ${({ theme }) => theme.colors.body};
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const Button = styled.button`
  margin: 0 10px;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`