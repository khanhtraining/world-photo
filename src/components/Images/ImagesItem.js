import * as React from 'react'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import { useStyles } from './ImagesList'
import Instagram from './Instagram'
import Twitter from './Twitter'
import Divider from '@mui/material/Divider'

const ImagesItem = ({ item }) => {
  const classesStyle = useStyles()

  return (
    <ImageListItem key={item?.urls?.raw}>
      <img
        className={classesStyle.img}
        src={`${item?.urls?.raw}?w=248&fit=crop&auto=format`}
        srcSet={`${item?.urls?.raw}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={item?.alt_description}
        loading="lazy"
      />
      <Stack direction="column" spacing={0}>
        <Stack
          direction="row"
          sx={{ justifyContent: 'space-evenly', padding: '17px 0px' }}
        >
          <Avatar
            alt={item?.alt_description}
            src={item?.user?.profile_image?.small}
          />
          <Stack direction="column" margin={0}>
            <ImageListItemBar
              className={classesStyle.author}
              position="below"
              title={`A photo by: ` + item?.user?.name}
            />
            <p className={classesStyle.bio}>{item?.user?.bio}</p>
          </Stack>
        </Stack>
        <Stack
          className={classesStyle.stack}
          sx={{ justifyContent: 'space-evenly', padding: '8px' }}
          divider={<Divider orientation="vertical" flexItem />}
          direction="row"
        >
          {item?.user?.social?.twitter_username ? (
            <Twitter key={item.id} item={item} />
          ) : null}
          {item?.user?.social?.instagram_username ? (
            <Instagram key={item.id} item={item} />
          ) : null}
        </Stack>
      </Stack>
    </ImageListItem>
  )
}

export default ImagesItem
