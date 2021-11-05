import React from 'react'
import ImageList from '@mui/material/ImageList'

import ImagesItem from './ImagesItem'
import { useHelperTextStyles } from './useStyles'
import { useAppContext } from '../../AppContext'
import './layout.scss'

const ImagesList = () => {
  const { photosState } = useAppContext()
  const {
    photo: { data },
  } = photosState
  const classes = useHelperTextStyles()
  return (
    <ImageList className={classes.root} cols={4} gap={13}>
      {data?.map((data, idx) => {
        return <ImagesItem key={data.id} data={data} />
      })}
    </ImageList>
  )
}

export default ImagesList
