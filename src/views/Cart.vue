<template>
  <div class="products">
    <!-- <div v-for="product of products" :key="product.id" class="card__container"> -->
    <div class="card" v-for="cartItem in cart" :key="cartItem._id">
      <img :src="cartItem.img" class="card-img-top" draggable="false"/>
      <div class="card-body">
        <h5 class="card-title">{{ cartItem.title }}</h5>
        <h5 class="card-title">{{ cartItem.category }}</h5>
        <p class="card-text">{{ cartItem.price }}</p>
        <div class="d-flex mb-3">
          <input
            type="number"
            class="form-control"
            min="1"
            id="addToCart${position}"
            :value="cartItem.qty"
          />
          <button
            type="button"
            class="btn ms-3"
            onclick="addToCart(${position})"
          >
            <MDBIcon icon="shopping-cart"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                class="bi bi-cart2"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
                />
              </svg>
            </MDBIcon>
          </button>
        </div>
      </div>
      <div class="d-flex justify-content-end card-footer">
        <button type="button" class="btn w-20" id="delete">Delete</button>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>
<script>
import CartService from '../services/cart.services'
export default {
  name: "Cart",
  data() {
    return {
      cart: ''
    }
  },
  mounted() {
    CartService.getCart().then(
      (response) => {
        this.cart = response.data;
      },
      (error) => {
        this.cart =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  },
};
</script>