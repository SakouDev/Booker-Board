import { CircularProgress } from '@mui/material'
import React from 'react'

export default function Loader() {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
        <CircularProgress size={100} style={{marginTop:'20%'}} />
    </div>
  )
}
