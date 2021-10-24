import React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import Images from './Images/ImagesList'
import Search from './Search/Search'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const Photo = props => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ margin: '2rem 0rem' }}>
          <Box>
            <Search />
          </Box>
          <Box
            sx={{
              bgcolor: '#cfe8fc',
              height: '100vh',
              padding: '1em 2em',
              margin: '2rem 0rem',
            }}
          >
            <Images />
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  )
}

export default Photo
