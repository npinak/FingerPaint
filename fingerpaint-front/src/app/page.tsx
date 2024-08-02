import { AppBar, Box, Container, Toolbar } from '@mui/material'

export default function Home() {
  return (
    <main id='main-page' style={{ height: '100%', padding: '8px' }}>
      <AppBar position='sticky'>
        <Toolbar sx={{ height: '8%' }}></Toolbar>
      </AppBar>
      <Container
        sx={{
          margin: 0,
          padding: '0px',
          backgroundColor: '#e5e5e5',
          display: 'flex',
          height: '92%',
          justifyContent: 'space-around',
        }}
        maxWidth='xl'
        // disableGutters
        id='main-section'
      >
        <Box
          sx={{
            height: '30%',
            width: '8%',
            backgroundColor: '#f4f1de',
            marginTop: '40px',
          }}
        >
          {' '}
          ToolBar
        </Box>
        <Box
          sx={{
            height: '90%',
            width: '75%',
            backgroundColor: '#f4f1de',
            marginTop: '40px',
          }}
        >
          <p>Drawing Board</p>
        </Box>
      </Container>
    </main>
  )
}
