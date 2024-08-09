'use client'
import { Box } from '@mui/material'
import React, { useRef, useState } from 'react'
import { Stage, Layer, Rect } from 'react-konva'
import { useAppSelector } from '@/utils/TypeScriptHooks'
import { uuid } from 'uuidv4'
import type { Rectangle } from './canvas.types'

//todo add dynamic stage sizing after initial setup is complete.

function Canvas({ stageRef }: { stageRef: React.MutableRefObject<any> }) {
  const [fillColor, setFillColor] = useState('#ff0000')
  const [rectangles, setRectangles] = useState<Rectangle[]>([])

  const isPainting = useRef<boolean>(false)
  const currentShapeID = useRef<string>('')
  const strokeColor = '#000'
  const toolSelected = useAppSelector(state => state.toolSelection.value)

  function onPointerMove() {
    if (toolSelected === 'SELECT' || !isPainting.current) return

    const stage = stageRef.current
    const { x, y } = stage.getPointerPosition()

    switch (toolSelected) {
      case 'RECTANGLE':
        setRectangles(rectangles => {
          return rectangles.map(rectangle => {
            if (rectangle.ID === currentShapeID.current) {
              return {
                ...rectangle,
                width: x - rectangle.x,
                height: y - rectangle.y,
              }
            }
            return rectangle
          })
        })
        break
    }
  }

  function onPointerUp() {
    isPainting.current = false
  }

  function onPointerDown() {
    if (toolSelected === 'SELECT') return

    const stage = stageRef.current
    const { x, y } = stage.getPointerPosition()

    const ID = uuid()

    currentShapeID.current = ID
    isPainting.current = true

    switch (toolSelected) {
      case 'RECTANGLE':
        setRectangles(rectangles => {
          return [
            ...rectangles,
            {
              ID,
              x,
              y,
              height: 0,
              width: 0,
              fillColor,
            },
          ]
        })
        break
    }
  }

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
        height={500}
        width={500}
      >
        {/* todo make this the same height and width as parent */}
        <Layer>
          <Rect x={0} y={0} height={100} width={200} fill='#ffffff' id='bg' />
          {rectangles.map(rectangle => {
            return (
              <Rect
                key={rectangle.ID}
                x={rectangle.x}
                y={rectangle.y}
                stroke={strokeColor}
                strokeWidth={2}
                fill={rectangle.fillColor}
                height={rectangle.height}
                width={rectangle.width}
              />
            )
          })}
        </Layer>
      </Stage>
    </Box>
  )
}

export default Canvas
