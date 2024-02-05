import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import ProductsPage from './Pages/ProductsPage'
import DetailsPage from './Pages/DetailsPage'
import CheckoutPage from './Pages/CheckoutPage'
import NotFound from './Pages/NotFound'

function App() {

  return (
    <>
      <Routes>
          <Route path='/' element={<Navigate to="/products" replace/>}  />
          <Route path='/products' element={<ProductsPage />}/>
          <Route path='/products/:id' element={<DetailsPage />}/>
          <Route path='/Checkout' element={<CheckoutPage />}/>
          <Route path='/*' element={<NotFound />}/>
      </Routes>
    </>
  )
}

export default App
