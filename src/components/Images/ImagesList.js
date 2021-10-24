import React from 'react'
import ImageList from '@mui/material/ImageList'
import { makeStyles } from '@mui/styles'

import ImagesItem from './ImagesItem'

export const useStyles = makeStyles(() => ({
  bio: {
    width: 'auto',
    height: '5rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    lineHeight: '20px',
  },
  img: {
    height: '10rem',
  },
}))
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
    '& .MuiImageListItem-img': {
      height: '15rem',
    },
    '& .css-e53awj-MuiStack-root': {
      padding: '1rem',
      justifyContent: 'space-evenly',
    },
    '& .css-dasnyc-MuiImageListItemBar-title': {
      fontSize: '14px',
      width: '8rem',
      lineHeight: '25px',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
    },
    '& .css-186gwnw-MuiImageListItemBar-titleWrap': {
      height: '2rem',
    },
  },
}))

const ImagesList = ({ allListImages }) => {
  const classes = useHelperTextStyles()
  return (
    <ImageList className={classes.root} cols={4}>
      {allListImages?.map(item => {
        return <ImagesItem key={item.id} item={item} />
      })}
    </ImageList>
  )
}

export default ImagesList
