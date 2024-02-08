/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import Card from "../Components/Card";
import Loader from "../Components/Loader";
import { useProducts } from "../context/ProductsProvider"
import Style from "../Pages/ProductsPage.module.css"
import {ImSearch} from 'react-icons/im'
import {FaListUl} from 'react-icons/fa'
import { filterProducts, searchProducts } from "../Helpers/Helper";

function ProductsPage() {

  const products = useProducts() ; 

  const [displayed , setDisplayed] = useState([])
  const [ search , setSearch] = useState([])
  const [ query , setQuery] = useState({})

  useEffect(()=> {
    setDisplayed(products);
  } , [products])

  useEffect(() => {
    console.log(query);
    let finalProducts = searchProducts( products , query.search );
    finalProducts = filterProducts( finalProducts , query.category) ;

    setDisplayed(finalProducts);

  } ,  [ query ] )



  const searchHandler = () => {
    setQuery( query => ({ ...query , search }))
  }

  const categorHandler = (e) => {
    const {tagName} = e.target;
    const category = e.target.innerText.toLocaleLowerCase();
    if( tagName != "LI" ) return;
    setQuery ( (query) => ({...query , category} ) )

  }

  return (
    <>
      <div>
        <input type="text" placeholder="Search Here ..." value={search} onChange={e => setSearch(e.target.value.toLocaleLowerCase().trim())} />
          <button onClick={searchHandler}><ImSearch /></button>
      </div>
      <div className={Style.container}>

       <div className={Style.products}>
        {!displayed.length && <Loader />}
        { displayed.map( product => 
          <Card key={product.id} data={product}/> ) }
       </div>

       <div>
          <div>
          <FaListUl />
          <p>Ctegories</p>
          </div>
          <ul onClick={categorHandler}>
            <li>All</li>
            <li>Electronics</li>
            <li>Jewelery</li>
            <li>Men's Clothing</li>
            <li>Women's Clothing</li>
          </ul>
       </div>

      </div>



    </>
  )
}

export default ProductsPage