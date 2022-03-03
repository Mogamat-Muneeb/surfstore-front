import CartService from "../services/cart.services";
const initialState = cart
  ? {product}
  : {product: null};
export const cart = {
  namespaced: true,
  state: initialState,
  actions: {
    add({ commit }, product) {
      return CartService.add(product).then(
        (product) => {
          commit("AddProduct", product);
          return Promise.resolve(product);
        },
        (error) => {
          commit("NotAdded");
          return Promise.reject(error);
        }
      );
    },
    delete({ commit }, product) {
        return CartService.delete(product).then(
          (product) => {
            commit("AddProduct", product);
            return Promise.resolve(product);
          },
          (error) => {
            commit("NotAdded");
            return Promise.reject(error);
          }
        );
      },
      deleteOne({ commit }, product) {
        return CartService.deleteOne(product).then(
          (product) => {
            commit("AddProduct", product);
            return Promise.resolve(product);
          },
          (error) => {
            commit("NotAdded");
            return Promise.reject(error);
          }
        );
      },
      update({ commit }, product) {
        return ProductService.update(product).then(
          (product) => {
            commit("AddProduct", product);
            return Promise.resolve(product);
          },
          (error) => {
            commit("NotAdded");
            return Promise.reject(error);
          }
        );
      },
  },
  mutations: {
    AddProduct(state, product) {
      state.product = product; //if we get a product
    },
    NotAdded(state) {
      state.product = null; // if we dont get a product
    },
  },
};