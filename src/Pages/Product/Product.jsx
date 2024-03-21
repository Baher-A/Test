import { Stack } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <Stack sx={{ mt:'4rem' }}>
      <Outlet />
    </Stack>
  )
}

export default Product