import React from 'react'
import { render } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
// As a basic setup, import your same slice reducers
import AppStore from './store/Store' ;

export function renderWithProviders(
  ui,
  {
    store = AppStore
  }
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper}) }
}