import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'
import Box from '@mui/material/Box'

import queryString from 'query-string'

import {
  getImagesRequest,
  getImagesSuccess,
  getImagesFail,
  searchImagesRequest,
  searchImagesSuccess,
  searchImagesFail,
} from '../../actions/photoAction'

import ImagesList from '../Images/ImagesList'
import { useAppContext } from '../../AppContext'
import { axiosInstance } from '../../api/axiosInstance'
import Pagination from '../Images/Pagination'

export const Search = () => {
  const { data, dispatch } = useAppContext()
  const [totalsPage, setTotalsPage] = useState(100)
  const [searchText, setSearchText] = useState()

  const loadingState = data?.photo?.loading
  const initPagination = {
    page: 1,
    per_page: 12,
  }
  const [pagination, setPagination] = useState(initPagination)

  const handlePageChange = newPage => {
    setPagination({
      ...pagination,
      page: newPage,
    })
  }

  const getImagesList = async () => {
    dispatch(getImagesRequest())

    try {
      const paramString = queryString.stringify(pagination)
      const res = await axiosInstance().get(`/photos?${paramString}`)
      dispatch(getImagesSuccess(res.data))
    } catch (err) {
      dispatch(getImagesFail(err))
    }
  }

  const searchByText = async () => {
    dispatch(searchImagesRequest())
    if (!searchText) {
      getImagesList()
    } else {
      try {
        const paramString = queryString.stringify(pagination)
        const res = await axiosInstance().get(
          `/search/photos?query=${searchText}&${paramString}`
        )
        setTotalsPage(res.data.total_pages)
        console.log(res.data.results, 'res.data.results')
        dispatch(searchImagesSuccess(res.data.results))
      } catch (err) {
        dispatch(searchImagesFail(err))
      }
    }
  }

  const handleChangeInput = e => {
    if (e.target.value.length > 0) {
      setSearchText(e.target.value)
      setPagination(e.target.value)
    }
  }

  useEffect(() => {
    searchByText()
  }, [pagination, searchText])

  return (
    <React.Fragment>
      <Box sx={{ margin: '0.8rem 0rem' }}>
        <Box
          sx={{
            backgroundColor: '#ffffff',
            height: '100%',
            padding: '1em 2em',
            margin: '2rem 0rem',
          }}
        >
          <TextField
            fullWidth
            label="search"
            id="search-text"
            placeholder="Search..."
            name="search"
            onChange={handleChangeInput}
            margin="dense"
            inputProps={{ 'data-testid': 'search-input' }}
            InputProps={{
              startAdornment: <SearchIcon />,
            }}
          />
        </Box>
        {(loadingState && <p>Loading...</p>) || (
          <Box
            sx={{
              backgroundColor: '#ffffff',
              height: '100%',
              padding: '1em 2em',
              margin: '0.8rem 0rem',
            }}
          >
            <Pagination
              pagination={pagination}
              onPageChange={handlePageChange}
              totalsPage={totalsPage}
            />
            <ImagesList />
          </Box>
        )}
      </Box>
    </React.Fragment>
  )
}
export default Search
