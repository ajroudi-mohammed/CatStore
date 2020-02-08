import Products from './products.json'

export const getAll = () => {
    return Promise.resolve(Products)
}

export default {
    getAll
}