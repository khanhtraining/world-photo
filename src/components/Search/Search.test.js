import React from 'react'
import renderer from 'react-test-renderer'
import Search from './Search'
import { render, fireEvent, waitFor, act } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { AppContextProvider } from '../../AppContext'
import axiosMock from 'axios'

jest.mock('axios')

const mockSetAction = jest.fn()

test('should render Search correctly', () => {
  const tree = renderer
    .create(
      <AppContextProvider>
        <Search />
      </AppContextProvider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

test('render label search', () => {
  const { getByTestId } = render(
    <AppContextProvider value={{ data: {}, dispatch: mockSetAction }}>
      <Search />
    </AppContextProvider>
  )
  const inputSearch = getByTestId('search-input')

  axiosMock.get.mockResolvedValueOnce({
    title: 'Hello',
    bio: 'Human Interface Designer at Apple',
  })

  expect(inputSearch.value).toEqual('')

  act(() => {
    fireEvent.change(inputSearch, { target: { value: 'Hello' } })
  })

  expect(inputSearch.value).toEqual('Hello')

  waitFor(() => expect(axiosMock.get).toHaveBeenCalled())

  // expect(mockSetAction).toHaveBeenCalledWith([
  //   {
  //     title: 'Hello',
  //     bio: 'Human Interface Designer at Apple',
  //   },
  // ])
})
