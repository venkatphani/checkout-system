import React from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { deleteItem, increaseQuantity, decreaseQuantity } from "../../actions/cartActions";
import { Container, PizzaTable, Total, Text, EmptyText } from "./styles";
import { formatPrice, convertTitle, calculateCartValue } from "../../utils/helpers";

const Cart = (props) => {
  const { cart, increaseQuantity: increaseQuantityAction, decreaseQuantity: decreaseQuantityAction, deleteItem: deleteItemAction, totalCost } = props;

  const onIncreaseClick = (id) => {
    increaseQuantityAction(id);
  };

  const onDecreaseClick = (id, quantity) => {
    if (quantity <= 1) {
      deleteItemAction(id);
    } else {
      decreaseQuantityAction(id);
    }
  };

  const onDeleteClick = (id) => {
    deleteItemAction(id);
  };

  return (
    <Container>
      {cart.length === 0 ? (
        <EmptyText>
          <div>Your cart is empty!</div>
        </EmptyText>
      ) : (
        <>
          <PizzaTable>
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>Item</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const { title, price, quantity, url, id, subtotal } = item;
                return (
                  <tr key={id}>
                    <td>
                      <Link to={{ pathname: `/details/${convertTitle(title)}`, item }}>
                        <img src={url} alt={title} />
                      </Link>
                    </td>
                    <td>
                      <Text to={{ pathname: `/details/${convertTitle(title)}}`, item }}>
                        <strong>{title}</strong>
                        <span>{formatPrice(price)}</span>
                      </Text>
                    </td>
                    <td>
                      <div>
                        <button type="button" onClick={() => onDecreaseClick(id, quantity)}>
                          <MdRemoveCircleOutline size={20} color="#fff" />
                        </button>
                        <input type="number" readOnly value={quantity} />
                        <button type="button" onClick={() => onIncreaseClick(id)}>
                          <MdAddCircleOutline size={20} color="#fff" />
                        </button>
                      </div>
                    </td>
                    <td>
                      <strong>{formatPrice(subtotal)}</strong>
                    </td>
                    <td>
                      <button type="button" onClick={() => onDeleteClick(id)}>
                        <MdDelete size={20} color="#fff" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </PizzaTable>
          <Total>
            <span>Total Cost : </span>
            <strong>{formatPrice(totalCost)}</strong>
          </Total>
        </>
      )}
    </Container>
  );
};

Cart.propTypes = {
  cart: propTypes.array.isRequired,
  deleteItem: propTypes.func.isRequired,
  increaseQuantity: propTypes.func.isRequired,
  decreaseQuantity: propTypes.func.isRequired,
  totalCost: propTypes.number.isRequired,
};

const mapStateToProps = (state) => {
  const { cartReducer } = state;
  const { cart, selectedCompanyId } = cartReducer;
  const totalCost = calculateCartValue(selectedCompanyId, cart);
  return { cart, totalCost, selectedCompanyId };
};

export default connect(mapStateToProps, { deleteItem, increaseQuantity, decreaseQuantity })(Cart);
