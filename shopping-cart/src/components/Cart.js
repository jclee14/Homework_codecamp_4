import React, { Component } from 'react';
import { Table, Button } from 'antd';

export class Cart extends Component {
  render() {
    const columns = [
      {
        title: 'Product',
        dataIndex: 'product.name',
      },
      {
        title: 'Price',
        className: 'column-money',
        dataIndex: 'product.price',
      },
      {
        title: 'Amount',
        dataIndex: 'amount',
      },
      {
        title: 'Action',
        dataIndex: '',
        render: (text, cartItem) => <Button onClick={ () => this.props.handleRemove(cartItem.uid) }>Delete</Button>,
      },
    ];
    return (
      <Table
        columns={columns}
        dataSource={this.props.cartList}
        bordered
        title={() => 'Header'}
        footer={() => 'Footer'}
      />
    )
  }
}

export default Cart
