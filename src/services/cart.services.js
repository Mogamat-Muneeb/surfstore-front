import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'https://surfstore-backend.herokuapp.com/cart/';
class CartService{
  getCart() {
    return axios
      .get(API_URL, { headers: authHeader() })
  }
  async add(product) {
    return axios
      .post(API_URL + product._id,{
        qty: parseInt(product.qty)
      },
      { headers: authHeader() })
  }
  delete() {
      return axios
        .delete(API_URL, { headers: authHeader() })
  }
  update(product) {
    return axios
      .put(API_URL + product._id.valueOf(),{
        qty: parseInt(product.qty)
      }, 
        { headers: authHeader() })
}
};

export default new CartService();