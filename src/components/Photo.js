import React from 'react'
import { Container, CssBaseline } from '@mui/material'
import { Box } from '@mui/system'
import Search from './Search/Search'

const Photo = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          height: '3.5rem',
          'background-color': 'pink',
          'background-image': 'linear-gradient(275deg, #433e91, transparent)',
        }}
      ></Box>
      <Box
        sx={{
          bgcolor: '#e3e3e340',
          height: '100%',
          padding: '1em 2em',
        }}
      >
        <Search />
      </Box>
    </React.Fragment>
  )
}

export default Photo
