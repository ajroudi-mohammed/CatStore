import {createStore} from 'redux';

const initialState = {
    cart : [   
        {
            product :{
                "id": 1,
                "name": "White Cat",
                "price": 100,
                "image": "/images/cat1.jpg",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            quantity : 3
        }
    ]

}

function reducers(state){
    return state;
}

const store = createStore(reducers, initialState);

export default store;

