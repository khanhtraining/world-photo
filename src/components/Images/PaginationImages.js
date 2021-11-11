import React from 'react'
import Pagination from '@mui/material/Pagination'
import { useStyles } from './useStyles'

const PaginationImages = props => {
  const { onPageChange, totalsPage } = props
  const classes = useStyles()

  const handlePageChange = newPage => {
    try {
      onPageChange(newPage.target.textContent)
    } catch (error) {}
  }

  return (
    <div>
      <Pagination
        count={totalsPage}
        onChange={handlePageChange}
        classes={{ ul: classes.paginator }}
      />
    </div>
  )
}

export default PaginationImages
