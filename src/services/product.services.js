import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'https://surfstore-backend.herokuapp.com/products/';
class ProductService{
  async create(product) {
    return axios
      .post(API_URL, {
        title: product.title,
        category: product.category,
        price: product.price,
        description: product.description,
        img: product.img,
      },
      { headers: authHeader() })
  }
  delete(product) {
      return axios
        .delete(API_URL + product, { headers: authHeader() })
  }
  update(product) {
    return axios
      .patch(API_URL + product._id,{
        title: product.title,
        category: product.category,
        description: product.description,
        img: product.img,
        price: product.price
      }, 
        { headers: authHeader() })
}
};

export default new ProductService();