import React, { Component } from 'react'


import { connect } from "react-redux";
import * as actions from "../actions/transactionAction";
import { bindActionCreators } from "redux"


class Form extends Component {

    state = {
        ...this.returnStateObject

    }

    returnStateObject() {
        if (this.props.currentIndex === -1)
            return {
                id: "",
                customer_name: "",
                customer_email: "",
                product: "",
                quantity: ""
            }
        else {
            return this.props.list[this.props.currentIndex]
        }
    }

    componentDidUpdate(prevprops) {
        if (prevprops.currentIndex !== this.props.currentIndex || prevprops.list.length !== this.props.list.length)
            this.setState({ ...this.returnStateObject() })
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.props.currentIndex === -1)
            this.props.insertTransaction(this.state)
        else
            this.props.updateTransaction(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group text-left">
                        <label className="text-light">Order ID</label>
                        <input
                            name="id"
                            value={this.state.id}
                            onChange={this.handleInputChange}
                            className="form-control"
                            placeholder="Enter order id"
                            type="text"
                        />
                    </div>


                    <div className="form-group text-left">
                        <label className="text-light">Customer_Name</label>
                        <input
                            name="customer_name"
                            value={this.state.customer_name}
                            onChange={this.handleInputChange}
                            className="form-control"
                            placeholder="Enter customer name"
                            type="text"
                        />
                    </div>

                    <div className="form-group text-left">
                        <label className="text-light">Customer_Email</label>
                        <input
                            name="customer_email"
                            value={this.state.customer_email}
                            onChange={this.handleInputChange}
                            className="form-control"
                            placeholder="Enter customer email"
                            type="text"
                        />
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group text-left">
                                <label className="text-light">Product</label>
                                <select
                                    name="product"
                                    value={this.state.product}
                                    onChange={this.handleInputChange}
                                    className="form-control">
                                    <option>Select product</option>
                                    <option value="Product 1">Product 1</option>
                                    <option value="Product 2">Product 2</option>
                                    <option value="Product 3">Product 3</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group text-left">
                                <label className="text-light">Quantity</label>
                                <input
                                    name="quantity"
                                    value={this.state.quantity}
                                    onChange={this.handleInputChange}
                                    className="form-control"
                                    placeholder="Enter quantity"
                                    type="number"
                                    min="1"
                                />
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-success btn-block">Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        list: state.list,
        currentIndex: state.currentIndex
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        insertTransaction: actions.insert,
        updateTransaction: actions.update
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);