import React, {Component} from 'react'
import ProductItem from './../components/productitem'
import DataProvider from './../api/products'
import CartItem from './../components/CartItem'

class Cart extends Component{

    state = {
        products: []
    }

    componentDidMount = () => {
        DataProvider.getAll()
            .then(data => this.setState({
                products: data
            }))
    }

    render() {
        return (
            <div>
                <h1>Cart</h1>
                {console.log(this.state)}
                <div className="row">
                    {
                        this.state.products.map( product => 
                            <div className={'col-3'} key={product.id}>
                                <CartItem product={product} />
                            </div>
                        )
                    }
                    
                </div>
                <br/>
                <h3>Total : 3000</h3>
                <br/>
                <button className="btn btn-primary btn-block">Pay</button>
            </div>
        )
    }
}

export default Cart