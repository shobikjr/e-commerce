import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Suman from './Suman'
import ProductList from './ProductList'
import MyRoutes from './MyRoutes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyRoutes/>
    </StrictMode>
)
