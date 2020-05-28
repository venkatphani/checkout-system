import React from "react";
import { Link } from "react-router-dom";
import { MdShoppingBasket } from "react-icons/md";
import { connect } from "react-redux";
import propTypes from "prop-types";
import logo from "../../assets/images/banner.png";

import { Container, Cart } from "./styles";

const Header = (props) => {
  const { cartLength } = props;
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Logo cart" />
      </Link>
      <div title="Total Quantity">
        <Cart to="/cart">
          <div>
            <strong>Shopping cart</strong>
            <span>{cartLength}</span>
          </div>
          <MdShoppingBasket size={36} />
        </Cart>
      </div>
    </Container>
  );
};

Header.propTypes = {
  cartLength: propTypes.number.isRequired,
};

const mapStateToProps = (state) => {
  const { cartReducer } = state;
  const { cart } = cartReducer;
  const cartLength = cart.reduce((total, item) => total + item.quantity, 0);
  return {
    cartLength,
  };
};

export default connect(mapStateToProps, null)(Header);
