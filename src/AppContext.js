import React, { useCallback, useContext, useReducer } from 'react'
import { initialStateCombined, rootReducer } from './reducers/rootReducer'

export const AppContext = React.createContext({})

export const AppContextProvider = props => {
  const { children } = props
  console.log(children, 'children')
  const [data, dispatch] = useReducer(rootReducer, initialStateCombined)
  console.log(data, 'data')
  return (
    <AppContext.Provider value={{ data, setData: dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const { data, setData } = useContext(AppContext)
  console.log(data, 'data in useAppContext')
  const dispatch = useCallback(
    action => {
      setData(action)
    },
    [setData]
  )
  return { data, dispatch }
}
