import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Paginationn from '@mui/material/Pagination'
import { useStyles } from './useStyles'

const Pagination = props => {
  const classes = useStyles()
  const { pagination, onPageChange } = props
  const { page } = pagination
  const [valuePage, setValuePage] = useState(0)
  const handlePageChange = newPage => {
    console.log(newPage, 'newPage')
    setValuePage(newPage.target.textContent)
    if (onPageChange && newPage.target.textContent) {
      try {
        console.log(newPage.target.textContent)
        onPageChange(newPage.target.textContent)
      } catch (error) {
        console.log('newPage.target.textContent')
      }
    } else {
      onPageChange(newPage.target.textContent + page)
    }
  }

  return (
    <div>
      <div>Page: {page}</div>
      <Paginationn
        count={100}
        // page={page}
        variant="outlined"
        color="secondary"
        onChange={handlePageChange}
        defaultPage={1}
        classes={{ ul: classes.paginator }}
      />
    </div>
  )
}

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func,
}
Pagination.default = {
  onPageChange: null,
}

export default Pagination
