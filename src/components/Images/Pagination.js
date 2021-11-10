import React from 'react'
import PaginationMUI from '@mui/material/Pagination'
import { useStyles } from './useStyles'

const Pagination = props => {
  const { onPageChange, totalsPage } = props
  const classes = useStyles()

  const handlePageChange = newPage => {
    try {
      onPageChange(newPage.target.textContent)
    } catch (error) {}
  }

  return (
    <div>
      <PaginationMUI
        classes={{ ul: classes.paginator }}
        count={totalsPage}
        variant="outlined"
        color="secondary"
        onChange={handlePageChange}
      />
    </div>
  )
}

export default Pagination
