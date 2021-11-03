import React, { useContext } from 'react'
import ImageList from '@mui/material/ImageList'

import ImagesItem from './ImagesItem'
import { useHelperTextStyles } from './useStyles'
import { AppContext, useAppContext } from '../../AppContext'
import './layout.scss'

const ImagesList = () => {
  const { photosState } = useAppContext()
  const {
    photo: { data },
  } = photosState
  const classes = useHelperTextStyles()
  return (
    <ImageList className={classes.root} cols={4} gap={13}>
      {data?.map(item => {
        return <ImagesItem key={item.id} data={item} />
      })}
    </ImageList>
  )
}

export default ImagesList
