import * as React from 'react'
import Box from '@mui/material/Box'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import { useStyles } from './ImagesList'
import Instagram from './Instagram'
import Twitter from './Twitter'

const ImagesItem = ({ item }) => {
  const classesStyle = useStyles()
  return (
    <ImageListItem key={item?.urls?.raw}>
      <img
        src={`${item?.urls?.raw}?w=248&fit=crop&auto=format`}
        srcSet={`${item?.urls?.raw}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={item?.alt_description}
        loading="lazy"
      />
      <Stack direction="column" spacing={0}>
        <Stack direction="row" spacing={2}>
          <Avatar
            alt={item?.alt_description}
            src={item?.user?.profile_image?.small}
          />
          <Stack direction="column" spacing={0}>
            <ImageListItemBar
              position="below"
              title={`A photo by: ` + item?.user?.name}
            />
            <ImageListItemBar
              className={classesStyle.bio}
              position="below"
              title={item?.user?.bio}
            />
          </Stack>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Instagram key={item.id} item={item} />
          <Twitter key={item.id} item={item} />
        </Stack>
      </Stack>
    </ImageListItem>
  )
}

export default ImagesItem
