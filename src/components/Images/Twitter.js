import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter'

import { URL_TWITTER } from '../../constants'

const Twitter = ({ data }) => {
  return (
    data && (
      <div>
        <a href={`${URL_TWITTER}/${data?.user?.social?.twitter_username}`}>
          <TwitterIcon sx={{ fill: 'gray' }} />
        </a>
      </div>
    )
  )
}

export default Twitter
