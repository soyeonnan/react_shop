import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Query, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import store from './redux/store.js'
import { Provider } from 'react-redux'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>

    <Provider store={store}>

      <StrictMode>
        
        <BrowserRouter>
        <App />
        </BrowserRouter>
        
      </StrictMode>,

    </Provider>

  </QueryClientProvider>
)
