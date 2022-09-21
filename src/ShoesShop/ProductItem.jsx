import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        let {shoes, showDetail} = this.props;
        return (
            <div className="card">
                <img src={shoes.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h6 className="card-title">{shoes.name}</h6>
                    <p className="card-text">${shoes.price}</p>
                    <button onClick={() => { 
                        showDetail(shoes);
                     }} data-toggle="modal" data-target="#modelId" className="btn btn-dark">Add to card</button>
                </div>
            </div>
        )
    }
}
