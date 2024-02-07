import Card from "../Components/Card";
import Loader from "../Components/Loader";
import { useProducts } from "../context/ProductsProvider"
import Style from "../Pages/ProductsPage.module.css"

function ProductsPage() {
  const products = useProducts() ; 
  console.log(products);

  return (
    <>
      <div className={Style.container}>

       <div className={Style.products}>
        {!products.length && <Loader />}
        { products.map( product => 
          <Card key={product.id} data={product}/> ) }
       </div>

       <div><h2>SideBar</h2></div>

      </div>



    </>
  )
}

export default ProductsPage