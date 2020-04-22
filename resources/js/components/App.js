import React, { Component } from 'react';
import Navigation from './Navigation';
import MyForm from './MyForm';
import CustomerList from './CustomerList';

class App extends Component {
    constructor() {
        super();
        this.state = {
            customers: [],
        }
    }
    render() {
        return (
            <div className="App">
                <Navigation title="Contacts" />

                <div className="container">
                    <div className="row">
                        <MyForm />
                        <CustomerList />
                    </div>
                </div>
            </div>
        );
    }       
}

export default App;
