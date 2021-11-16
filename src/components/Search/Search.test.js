import React from 'react'
import renderer from 'react-test-renderer'
import Search from './Search'
import { render, fireEvent, waitFor, act } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { AppContextProvider } from '../../AppContext'
import axiosMock from 'axios'
import mockData from '../../api/mockData'

jest.mock('axios')

const mockSetAction = jest.fn()

jest.mock('../../AppContext', () => ({
  AppContextProvider: jest.requireActual('../../AppContext').AppContextProvider,
  useAppContext: () => ({
    dispatch: mockSetAction,
  }),
}))

// test('should render Search correctly', () => {
//   const tree = renderer
//     .create(
//       <AppContextProvider>
//         <Search />
//       </AppContextProvider>
//     )
//     .toJSON()
//   expect(tree).toMatchSnapshot()
// })

test('render label search', () => {
  const { getByTestId } = render(<Search />)
  const inputSearch = getByTestId('search-input')

  axiosMock.get.mockResolvedValueOnce(mockData)

  expect(inputSearch.value).toEqual('')

  act(() => {
    fireEvent.change(inputSearch, { target: { value: 'docus' } })
  })

  expect(inputSearch.value).toEqual('docus')

  // waitFor(() => expect(axiosMock.get).toHaveBeenCalled())
  // expect(mockSetAction).toHaveBeenCalledWith({
  //   loadingState: true,
  // })
  // expect(mockSetAction).toHaveBeenCalledWith([
  //   {
  //     title: 'Hello',
  //     bio: 'Human Interface Designer at Apple',
  //   },
  // ])
})
