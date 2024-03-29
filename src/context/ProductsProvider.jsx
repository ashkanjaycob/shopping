/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react"
import api from '../Services/config'

const ProductsContext = createContext() ;

function ProductsProvider( {children} ) {

  const [ products , setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setProducts(await api.get("/products"))
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchProducts();
  } , [])

  return (
    <>
      <ProductsContext.Provider value={products} >
          {children}
      </ProductsContext.Provider>
    </>
  )
}

// Custom Hooks UseProducts
const useProducts = () => {
  const products = useContext(ProductsContext)
  return products;
}

export default ProductsProvider;
// eslint-disable-next-line react-refresh/only-export-components
export { useProducts } ; 