/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import styles from "../Components/Card.module.css";
import { productQuantity, shortenText } from "../Helpers/Helper";
import { useCart } from "../context/CartContext";

function Card({ data }) {
  const { id, title, image, price } = data;
  const [state, dispatch] = useCart();
  // console.log(state);

  const quantity = productQuantity(state, id);
  // console.log(quantity);

  const clickHandler = (type) => {
    dispatch({ type: type, payload: data });
  };

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
          <div>
            {quantity === 1 && (
              <button onClick={() => clickHandler("REMOVE_ITEM")}>
                <MdDeleteOutline />
              </button>
            )}

            {quantity > 1 && (
              <button onClick={() => clickHandler("DECREASE")}>-</button>
            )}

              {
                !!quantity &&  <span>{quantity}</span>
              }

            {quantity === 0 ? (
              <button onClick={() => clickHandler("ADD_ITEM")}>
                <TbShoppingBagCheck />
              </button>
            ) : (
              <button onClick={() => clickHandler("INCREASE")}>+</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
