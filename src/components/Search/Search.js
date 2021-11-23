import React, { useEffect, useState, useRef } from 'react'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'
import Box from '@mui/material/Box'

import queryString from 'query-string'
import debounce from 'lodash.debounce'

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
import PaginationImages from '../Images/PaginationImages'

export const Search = () => {
  const { data, dispatch } = useAppContext()
  const [totalsPage, setTotalsPage] = useState(100)
  const [isLoading, setIsLoading] = useState(false)
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

  const searchByText = async searchText => {
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
        // setIsLoading(true)
        dispatch(searchImagesSuccess(res.data.results))
      } catch (err) {
        dispatch(searchImagesFail(err))
      } finally {
      }
    }
  }

  const debounceSearch = debounce(searchText => searchByText(searchText), 300)

  const handleChangeInput = e => {
    if (e.target.value.length > 0) {
      debounceSearch(e.target.value)
      setPagination(e.target.value)
    }
  }

  useEffect(() => {
    searchByText()
  }, [pagination])

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
            className="search-text"
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

        <Box
          sx={{
            backgroundColor: '#ffffff',
            height: '100%',
            padding: '1em 2em',
            margin: '0.8rem 0rem',
          }}
        >
          <PaginationImages
            pagination={pagination}
            onPageChange={handlePageChange}
            totalsPage={totalsPage}
          />
          {(isLoading && <p>Loading...</p>) || <ImagesList />}
          {/* <ImagesList /> */}
        </Box>
      </Box>
    </React.Fragment>
  )
}
export default Search
