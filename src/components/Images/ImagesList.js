import React, { useEffect, useState } from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import {
  getImagesRequest,
  getImagesSuccess,
  getImagesFail,
} from '../../actions/photoAction'
import { getImagesData } from '../../api/imagesAPI'
import { useAppContext } from '../../AppContext'
import ImagesItem from './ImagesItem'

import { makeStyles } from '@mui/styles'
import { autocompleteClasses } from '@mui/material'

export const useStyles = makeStyles(() => ({
  bio: {
    width: 'auto',
    height: '5rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    lineHeight: '20px',
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
    '& .css-186gwnw-MuiImageListItemBar-titleWrap': {
      height: '2rem',
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

const ImagesList = () => {
  const classes = useHelperTextStyles()
  const {
    data: {
      photo: {
        get: { data: allListImages, fail: getAllListImagesFail },
      },
    },
    dispatch,
  } = useAppContext()
  console.log(allListImages)
  const [showPhoto, setShowPhoto] = useState(false)
  const getImagesList = async () => {
    dispatch(getImagesRequest())

    try {
      const res = await getImagesData()
      dispatch(getImagesSuccess(res.data))
    } catch (err) {
      dispatch(getImagesFail(console.error('err')))
    }
  }
  useEffect(() => {
    getImagesList()
  }, [])
  return (
    <ImageList className={classes.root} cols={4}>
      {allListImages?.map(item => {
        return <ImagesItem key={item.id} item={item} />
      })}
    </ImageList>
  )
}

export default ImagesList
