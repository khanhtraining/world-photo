import React, { useState } from 'react'
import PropTypes from 'prop-types'
import PaginationMUI from '@mui/material/Pagination'
import { useStyles } from './useStyles'

const Pagination = props => {
  const classes = useStyles()
  const { pagination, onPageChange, totalsPage } = props
  const { page } = pagination
  const handlePageChange = newPage => {
    try {
      onPageChange(newPage.target.textContent)
    } catch (error) {}
  }

  return (
    <div>
      <div>Page: {page}</div>
      <PaginationMUI
        count={totalsPage}
        // page={page}
        variant="outlined"
        color="secondary"
        onChange={handlePageChange}
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
