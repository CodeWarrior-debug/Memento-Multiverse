import axios from 'axios';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getAll: () => {
        return axios.get('/api/products/')
    },
    getOneItem: (itemId) => {
        return axios.get('/api/products/' + itemId);
    },

    addToCart: (item) => {
        console.log('add to cart');
        return axios.post('/addToCart', item);
    },

    renderCart: (id) => {
        return axios.get('/userCart/', id);
    },

    deleteFromCart: (id) => {
        console.log('Item has been removed from cart');
        return axios.delete('/deleteFromCart' + id);
    },

    updateCartQty: (qty) => {
        console.log('Cart has been updated', qty)
        return axios.put('/updateCartQty', qty);
    },

    createCheckout: (total) => {
        console.log('Creating your order', total);
        return axios.post('/createCheckout', total);
    },

    getAllTransactions: () => {
        return axios.get('/api/transactions')
    },
    getFranchises: () => {
        return axios.get('/api/franchise')
    },
    
    login: (userInfo) => {
        return axios.post('/api/users/login', userInfo);
    },

    signup: (userInfo) => {
        return axios.post('/api/users/signup', userInfo);
    }
}