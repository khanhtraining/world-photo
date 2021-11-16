import React from 'react'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import Instagram from './Instagram'
import Twitter from './Twitter'
import Divider from '@mui/material/Divider'
import { useStyles } from './useStyles'
import './layout.scss'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

const ImagesItem = ({ data }) => {
  const classesStyle = useStyles()
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }
  return (
    <div className="images-item">
      <Button onClick={handleOpen}>
        <img
          className={classesStyle.img}
          src={`${data?.urls?.raw}?w=248&fit=crop&auto=format`}
          srcSet={`${data?.urls?.raw}?w=248&fit=crop&auto=format&dpr=2 2x`}
          alt={data?.alt_description}
          loading="lazy"
        />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            A photo by: {data?.user?.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {data?.user?.bio}
          </Typography>
        </Box>
      </Modal>

      <Stack direction="column" spacing={0}>
        <Stack
          direction="row"
          sx={{ justifyContent: 'space-evenly', padding: '17px 0px' }}
        >
          <Avatar
            className="avatar-test"
            alt={data?.alt_description}
            src={data?.user?.profile_image?.small}
          />
          <Stack direction="column" margin={0}>
            <ImageListItemBar
              data-testid="author-id"
              className={classesStyle.author}
              position="below"
              title={`A photo by: ${data?.user?.name}`}
            />
            <p data-testid="bio-id" className={classesStyle.bio}>
              {data?.user?.bio}
            </p>
          </Stack>
        </Stack>
        <Stack
          className={classesStyle.stack}
          sx={{ justifyContent: 'space-evenly', padding: '8px' }}
          divider={<Divider orientation="vertical" flexItem />}
          direction="row"
        >
          {data?.user?.social?.twitter_username && <Twitter data={data} />}
          {data?.user?.social?.instagram_username && <Instagram data={data} />}
        </Stack>
      </Stack>
    </div>
  )
}

export default ImagesItem
