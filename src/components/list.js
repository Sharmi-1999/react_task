import React, { Component } from 'react'
import "../App.css"
// import Form from './form'

import { connect } from "react-redux";
import * as actions from "../actions/transactionAction";
import { bindActionCreators } from "redux"


class List extends Component {

    handleEdit = index => {
        this.props.updateTransaction(index)
    }

    handleDelete = index => {
        this.props.deleteTransaction(index)
    }


    render() {
        return (
            <div>
                <hr />
                <table id="example" class="table table-bordered table-striped">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">OrderId</th>
                            <th scope="col">Customer_Name</th>
                            <th scope="col">Customer_Email</th>
                            <th scope="col">Product</th>
                            <th scope="col">Quantity</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.list.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{item.id}</th>
                                        <td>{item.customer_name}</td>
                                        <td>{item.customer_email}</td>
                                        <td>{item.product}</td>
                                        <td>{item.quantity}</td>
                                        <td><button onClick={() => this.handleEdit(index)}>Edit</button></td>
                                        <td><button onClick={() => this.handleDelete(index)}>Delete</button></td>
                                    </tr>
                                )
                            }).reverse()
                        }
                    </tbody>
                </table>



            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        list: state.list
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        deleteTransaction: actions.Delete,
        updateTransaction: actions.UpdateIndex
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(List);