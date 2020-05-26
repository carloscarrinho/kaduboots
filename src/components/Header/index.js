import React from 'react';
import { Link } from 'react-router-dom';

import { FiShoppingCart } from 'react-icons/fi';
import { Container, LogoName, Cart } from './styles';
import boots from '../../assets/img/football-boots.svg';

export default function Header() {
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
          <span>3 itens</span>
        </div>
        <FiShoppingCart size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}