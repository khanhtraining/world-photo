import React, { createContext, useContext, useReducer } from 'react'
import { photoInitState } from './components/initState/photoInitState'
import { photoReducer } from './reducers/photoReducer'

export const AppContext = createContext({})

export function useAppContext() {
  return useContext(AppContext)
}

export const AppContextProvider = props => {
  const { children } = props
  const [photosState, photosDispatch] = useReducer(photoReducer, photoInitState)
  return (
    <AppContext.Provider value={{ photosState, photosDispatch }}>
      {children}
    </AppContext.Provider>
  )
}
