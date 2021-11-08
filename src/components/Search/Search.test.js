// import * as axios from 'axios'
// import React from 'react'
// import { render, fireEvent, waitFor } from '@testing-library/react'
// import { screen } from '@testing-library/dom'
// import { mockData } from '../../api/mockData'
import Search from './Search'
// import App from '../../App'
// import Photo from '../Photo'
// import { AppContextProvider } from '../../AppContext'
// import ImagesList from '../Images/ImagesList'
// import ImagesItem from '../Images/ImagesItem'

import { render, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'

test('renders a message', () => {
  const { container, getByText } = render(<Search />)
  fireEvent.change(document.querySelector('input#search'), {
    target: { value: '2222' },
  })
  // wait for data loaded
  await waitFor(() => {
    expect(
      getByText(
        /Nomadic photographer on a journey to embodiment. Everything is possible when you open your heart./,
        {
          selector: '.bio-id',
        }
      )
    ).toBeInTheDocument()
  })
})

// jest.mock('axios')

// describe('User action', () => {
//   test('should display photos list when user search input', async () => {
//     // axios.get = jest.fn().mockResolvedValueOnce(mockData)
//     const { container, queryByTestId, getByTestId, getByText } = render(
//       <Search></Search>
//     )
//     // // console.log(container.debug(), 'container')
//     // fireEvent.change(document.querySelector('input#search'), {
//     //   target: { value: '2222' },
//     // })
//     // wait for data loaded
//     // await waitFor(() => {
//     //   expect(
//     //     getByText(
//     //       /Nomadic photographer on a journey to embodiment. Everything is possible when you open your heart./,
//     //       {
//     //         selector: '.bio-id',
//     //       }
//     //     )
//     //   ).toBeInTheDocument()
//     // })
//     // expect(
//     //   getByText(/A photo by: Ralph (Ravi) Kayden/, {
//     //     selector: '.author-id',
//     //   })
//     // ).toBeInTheDocument()
//   })
// })
