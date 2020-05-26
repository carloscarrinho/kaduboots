import React, { Component } from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';
class Cart extends Component {

  render() {
    return (
      <Container>
        <ProductTable>
          <thead>
            <tr>
              <th />
              <th>PRODUTO</th>
              <th>QTD</th>
              <th>SUBTOTAL</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src="https://static.netshoes.com.br/produtos/chuteira-society-nike-beco-2-tf/58/HZM-3221-058/HZM-3221-058_zoom2.jpg?ts=1579719700&ims=326x" alt="Chuteira" />
              </td>
              <td>
                <strong>Chuteira Nike</strong>
                <span>R$ 159,90</span>
              </td>
              <td>
                <div>
                  <button>
                    <MdRemoveCircleOutline size={20} color="#25293c" />
                  </button>
                  <input type="number" readOnly value={2} />
                  <button>
                    <MdAddCircleOutline size={20} color="#25293c" />
                  </button>
                </div>
              </td>
              <td>
                <strong>R$ 218,80</strong>
              </td>
              <td>
                <button type='button'>
                  <MdDelete size={20} color="#25293c" />
                </button>
              </td>
            </tr>
          </tbody>

        </ProductTable>

        <footer>
          <button type='button'>Finalizar pedido</button>

          <Total>
            <span>TOTAL</span>
            <strong>R$ 1940,00</strong>
          </Total>
        </footer>
      </Container>
    )
  }
}

export default Cart;