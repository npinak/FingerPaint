import { Box, Button } from '@mui/material'
import Pen from '@/icons/pen'
import React from 'react'
import { select } from '@/store/toolSelection'
import { useAppDispatch } from '@/utils/TypeScriptHooks'
import { MuiColorInput } from 'mui-color-input' // todo use for color

//read this. https://blog.logrocket.com/canvas-manipulation-react-konva/

function Toolbox({ stageRef }: { stageRef: React.MutableRefObject<any> }) {
  const dispatch = useAppDispatch()
  function handleExport() {
    const uri = stageRef.current.toDataURL()
    const link = document.createElement('a')
    link.href = uri
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleToolSelection = (event: React.MouseEvent<HTMLElement>) => {
    dispatch(select(event.currentTarget.id))
  }

  return (
    <Box
      sx={{
        height: '70%',
        width: '8%',
        backgroundColor: '#f4f1de',
        marginTop: '40px',
        marginBottom: '40px',
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
      }}
    >
      <Button onClick={handleToolSelection} id='SELECT'>
        SELECT
      </Button>
      <Button onClick={handleToolSelection} id='SCRIBBLE'>
        <Pen />
      </Button>
      <Button id='CIRCLE' onClick={handleToolSelection}>
        Circle
      </Button>
      <Button id='RECTANGLE' onClick={handleToolSelection}>
        Rectangle
      </Button>
      <Button id='ARROW' onClick={handleToolSelection}>
        Arrow
      </Button>
      <Button id='ERASER' onClick={handleToolSelection}>
        Eraser
      </Button>
      <Button>Fill-Color</Button>
      <Button>Upload Image</Button>
      <Button onClick={handleExport}>Export</Button>
    </Box>
  )
}

export default Toolbox
