import { Box, Button } from '@mui/material'
import Pen from '@/icons/pen'

import React from 'react'

//read this. https://blog.logrocket.com/canvas-manipulation-react-konva/

function Toolbox() {
  return (
    <Box
      sx={{
        height: '30%',
        width: '8%',
        backgroundColor: '#f4f1de',
        marginTop: '40px',
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'column',
      }}
    >
      <Button>
        <Pen />
      </Button>

      <Button>Eraser</Button>
      <Button>Fill-Color</Button>
      <Button>Upload Image</Button>
    </Box>
  )
}

export default Toolbox
