/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import Card from "../Components/Card";
import Loader from "../Components/Loader";
import { useProducts } from "../context/ProductsProvider"
import Style from "../Pages/ProductsPage.module.css"
import { filterProducts, getInitialQuery, searchProducts } from "../Helpers/Helper";
import { useSearchParams } from "react-router-dom";
import SeacrhBox from "../Components/SeacrhBox";
import Sidebar from "../Components/Sidebar";

function ProductsPage() {

  const products = useProducts() ; 

  const [displayed , setDisplayed] = useState([])
  const [ search , setSearch] = useState([])
  const [ query , setQuery] = useState({})


  // eslint-disable-next-line no-unused-vars
  const [ searchParams , setSearchParams] = useSearchParams();

  useEffect(()=> {
    setDisplayed(products);
    setQuery(getInitialQuery(searchParams));

  } , [products, search, searchParams])

  
  useEffect(() => {
    setSearchParams(query)
    let finalProducts = searchProducts( products , query.search );
    finalProducts = filterProducts( finalProducts , query.category) ;

    setDisplayed(finalProducts);

  } ,  [products, query, setSearchParams] )




  return (
    <>
      <SeacrhBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className={Style.container}>

       <div className={Style.products}>
        {!displayed.length && <Loader />}
        { displayed.map( product => 
          <Card key={product.id} data={product}/> ) }
       </div>
        
        <Sidebar query={query} setQuery={setQuery} />
      </div>



    </>
  )
}

export default ProductsPage