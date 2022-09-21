import React, { Component } from 'react'

export default class ShowDetail extends Component {
    render() {
        let{detailShoes} = this.props;
        return (
            <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Xem chi tiết</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-4">
                                    <h3>{detailShoes.name}</h3>
                                    <img className='img-fluid' src={detailShoes.image} alt="" />
                                </div>
                                <div className="col-8">
                                    <h4>Thông tin sản phẩm</h4>
                                    <table className="table text-left">
                                        <thead>
                                            <tr>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Tên</td>
                                                <td>{detailShoes.name}</td>
                                            </tr>
                                            <tr>
                                                <td>Giá</td>
                                                <td>${detailShoes.price}</td>
                                            </tr>
                                            <tr>
                                                <td>Mô tả</td>
                                                <td>{detailShoes.description}</td>
                                            </tr>
                                            <tr>
                                                <td>Số lượng</td>
                                                <td>{detailShoes.quantity}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
