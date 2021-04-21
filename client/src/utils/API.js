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
    },

    deleteFromCart: function (id) {
        console.log('Item has been removed from cart');
        return axios.delete('/deleteFromCart'+ id);
    },

    updateCartQty: function (qty) {
        console.log('Cart has been updated', qty)
        return axios.put('/updateCartQty', qty);
    },

    createCheckout: function (total) {
        console.log('Creating your order', total);
        return axios.post('/createCheckout', total);
    }
}

