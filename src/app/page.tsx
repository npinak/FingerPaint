'use client'
import { AppBar, Container, Toolbar } from '@mui/material'
import Toolbox from '@/components/Toolbox'
import Canvas from '@/components/canvas/index'
import { useRef } from 'react'

export default function Home() {
  const stageRef = useRef<any>()

  console.log(stageRef.current)

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
        maxWidth={false}
        id='main-container'
      >
        <Toolbox />
        <Canvas stageRef={stageRef} />
      </Container>
    </main>
  )
}
