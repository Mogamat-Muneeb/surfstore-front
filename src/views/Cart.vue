<template>
<div class="products section">
      
    <span v-show="loading" class="spinner-border spinner-border-sm" style="width: 100px; height: 100px; color: white;"></span>
    <div class="productsContainer">
   
    <div class="card "  v-for="cartItem in cart" :key="cartItem._id">
      
      <div class="row">
            
        <div class="">
          <img :src="cartItem.img" class="cartImg" alt="...">
        </div>
        <div class="">
          <div class="card-body">

            <h5 class="card-title">{{ cartItem.title }}</h5>
            <p class="card-text">{{ cartItem.description }}</p>
            <div class="d-flex mb-3 align-items-center">
            <h6 class="mx-2">QTY: </h6>
            <input type="number" class="form-control" min="1" id="addToCart${position}" :value="cartItem.qty" />
          </div>
            <p class="card-text">TOTAL: R{{ cartItem.price*cartItem.qty }}</p>
          <div class="d-flex justify-content-end card-footer" >
            <button type="button" class="btn w-20" id="delete" @click="removeItem(cartItem)">Remove Item</button>
          </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
import CartService from '../services/cart.services'
export default {
  name: "Cart",
  data() {
    return {
      cart: '',
      loading: false
    }
  },
    methods: {
    removeItem(product){
      this.$store.dispatch("cart/deleteOne", product).then(
        (response) => {
          if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
          }
          location.reload()
        },
        (error) => {
          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
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


<style scoped>
.cartImg{
     display: flex;
  width: 395px;
  height: 330px;
  object-fit:cover; 
  border-radius:9px 9px 0 0;
}

.productsContainer{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top:150px;
  overflow-y: hidden;
  padding-bottom:25px;
}

.card{
    height: 600px;
  width: 380px;
  border: 1px solid white;
    box-shadow:8px 8px 15px #e4e4e4;
  border-radius:9px;
  margin: 25px;
  background-color:white;
  /* padding:250px; */
  overflow-x: hidden;
  
  /* box-shadow:  1px 1px 1px 1px black; */
}

.card:hover{
  transform: scale(1.1); 
  transition: 0.5s;
}

@media only screen and (max-width: 904px){
  .card{
  height: 600px;
  width: 340px;
  border: 1px solid white;
    box-shadow:8px 8px 15px #e4e4e4;
  border-radius:9px;
  margin: 25px;
  background-color:white;
  /* padding:250px; */
  overflow-x: hidden;
  overflow-y: hidden;
  /* box-shadow:  1px 1px 1px 1px black; */
}

.cartImg{
  display: flex;
  width: 340px;
  height: 330px;
  object-fit:cover;
    border-radius:9px 9px 0 0;
}
}
</style>