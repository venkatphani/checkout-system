import React from "react";
import { connect } from "react-redux";
import { MdAddShoppingCart } from "react-icons/md";
import propTypes from "prop-types";
import { PizzaList, Container, Button } from "./styles";
import { formatPrice } from "../../utils/helpers";
import { addToCart } from "../../actions/cartActions";

const Home = (props) => {
  const { items: pizzas, addToCart: addToCartAction } = props;

  const onHandleClick = (item) => {
    addToCartAction(item);
  };

  return (
    <Container>
      <PizzaList>
        {pizzas.map((item) => {
          const { id, title, url, quantity, price } = item;
          return (
            <li key={id}>
              <img src={url} alt={title} />
              <strong>{title}</strong>
              <strong>{formatPrice(price)}</strong>
              <Button onClick={() => onHandleClick(item)}>
                <div>
                  <div>
                    <MdAddShoppingCart size={16} color="#FFF" />
                    {quantity}
                  </div>
                  <span>Add to cart </span>
                </div>
              </Button>
            </li>
          );
        })}
      </PizzaList>
    </Container>
  );
};

Home.propTypes = {
  items: propTypes.array.isRequired,
  addToCart: propTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { cartReducer } = state;
  const { items } = cartReducer;
  return {
    items,
  };
};

export default connect(mapStateToProps, { addToCart })(Home);
