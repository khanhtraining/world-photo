import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter'

import { URL_TWITTER } from '../../constants'

const Twitter = ({ item }) => {
  return (
    item && (
      <div>
        <a href={`${URL_TWITTER}/${item?.user?.social?.twitter_username}`}>
          <TwitterIcon sx={{ fill: 'gray' }} />
        </a>
      </div>
    )
  )
}

export default Twitter
