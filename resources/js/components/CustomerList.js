import React, { Component } from 'react';

class CustomerList extends Component {
    constructor() {
        super();
        this.state = {
            customers: []
        }
    }

    componentDidMount() {
        /* fetch API in action */
        fetch('/api/customers') 
            .then(response => {
                return response.json();
            })
            .then(customers => {
                //Fetched product is stored in the state
                this.setState({ customers });
            });
    }

    renderCustomers() {
        return this.state.customers.map(customer => {
            return (
                <tr>
                    <td> {customer.id} </td>
                    <td> {`${customer.first_name} ${customer.last_name}`} </td>
                    <td> {customer.email} </td>
                    <td> 
                        <button className="btn btn-outline-warning mt-2 ml-2" onClick={this.onEdit}>Edit</button>
                        <button className="btn btn-outline-danger mt-2 ml-2" onClick={this.onDelete}>Delete</button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return(
            <div className="col-md-8 col-sm-8 col-xs-8">
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderCustomers()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default CustomerList;