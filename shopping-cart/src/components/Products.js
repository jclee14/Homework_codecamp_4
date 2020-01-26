import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Product from './Product';

export class Products extends Component {
  renderProducts() {
    return this.props.products.map(product => {
      return (
        <Col span={8} >
          <Product productDetail={product} handleAddCart={ this.props.handleCart }/>
        </Col>
      )
    })
  }
  render() {
    return (
      <Row>
        {this.renderProducts()}
      </Row>
    )
  }
}

export default Products
