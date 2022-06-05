import HeaderCartButton from "./HeaderCartButton";

import mealsImg from "../../assets/meals.jpg";
import classess from "./Header.module.css";

function Header(props) {
  return (
    <>
      <header className={classess.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classess["main-image"]}>
        <img src={mealsImg} alt="meals table" />
      </div>
    </>
  );
}

export default Header;
