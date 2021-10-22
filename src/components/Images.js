import * as React from 'react'
import Box from '@mui/material/Box'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import { makeStyles } from '@mui/styles'

export const useHelperTextStyles = makeStyles(() => ({
  root: {
    '& .css-7rtvwf-MuiImageListItem-root': {
      height: 'none',
      overflowY: 'inherit',
      backgroundColor: 'red',
    },
    '& .css-10riir9-MuiImageList-root': {
      display: 'flex',
      overflowY: 'inherit',
    },
    '& .css-rvv586-MuiImageList-root': {
      display: 'flex',
      justifyContent: 'space-between',
      borderRadius: '3px',
      margin: 'none',
    },
    '& .css-pxxd1-MuiImageListItem-root': {
      backgroundColor: '#FFFFFF',
      borderRadius: '5px',
    },
  },
}))

const Images = props => {
  const classes = useHelperTextStyles()
  return (
    <ImageList className={classes.root} cols={4}>
      {itemData.map(item => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar position="below" title={item.author} />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

//try list data item display to UI
const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
  },
]

export default Images
