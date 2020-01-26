import React, { Component } from 'react'
import { Row, Card, Button, Typography } from 'antd';
const { Text } = Typography;

export class Product extends Component {
  render() {
    const product = this.props.productDetail;
    return (
      <Card
        hoverable
        cover={ <img src={product.image} /> }
      >
        <h4 style={{ height: '120px'}} >{product.name}</h4>
        <p style={{ height: '250px', overflowY: 'scroll' }}>{product.description}</p>
        <Row>
          <Text mark>{product.price} Baht</Text>
          <Button type="primary" onClick={ (event) => this.props.handleAddCart(product) }>Add to cart</Button>
        </Row>
      </Card>
    )
  }
}

export default Product
