import { data } from './data'
import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {};
        for (let header of Object.keys(data[0])) {
           this.initialState.header = '';
        }

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { id, quantity, price, producer, site, cashier } = this.state;

        return (
            <form onSubmit={this.onFormSubmit}>
                <label htmlFor="id">id</label>
                <input
                    type="text"
                    name="id"
                    id="id"
                    value={id}
                    onChange={this.handleChange} />
                <label htmlFor="quantity">quantity</label>
                <input
                    type="text"
                    name="quantity"
                    id="quantity"
                    value={quantity}
                    onChange={this.handleChange} />
                <label htmlFor="price">price</label>
                <input
                    type="text"
                    name="price"
                    id="price"
                    value={price}
                    onChange={this.handleChange}/>
                <label htmlFor="producer">producer</label>
                <input
                    type="text"
                    name="producer"
                    id="producer"
                    value={producer}
                    onChange={this.handleChange}/>
                <label htmlFor="site">site</label>
                <input
                    type="text"
                    name="site"
                    id="site"
                    value={site}
                    onChange={this.handleChange}/>
                <label htmlFor="cashier">cashier</label>
                <input
                    type="text"
                    name="cashier"
                    id="cashier"
                    value={cashier}
                    onChange={this.handleChange}/>
                <button type="submit">
                    Add
                </button>
            </form>
        );
    }
}


export default Form;
