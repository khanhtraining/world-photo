import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(() => ({
  author: {
    fontSize: '14px',
    width: '8rem',
    lineHeight: '25px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    fontWeight: 600,
  },
  bio: {
    fontSize: '12px',
    width: '7rem',
    'text-align': 'start',
    overflow: 'hidden',
    'text-overflow': 'ellipsis',
    'line-height': '20px',
    '-webkit-line-clamp': 3,
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
  },
  img: {
    height: 'auto',
    width: '100%',
  },
  twitter: {
    justifyContent: 'center',
  },
  instagram: {
    justifyContent: 'center',
  },
  stack: {
    borderTop: '1px solid #00000012',
  },
  paginator: {
    justifyContent: 'center',
    padding: '10px',
  },
}))

export const useHelperTextStyles = makeStyles(() => ({
  root: {},
}))
