/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import {FaListUl} from 'react-icons/fa'
import { createQueryObject } from '../Helpers/Helper';
import styles from "../Components/SearchSide.module.css"
import {categories} from '../Services/Constants/list'
// eslint-disable-next-line react/prop-types
function Sidebar( { query , setQuery }) {

    const categorHandler = (e) => {
        const {tagName} = e.target;
        const category = e.target.innerText.toLocaleLowerCase();
        if( tagName != "LI" ) return;
        setQuery ( createQueryObject ( query , { category }) )
    
      }
    

  return (
    <div className={styles.Sidebar}>
    <div>
    <FaListUl />
    <p>Ctegories</p>
    </div>
    <ul onClick={categorHandler}>
        {categories.map( item => <li key={item.id} className={item.type.toLocaleLowerCase() === query.category ? styles.selected : null } >{item.type}</li> ) }
    </ul>
    </div>
  )
}

export default Sidebar