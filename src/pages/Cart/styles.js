import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  padding: 30px;
  background-color: #202020c2;
  border-radius: 4px;
`;

export const EmptyText = styled.div`
  text-align: center;
  div {
    font-size: 30px;
  }
`;

export const PizzaTable = styled.table`
  width: 100%;

  background-color: #202020;

  thead th {
    color: #fff;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 200px;
    max-width: 200px;
    margin: 0 auto;
    display: flex;
  }

  strong {
    color: #fff;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;
  }
`;

export const Total = styled.div`
  text-align: right;
  margin-top: 20px;

  span {
    color: #fff;
    font-weight: bold;
  }

  strong {
    font-size: 20px;
    margin-left: 5px;
  }
`;

export const Text = styled(Link)`
  text-decoration: none;
  color: #fff;
`;
