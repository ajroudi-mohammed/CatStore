import React, {Component} from 'react';
import Home from './pages/home'
import Products from './pages/products'
import Cart from './pages/cart'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Product from './pages/product'
import CartIcon from './components/CartIcon';
import store from './store/store.js'
import {Provider} from 'react-redux';

class App extends Component{
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">CatStore</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/products">Products</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">Cart</Link>
                </li>
               </ul>
            </div>

            <CartIcon />
          </nav>

          <Route path="/" component={Home} exact />
          <Route path="/products" component={Products} exact />
          <Route path="/products/:id" component={Product} />
          <Route path="/cart" component={Cart} />

        </div>
      </Router>
    )
  }
}

const AppWithProvider = () =>{
    return <Provider store={store}>
            <App />
        </Provider>
}

export default AppWithProvider;
