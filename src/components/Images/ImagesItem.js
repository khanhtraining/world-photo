import * as React from 'react'
import Box from '@mui/material/Box'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'

const ImagesItem = ({ item }) => {
  return (
    <ImageListItem key={item?.urls?.raw}>
      <img
        src={`${item?.urls?.raw}?w=248&fit=crop&auto=format`}
        srcSet={`${item?.urls?.raw}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={item?.alt_description}
        loading="lazy"
      />
      <ImageListItemBar position="below" title={item?.user?.location} />
    </ImageListItem>
  )
}

export default ImagesItem
