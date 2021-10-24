import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import CircularProgress from '@mui/material/CircularProgress'
import { makeStyles } from '@mui/styles'
import { useAppContext } from '../../AppContext'

function sleep(delay = 0) {
  return new Promise(resolve => {
    setTimeout(resolve, delay)
  })
}
export const useHelperTextStyles = makeStyles(() => ({
  root: {
    '& .MuiOutlinedInput-root': {
      height: '45px',
      borderRadius: '0px',
    },
  },
}))

export const Search = () => {
  const classes = useHelperTextStyles()
  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState([])
  const loading = open && options.length === 0
  const [photoOption, setPhotoOption] = useState([])

  useEffect(() => {
    const active = true

    if (!loading) {
      return undefined
    }

    ;(async () => {
      await sleep(1e3)

      if (active) {
        setOptions()
      }
    })()

    return () => {
      active = false
    }
  }, [loading])

  useEffect(() => {
    if (!open) {
      setOptions([])
    }
  }, [open])

  return (
    <Autocomplete
      className={classes.root}
      id="asynchronous-demo"
      sx={{ width: '100%' }}
      open={open}
      onOpen={() => {
        setOpen(true)
      }}
      onClose={() => {
        setOpen(false)
      }}
      isOptionEqualToValue={(option, value) => option.title === value.title}
      getOptionLabel={option => option.title}
      options={options}
      loading={loading}
      renderInput={params => (
        <TextField
          {...params}
          label="Search..."
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  )
}

export default Search
