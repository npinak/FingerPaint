'use client'
import { Box } from '@mui/material'
import * as fabric from 'fabric'
import React, { useRef, useEffect, useState } from 'react'

function Canvas() {
  const [canvas, setCanvas] = useState<any>()
  const canvasRef = useRef()

  useEffect(() => {
    // Initialize Fabric.js canvas
    const canvas = new fabric.Canvas('test', {
      // Add your canvas options here
    })

    canvas.on('mouse:down', event => {
      console.log(event)
    })

    const rect = new fabric.Rect({
      left: 50,
      top: 50,
      width: 100,
      height: 100,
      fill: 'red',
      selectable: true, // Enable selection and dragging
      hasControls: true, // Enable resizing handles
    })

    canvas.add(rect)
    canvasRef.current = canvas
    console.log(canvas.getObjects())
  }, [])

  const initCanvas = () =>
    new fabric.Canvas('canvas', {
      height: 800,
      width: 800,
      backgroundColor: 'pink',
    })
  return (
    <div>
      <h1>Fabric.js on React - fabric.Canvas('...')</h1>
      <canvas id='canvas' ref={canvasRef} />
    </div>
  )
}

export default Canvas
