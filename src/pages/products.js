import React, {Component} from 'react'
import ProductItem from './../components/productitem'
import DataProvider from './../api/products'

class Products extends Component{

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
                <h1>Products</h1>
                {console.log(this.state)}
                <div className="row">
                    {
                        this.state.products.map( product => 
                            <div className={'col-4'} key={product.id}>
                                <ProductItem product={product} />
                            </div>
                        )
                    }
                    
                </div>
            </div>
        )
    }
}

export default Products