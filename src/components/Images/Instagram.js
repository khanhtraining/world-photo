import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import { URL_INSTAGRAM } from '../../constants'

const Instagram = ({ data }) => {
  return (
    data && (
      <div>
        {data?.user?.social?.instagram_username ? (
          <a
            href={`${URL_INSTAGRAM}/${data?.user?.social?.instagram_username}`}
            alt="url_ig"
          >
            <InstagramIcon sx={{ fill: 'gray' }} />
          </a>
        ) : null}
      </div>
    )
  )
}

export default Instagram
