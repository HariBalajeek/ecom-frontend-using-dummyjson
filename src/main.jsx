import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/CartContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
<AuthProvider>
<CartProvider>
    <BrowserRouter>
  <App/>
  </BrowserRouter>
  </CartProvider>
</AuthProvider>
)
