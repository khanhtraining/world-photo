import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import { makeStyles } from '@mui/styles'
import SearchIcon from '@mui/icons-material/Search'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import {
  getImagesRequest,
  getImagesSuccess,
  getImagesFail,
} from '../../actions/photoAction'
import Images from '../Images/ImagesList'

import { useAppContext } from '../../AppContext'
import { getImagesData } from '../../api/imagesAPI'

export const useHelperTextStyles = makeStyles(() => ({
  root: {
    '& .css-1o9s3wi-MuiInputBase-input-MuiOutlinedInput-input': {
      height: '0.5rem',
      borderRadius: '0px',
    },
  },
}))

export const Search = () => {
  const classes = useHelperTextStyles()
  const [searchData, setSearchData] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const handleChange = event => {
    setSearchData(event.target.value)
  }
  const {
    data: {
      photo: {
        get: { data: allListImages },
      },
    },
    dispatch,
  } = useAppContext()

  const getImagesList = async () => {
    dispatch(getImagesRequest())

    try {
      const res = await getImagesData()
      dispatch(getImagesSuccess(res.data))
    } catch (err) {
      dispatch(getImagesFail(console.error('err')))
    }
  }

  useEffect(() => {
    const filteredItems = allListImages?.filter(item =>
      item?.user?.name?.toLocaleLowerCase().includes(searchData)
    )
    setSearchResults(filteredItems)
    getImagesList()
  }, [searchData])

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ margin: '2rem 0rem' }}>
          <Box>
            <TextField
              className={classes.root}
              fullWidth
              id="search"
              name="name"
              label="Search"
              onChange={handleChange}
              margin="dense"
              InputProps={{
                startAdornment: <SearchIcon />,
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
          <Box
            sx={{
              bgcolor: '#cfe8fc',
              height: '100%',
              padding: '1em 2em',
              margin: '2rem 0rem',
            }}
          >
            {searchData === '' ? (
              <Images allListImages={allListImages} />
            ) : (
              <Images allListImages={searchResults} />
            )}
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  )
}

export default Search
