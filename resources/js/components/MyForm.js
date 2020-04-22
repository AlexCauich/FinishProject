import React, { Component } from 'react';

class myForm extends Component {
    render() {
        return(
            <div className="col-md-4">
                <div className="card bg-dark mt-4">
                    <div className="card-header text-white">New Contact</div>
                    <form className="card-body">
                        <div className="form-group">
                            <input type="text" name="first_name" placeholder="First name" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="last_name" placeholder="Last name" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="email" placeholder="Email" className="form-control" />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-outline-primary btn-block">Create contact</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default myForm;