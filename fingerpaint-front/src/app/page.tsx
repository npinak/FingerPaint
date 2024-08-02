import { AppBar, Box, Container, Toolbar } from '@mui/material'

export default function Home() {
  return (
    <main id='main-page' style={{ height: '100%' }}>
      <AppBar position='sticky'>
        <Toolbar sx={{ height: '8%' }}></Toolbar>
      </AppBar>
      <Container sx={{}} id='main-section'>
        <Box>
          <p>Main Section</p>
        </Box>
      </Container>
    </main>
  )
}
