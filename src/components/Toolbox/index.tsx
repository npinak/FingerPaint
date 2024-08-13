'use client'

import { Box, Button } from '@mui/material'
import React from 'react'
import { select } from '@/store/toolSelection'
import { useAppDispatch } from '@/utils/TypeScriptHooks'
import { styled } from '@mui/system'
import { Pencil, Hand, Circle, Rectangle, ArrowUp } from '@phosphor-icons/react'
// import { MuiColorInput } from 'mui-color-input' // todo use for color

const StyledButton = styled(Button)({
  height: '10%',
  width: '10%',
})

function Toolbox() {
  const dispatch = useAppDispatch()

  // const _handleExport =() => {
  //   const uri = stageRef.current.toDataURL()
  //   const link = document.createElement('a')
  //   link.href = uri
  //   document.body.appendChild(link)
  //   link.click()
  //   document.body.removeChild(link)
  // }

  const handleToolSelection = (event: React.MouseEvent<HTMLElement>) => {
    dispatch(select(event.currentTarget.id))
  }

  return (
    <Box
      sx={{
        height: '50%',
        maxHeight: '600px',
        width: '8%',
        backgroundColor: '#f4f1de',
        marginTop: '40px',
        marginBottom: '40px',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <StyledButton onClick={handleToolSelection} id='SELECT'>
        <Hand size={28} color='black' />
      </StyledButton>
      <StyledButton onClick={handleToolSelection} id='SCRIBBLE'>
        <Pencil size={28} color='black' />
      </StyledButton>
      <Button id='CIRCLE' onClick={handleToolSelection}>
        <Circle size={28} color='black' />
      </Button>
      <Button id='RECTANGLE' onClick={handleToolSelection}>
        <Rectangle size={28} color='black' />
      </Button>
      <Button id='ARROW' onClick={handleToolSelection}>
        <ArrowUp size={28} color='black' />
      </Button>
      {/* <Button id='ERASER' onClick={handleToolSelection}>
        Eraser
      </Button> */}
      {/* <Button>Fill-Color</Button> */}
      {/* <Button>Upload Image</Button> */}
      {/* <Button onClick={handleExport}>Export</Button> */}
    </Box>
  )
}

export default Toolbox
