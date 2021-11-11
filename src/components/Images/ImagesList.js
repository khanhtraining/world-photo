import React from 'react'

import ImagesItem from './ImagesItem'
import { useAppContext } from '../../AppContext'
import './layout.scss'

const ImagesList = () => {
  const { data } = useAppContext()
  const photoData = data?.photo?.data
  return (
    <div className="images-list">
      {photoData?.map((photo, idx) => {
        return <ImagesItem key={idx} data={photo} />
      })}
    </div>
  )
}

export default ImagesList
