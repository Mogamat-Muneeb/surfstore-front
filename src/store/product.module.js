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
    // logout({ commit }) {
    //   AuthService.logout();
    //   commit("logout");
    // },
    // register({ commit }, user) {
    //   return AuthService.register(user).then(
    //     (response) => {
    //       commit("registerSuccess");
    //       return Promise.resolve(response.data);
    //     },
    //     (error) => {
    //       commit("registerFailure");
    //       return Promise.reject(error);
    //     }
    //   );
    // },
  },
  mutations: {
    CreatedProduct(state, product) {
      state.product = product;
    },
    NotCreated(state) {
      state.product = null;
    },
    // logout(state) {
    //   state.status.loggedIn = false;
    //   state.user = null;
    // },
    // registerSuccess(state) {
    //   state.status.loggedIn = false;
    // },
    // registerFailure(state) {
    //   state.status.loggedIn = false;
    // },
  },
};