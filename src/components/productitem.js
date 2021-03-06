import React, {Component} from 'react'

class ProductItem extends Component{
    render() {
        return (
            
            <div className="card">
                <img src={this.props.product.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{this.props.product.name}</h5>
                    <p className="card-text">Price: {this.props.product.price}$.</p>
                    <a href={"/products/"+this.props.product.id} className="btn btn-primary">Details</a>
                </div>
            </div>
        )
    }
}

export default ProductItem