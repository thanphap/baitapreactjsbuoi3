import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {

    renderShoes = () => {
        return this.props.shoesList.map((shoes) => { 
            return <div className="col-4 mb-4" key={`shoes-${shoes.id}`}>
                <ProductItem showDetail = {this.props.showDetail} shoes = {shoes}/>  
            </div>
         })
    }

    render() {
        return (
            <div className='row text-left'>
                {this.renderShoes()}
            </div>
        )
    }
}
