import React from 'react'
import ReactDOM from 'react-dom/client'
// React Router v6
import { BrowserRouter } from 'react-router-dom'
// React Query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
// Local files
import App from './App'
//react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import { ThemeProvider } from './ContextApi/ThemeProvider'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 2,
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
)
