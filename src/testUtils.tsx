import { render as renderTest } from '@testing-library/react'
import { ReactElement } from 'react'
import { BrowserRouter } from 'react-router-dom'

export const render = (ui: ReactElement) => {
  renderTest(ui, { wrapper: BrowserRouter })
}