import React, { Component } from 'react'
import { Menu } from 'antd'

export class Categories extends Component {
  renderCategories() {
    return (
      this.props.categories.map(category => {
        return (
          <Menu.Item key={category.id}>
            <span>{category.name}</span>
          </Menu.Item>
        )
      })
    )
  }

  render() {
    return (
      <div>
        <Menu 
          defaultSelectedKeys={['0']}
          onClick={ (event)=>this.props.handleCategoriesIdFunc(event.key) } 
        >
          <Menu.Item key={0}>
            <span>All Product</span>
          </Menu.Item>
          {this.renderCategories()}
        </Menu>
      </div>
    )
  }
}

export default Categories
