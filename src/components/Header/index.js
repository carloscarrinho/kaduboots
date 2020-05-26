import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { FiShoppingCart } from 'react-icons/fi';
import { Container, LogoName, Cart } from './styles';
import boots from '../../assets/img/football-boots.svg';

function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <div>
          <img src={boots} alt='kaduboots'/>
          <LogoName>kaduboots</LogoName>
        </div>
      </Link>

      <Cart to="/carrinho">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} {cartSize === 1 ? 'item' : 'itens'}</span>
        </div>
        <FiShoppingCart size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);