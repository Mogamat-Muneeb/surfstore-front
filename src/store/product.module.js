import ProductService from "../services/product.services";
const initialState = product
  ? {product}
  : {product: null};
export const product = {
  namespaced: true,
  state: initialState,
  actions: {
    create({ commit }, product) {
      return ProductService.create(product).then(
        (product) => {
          commit("CreatedProduct", product);
          return Promise.resolve(product);
        },
        (error) => {
          commit("NotCreated");
          return Promise.reject(error);
        }
      );
    },
    delete({ commit }, product) {
        return ProductService.delete(product).then(
          (product) => {
            commit("CreatedProduct", product);
            return Promise.resolve(product);
          },
          (error) => {
            commit("NotCreated");
            return Promise.reject(error);
          }
        );
      },
      update({ commit }, product) {
        return ProductService.update(product).then(
          (product) => {
            commit("CreatedProduct", product);
            return Promise.resolve(product);
          },
          (error) => {
            commit("NotCreated");
            return Promise.reject(error);
          }
        );
      },
  },
  mutations: {
    CreatedProduct(state, product) {
      state.product = product; //if we get a product
    },
    NotCreated(state) {
      state.product = null; // if we dont get a product
    },
  },
};