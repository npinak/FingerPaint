'use client'
import { Box } from '@mui/material'
import React, { useRef, useState } from 'react'
import { ACTIONS } from '@/utils/constant'
import { Stage, Layer } from 'react-konva'

function Canvas() {
  const stageRef = useRef<any>()

  const [action, setAction] = useState(ACTIONS.SELECT)

  //todo add dynamic stage sizing after initial setup is complete.

  function onPointerDown() {}

  function onPointerMove() {}

  function onPointerUp() {}
  return (
    <Box
      sx={{
        height: '90%',
        width: '75%',
        backgroundColor: '#f4f1de',
        marginTop: '40px',
      }}
    >
      <Stage
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        ref={stageRef}
        height={200}
        width={300}
      >
        <Layer></Layer>
      </Stage>
    </Box>
  )
}

export default Canvas
