import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 25px 0;

  div {
    display: flex;
    align-items: center;
  }

  img {
    height: 50px;
  }
`;

export const LogoName = styled.span`
  font-family: monospace;
  font-size: 38px;
  margin-left: 15px;
  background-color: #fff;
  padding: 3px 10px;
  border-radius: 6px;
  color: #14182b;
  text-decoration: none;
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity .2s;

  &:hover {
    opacity: .5;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;