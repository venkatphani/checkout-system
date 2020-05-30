import React from "react";
import { connect } from "react-redux";
import { MdAddShoppingCart } from "react-icons/md";
import propTypes from "prop-types";
import { PizzaList, Container, Button, Select, ShowOffers } from "./styles";
import { formatPrice, companies } from "../../utils/helpers";
import { addToCart, selectCompany } from "../../actions/cartActions";

const Home = (props) => {
  const { items: pizzas, addToCart: addToCartAction, selectCompany: selectCompanyAction, selectedCompanyId } = props;

  const onHandleClick = (item) => {
    addToCartAction(item);
  };

  const onCompanyChange = (e) => {
    selectCompanyAction(e.target.value);
  };

  const offersList = () => {
    return Object.values(companies[selectedCompanyId].offers).reduce((allItems, itemArray) => allItems.concat(itemArray), []);
  };

  return (
    <Container>
      <Select value={selectedCompanyId} onChange={onCompanyChange}>
        {Object.values(companies).map((item, index) => {
          const id = Object.keys(companies)[index];
          return (
            <option key={id} value={id}>
              {item.name}
            </option>
          );
        })}
      </Select>
      <ShowOffers>
        {offersList().map((item) => {
          return <h3 key={item.description}>{item.description}</h3>;
        })}
      </ShowOffers>
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
  selectCompany: propTypes.func.isRequired,
  selectedCompanyId: propTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  const { cartReducer } = state;
  const { items, selectedCompanyId } = cartReducer;
  return {
    items,
    selectedCompanyId,
  };
};

export default connect(mapStateToProps, { addToCart, selectCompany })(Home);
