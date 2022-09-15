import React from "react";

import Hero from "../../assets/meals.jpg";

import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShow={props.onOpen} />
      </header>
      <div className={classes["main-image"]}>
        <img src={Hero} alt="Banner" />
      </div>
    </>
  );
};

export default Header;
