import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from 'react-router-dom'
import { history } from './utils/history'
import { Routes } from './routes'
import { RoutesContainer } from './components/RoutesContainer'
import { AuthProvider } from './contexts/AuthContext'
import { GlobalStyles } from './styles/global'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <AuthProvider>
      <Router history={history}>
        <RoutesContainer>
          <Routes />
        </RoutesContainer>
      </Router>
    </AuthProvider>
  </React.StrictMode>,
)
