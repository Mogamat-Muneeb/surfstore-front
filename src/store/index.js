import { createStore } from "vuex";
import { auth } from "../store/auth.module";
import { product } from "./product.module";
import { cart } from "./cart.module";

const store = createStore({
  modules: {
    auth,
    product,
    cart
  },
});
export default store;