import React, {Component} from 'react'
import {getById} from './../api/products'

class Product extends Component{

    state = {
        loading : true,
        quantity: 1,
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

    handlequantity = (event) => {
        var quantity = event.target.value
        if(quantity <=0)
            return

        this.setState({
            quantity: quantity
        })
    }
 
    render(){

        const {product,quantity} = this.state

        return (
            <div>
                <div className={"row"}>
                    <div className={"col-6"}>
                        <img src={product.image} style={{width: '100%'}} />
                    </div>
                    <div className={"col-6"} >
                    <h1>{product.name}</h1>

                    <p>{product.description}</p>

                    <input type="number" value={quantity} onChange={this.handlequantity} />

                    <br/><br/>

                    <p>Total price : {product.price*quantity}</p>
                    

                    <button className={"btn btn-primary"}>Add to cart</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product