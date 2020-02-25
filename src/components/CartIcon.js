import React from 'react'
import './CartIcon.css'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

function CartIcon(Props){
    return <div id="cart-icon">
        <Link to="/cart" >
            <i className="fa fa-shopping-cart"></i>
            <span className="badge badge-danger">{Props.totalquantity}</span>
        </Link>
    </div>
}

const mapStateToProps = (state) => {
    return {
        totalquantity : state.cart.reduce((total, item) => total + item.quantity, 0), 
    }
}

export default connect(mapStateToProps)(CartIcon)
