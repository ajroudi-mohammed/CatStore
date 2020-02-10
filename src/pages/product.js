import React, {Component} from 'react'
import {getById} from './../api/products'

class Product extends Component{

    state = {
        loading : true,
        product : []
    }

    componentDidMount = () => {
        const id = this.props.match.params.id
        getById(parseInt(id) )
            .then( (product) => {
                this.setState({
                    loading: false,
                    product: product
                })
            })
    }

    render(){

        const {product} = this.state

        return (
            <div>
                <div className={"row"}>
                    <div className={"col-6"}>
                        <img src={product.image} style={{width: '100%'}} />
                    </div>
                    <div className={"col-6"} >
                    <h1>{product.name}</h1>

                    <p>{product.description}</p>

                    <input type="number" />

                    <br/><br/>
                    

                    <button className={"btn btn-primary"}>Add to cart</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product