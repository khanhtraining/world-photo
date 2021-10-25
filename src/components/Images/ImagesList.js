import React from 'react'
import ImageList from '@mui/material/ImageList'
import { makeStyles } from '@mui/styles'

import ImagesItem from './ImagesItem'

export const useStyles = makeStyles(() => ({
  author: {
    fontSize: '14px',
    width: '8rem',
    lineHeight: '25px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    fontWeight: 600,
  },
  bio: {
    fontSize: '12px',
    width: '7rem',
    'text-align': 'start',
    overflow: 'hidden',
    'text-overflow': 'ellipsis',
    'line-height': '20px',
    '-webkit-line-clamp': 3,
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
  },
  img: {
    height: '10rem',
  },
  twitter: {
    justifyContent: 'center',
  },
  instagram: {
    justifyContent: 'center',
  },
  stack: {
    borderTop: '1px solid #00000012',
  },
}))

export const useHelperTextStyles = makeStyles(() => ({
  root: {
    '& .css-10riir9-MuiImageList-root': {
      display: 'flex',
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
      border: '1px solid #dbdbdb',
    },
    '& .css-pxxd1-MuiImageListItem-root .MuiImageListItem-img': {
      height: '15rem',
    },
    '& .css-e53awj-MuiStack-root': {
      padding: '6px',
      justifyContent: 'space-around',
    },
    '& .css-dasnyc-MuiImageListItemBar-title': {},
    '& .css-186gwnw-MuiImageListItemBar-titleWrap': {
      height: '2rem',
    },
    '& .makeStyles-root-7 .css-e53awj-MuiStack-root': {
      borderTop: '1px solid #000',
    },
    '& .css-63ksqz-MuiSvgIcon-root': {
      fill: 'gray',
    },
    '& .css-63ksqz-MuiSvgIcon-root:hover': {
      fill: 'red',
    },
  },
}))

const ImagesList = ({ allListImages }) => {
  const classes = useHelperTextStyles()

  return (
    <ImageList className={classes.root} cols={4} gap={13}>
      {allListImages?.map(item => {
        return <ImagesItem key={item.id} item={item} />
      })}
    </ImageList>
  )
}

export default ImagesList
