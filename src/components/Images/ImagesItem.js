import React from 'react'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import Instagram from './Instagram'
import Twitter from './Twitter'
import Divider from '@mui/material/Divider'
import { useStyles } from './useStyles'

const ImagesItem = ({ data }) => {
  const classesStyle = useStyles()

  return (
    <ImageListItem>
      <img
        className={classesStyle.img}
        src={`${data?.urls?.raw}?w=248&fit=crop&auto=format`}
        srcSet={`${data?.urls?.raw}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={data?.alt_description}
        loading="lazy"
      />
      <Stack direction="column" spacing={0}>
        <Stack
          direction="row"
          sx={{ justifyContent: 'space-evenly', padding: '17px 0px' }}
        >
          <Avatar
            alt={data?.alt_description}
            src={data?.user?.profile_image?.small}
          />
          <Stack direction="column" margin={0}>
            <ImageListItemBar
              className={classesStyle.author}
              position="below"
              title={`A photo by: ` + `${data?.user?.name}`}
            />
            <p className={classesStyle.bio}>{data?.user?.bio}</p>
          </Stack>
        </Stack>
        <Stack
          className={classesStyle.stack}
          sx={{ justifyContent: 'space-evenly', padding: '8px' }}
          divider={<Divider orientation="vertical" flexItem />}
          direction="row"
        >
          {data?.user?.social?.twitter_username && (
            <Twitter key={data.id} data={data} />
          )}
          {data?.user?.social?.instagram_username && (
            <Instagram key={data.id} data={data} />
          )}
        </Stack>
      </Stack>
    </ImageListItem>
  )
}

export default ImagesItem
