import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export const ACTIONS = {
  SELECT: 'SELECT',
  RECTANGLE: 'RECTANGLE',
  CIRCLE: 'CIRCLE',
  SCRIBBLE: 'SCRIBBLE',
  ARROW: 'ARROW',
  ERASER: 'ERASER',
}

export interface ToolSelectionState {
  value: 'SELECT' | 'RECTANGLE' | 'CIRCLE' | 'SCRIBBLE' | 'ARROW' | 'ERASER'
}

const initialState: ToolSelectionState = {
  value: 'RECTANGLE',
}

export const ToolSelectionSlice = createSlice({
  name: 'toolSelection',
  initialState,
  reducers: {
    select: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { select } = ToolSelectionSlice.actions

export default ToolSelectionSlice.reducer
