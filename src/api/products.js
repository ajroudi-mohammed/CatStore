import Products from './products.json'

export const getAll = () => {
    return Promise.resolve(Products)
}

export const getById = (id) => {
    var product = Products.find( (product) => product.id === id )
    return Promise.resolve(product)
}

export default {
    getAll,
    getById
}