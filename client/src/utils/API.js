import axios from 'axios';

export default {
    getOneItem: function (itemId) {
        return axios.get('/item/' + itemId);
    },

    addToCart: function (item) {
        console.log('add to cart');
        return axios.post('/addToCart', item);
    },

    renderCart: function (id) {
        return axios.get('/userCart/', id);
    }
}

