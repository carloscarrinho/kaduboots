import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import api from '../../services/api';
import { ProductList } from './styles';
import { formatPrice } from '../../utils/format';
import * as CartActions from '../../store/modules/cart/actions';
class Home extends Component {
  // 1º) estabelecendo o estado inicial do componente;
  state = {
    products: [],
  }

  // 2º) realizando a chamada à api na primeira renderização do componente
  async componentDidMount() {
    // busca os dados em 'products' e armazena na constante 'response'
    const response = await api.get('products');

    // formatando o preço no ínicio do ciclo de vida
    const data = response.data.map(product => ({
      ...product,
      formattedPrice: formatPrice(product.price)
    }));

    // 3º) método setState para 'remontar' o estado
    this.setState({
      products: data,
    });
  }

  handleAddProduct = product => {
    const { addToCart } = this.props;
    addToCart(product);
  }

  // método obrigatório do 'Class Component' para renderizar o componente
  render() {
    // 4º) buscando o estado atual de 'products'
    const { products } = this.state;

    return (
        <ProductList>
          {products.map(product => (
            <li key={product.id}>
              <img src={product.image} alt={product.title} />
              <strong>{product.title}</strong>
              <span>{product.formattedPrice}</span>
              <button type="button" onClick={() => this.handleAddProduct(product)} >
                <div>
                  <MdAddShoppingCart size={16} color="#FFF" />3
                </div>
                <span>ADICIONAR AO CARRINHO</span>
              </button>
            </li>
          ))}
        </ProductList>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(null, mapDispatchToProps)(Home);