import React from "react";
import propTypes from "prop-types";
import { Container } from "./styles";
import { formatPrice } from "../../utils/helpers";

const ItemDetails = (props) => {
  const { location } = props;
  const { item } = location;
  const { url, title, price, description } = item || {};
  return (
    <Container>
      <div>
        <img src={url} alt={title} />
      </div>
      <div>
        <div> {title}</div>
        <div> {description}</div>
        <div> {price && formatPrice(price)}</div>
      </div>
    </Container>
  );
};

ItemDetails.propTypes = {
  location: propTypes.object,
};
ItemDetails.defaultProps = {
  location: {},
};

export default ItemDetails;
