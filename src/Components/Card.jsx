/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import styles from '../Components/Card.module.css'
import { shortenText } from "../Helpers/Helper";

function Card( {data }) {
    const { id , title , image , price } = data ;
    console.log(data);
  return (
    <>
    <div className={styles.card}>
        <img src={image} alt={title} className={styles.img} />
        <h3>{shortenText(title)}</h3>
        <p>{price}</p>
        <div className={styles.actions}>
            <Link to={`/products/${id}`}>
            <TbListDetails />
            </Link>
            <button>
                <TbShoppingBagCheck />
            </button>

        </div>
    </div>
    </>
  )
}

export default Card