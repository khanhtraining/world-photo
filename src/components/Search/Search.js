import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import { makeStyles } from '@mui/styles'
import SearchIcon from '@mui/icons-material/Search'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'

import queryString from 'query-string'
import axios from 'axios'

import {
  getImagesRequest,
  getImagesSuccess,
  getImagesFail,
} from '../../actions/photoAction'

import ImagesList from '../Images/ImagesList'
import { useAppContext } from '../../AppContext'
import { axiosInstance } from '../../api/axiosInstance'
import Pagination from '../Images/Pagination'
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

  const { photosDispatch } = useAppContext()

  const [pagination, setPagination] = useState({
    page: 1,
    per_page: 10,
  })

  const [filters, setFilters] = useState({
    per_page: 10,
    page: 1,
  })

  const handlePageChange = newPage => {
    setFilters({
      ...filters,
      page: newPage,
    })
    setPagination({
      ...pagination,
      page: newPage,
    })
  }

  const getImagesList = async () => {
    photosDispatch(getImagesRequest())

    try {
      const paramString = queryString.stringify(filters)
      const res = await axiosInstance().get(`/photos?${paramString}`)
      photosDispatch(getImagesSuccess(res.data))
    } catch (err) {
      photosDispatch(getImagesFail(err))
    }
  }

  const searchByText = async searchText => {
    photosDispatch(getImagesRequest())

    try {
      const paramString = queryString.stringify(filters)
      const res = await axiosInstance().get(
        `/search/photos?query=${searchText}&${paramString}`
      )
      photosDispatch(getImagesSuccess(res.data.results))
    } catch (err) {
      photosDispatch(getImagesFail(err))
    }
  }

  const handleChangeInput = e => {
    if (e.target.value.length > 0) {
      searchByText(e.target.value)
    }
  }

  useEffect(() => {
    getImagesList()
  }, [filters])

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ margin: '0.8rem 0rem' }}>
          <Box
            sx={{
              bgcolor: '#ffffff',
              height: '100%',
              padding: '1em 2em',
              margin: '2rem 0rem',
            }}
          >
            <TextField
              className={classes.root}
              fullWidth
              id="search"
              name="search"
              onChange={handleChangeInput}
              margin="dense"
              InputProps={{
                startAdornment: <SearchIcon />,
              }}
            />
          </Box>
          <Box
            sx={{
              bgcolor: '#ffffff',
              height: '100%',
              padding: '1em 2em',
              margin: '0.8rem 0rem',
            }}
          >
            <Pagination
              pagination={pagination}
              onPageChange={handlePageChange}
            />
            <ImagesList />
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  )
}
export default Search
