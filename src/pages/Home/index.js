import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import api from '../../services/api';
import { ProductList } from './styles';

class Home extends Component {
  // 1º) estabelecendo o estado inicial do componente;
  state = {
    products: [],
  }

  // 2º) realizando a chamada à api na primeira renderização do componente
  async componentDidMount() {
    // busca os dados em 'products' e armazena na constante 'response'
    const response = await api.get('products');

    // método setState para 'remontar' o estados
    this.setState({
      products: response.data,
    })
  }

  // método obrigatório do 'Class Component' para renderizar o componente
  render() {
    // 3º) buscando o estado atual de 'products'
    const { products } = this.state;

    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.price}</span>
            <button type="button">
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

export default Home;