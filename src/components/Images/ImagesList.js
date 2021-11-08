import React from 'react'
import ImageList from '@mui/material/ImageList'

import ImagesItem from './ImagesItem'
import { useHelperTextStyles } from './useStyles'
import { useAppContext } from '../../AppContext'
import './layout.scss'

const ImagesList = () => {
  const { photosState } = useAppContext()
  // const {
  //   photo: { data },
  // } = photosState || {}
  const photoData = photosState?.photo?.data
  const classes = useHelperTextStyles()
  return (
    <div className="images-list">
      {photoData?.map(photo => {
        return <ImagesItem key={photo?.id} data={photo} />
      })}
    </div>
  )
}

export default ImagesList
