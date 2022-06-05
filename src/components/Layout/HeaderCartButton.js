import { useContext, useState, useEffect } from "react";

import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
// import MealItemForm from "../Meals/MealItem/MealItemForm";
import classess from "./HeaderCartButton.module.css";

function HeaderCartButton(props) {
  const [btnIsHighlited, setBtnIsHighlited] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  const btnClasses = `${classess.button} ${
    btnIsHighlited ? classess.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setBtnIsHighlited(true);

    const timer = setTimeout(() => {
      setBtnIsHighlited(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classess.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classess.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
