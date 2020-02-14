import React, {Component} from 'react'

class CartItem extends Component{
    render() {
        return (
            
            <div className="card">
                <img src={this.props.product.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{this.props.product.name}</h5>
                    <p className="card-text">
                        Price: {this.props.product.price}$.
                        <br/>
                        Quantity: 1
                        <br/>
                        Total : {this.props.product.price}$
                    </p>
                    <a href="#" className="btn btn-danger">
                        <i className="fa fa-trash" />
                        Delete
                    </a>
                </div>
            </div>
        )
    }
}

export default CartItem