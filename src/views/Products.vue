<template>
   <h1 class="head">PRODUCTS</h1>
    
     <div class="sort">
          <label for="catergorySort" class="form-label"> SORT BY CATERGORY:</label>
          <select name="catergorySort" id="catergorySort" @change="catergorySort()">
            <option value="All">All</option>
            <option value="Surf Boards">Surf Boards</option>
            <option value="Wet Suits">Wet Suits</option>
          </select>
          
        </div>
      
       <div class="sort">
         <label for="priceSort" class="form-label">SORT BY PRICE:</label>
         <select name="priceSort" id="priceSort" @change="priceSort()">
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
       </div>

       <div class="sort">
        <label for="sortName" class="form-label">SORT BY NAME:</label>
        <select name="sortName" id="sortName" @change="sortName()">
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
       </div>
     
    
  <div class="contai ">
   
     <div v-for="(product, i) in content" :key="product._id" class="testimonial">
      <div >
        <img class="test_img" :src="product.img" />
      </div>
      <div class="nam">
       <h1 class="name">{{product.title}}</h1>
      </div>
      
     <div class="quo">
        <h4 class="description" style="color:grey;">{{product.description}}</h4>
     </div>
     <div class="ema">
        <h6 class="price">R{{product.price}}</h6>
        
     </div>
     <div class="access">
     <input type="number" class="form-control" value="1" min="1" :id="`qty${i}`">
             <button class="btn" @click="addToCart(product, i)" style="font-size: 25px"><i class="fas fa-cart-plus"></i></button>
     </div>
    
      <div class=" b text-center margin-top-25" v-if="currentUser._id.valueOf() == product.created_by.valueOf()">
                    <button class="btn btn-mod btn-border btn-large" id="edit"  @click="changeUpdater(i)">EDIT</button>
                    <button class="btn btn-mod btn-border btn-large" id="delete" @click="deleteProduct(product._id)">DELETE</button>
      </div>

      
     </div>

  </div>
   <button id="submit-btn" class="btn btn-mod btn-border btn-large" @click="toggleModal">ADD A PRODUCTS</button>
  <Modal @clicked="toggleModal" v-if="showModal"/>
  <UpdateModal :updateContent="updateContent" @clicked="toggleModal2" v-if="showModal2"/>

</template>

<script>
import Modal from "../components/Modal.vue";
import UpdateModal from "../components/UpdateModal.vue"
import UserService from "../services/user.service";
export default {
  components: {Modal, UpdateModal },
  name: "Products",
  computed: {
    currentUser() { 
      return this.$store.state.auth.user;
    },
  },
  data() {
    return {
      content: "",
      showModal: false,
      showModal2: false,
      updateContent: "",
    };
  },
  methods: {
    toggleModal(){
      this.showModal = !this.showModal
    },
     toggleModal2(){
      this.showModal2 = !this.showModal2
    },
    changeUpdater(i){
      this.updateContent = this.content[i]
      this.showModal2 = !this.showModal2
    },
    deleteProduct(product){
            this.loading = true;
            this.$store.dispatch("product/delete", product).then(
              () => {
                location.reload();
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

        },
         addToCart(product, i){
           let qty = document.querySelector(`#qty${i}`).value;
      fetch('https://surfstore-backend.herokuapp.com/cart/' + product._id, {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken
  },
  body: JSON.stringify({qty: parseInt(qty)}),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
  localStorage.setItem('user', JSON.stringify(data))
})
.catch((error) => {
  console.error('Error:', error);
});
    }

  },

  mounted() {
    UserService.getPublicContent().then(
      (response) => {
        this.content = response.data;
      },
      (error) => {
        this.content =
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
.sort{
  display:inline-block;
  justify-content:center;
  padding:10px;


}
  .access{
    display:flex;
    justify-content:center;
  }
.form-control{
  width:150px;
}
.form-label{
  padding-right:10px;
}
.head{
   margin-top: 130px;
}
.contai{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top:25px;
  overflow-y: hidden;
  padding-bottom:25px;
}
.testimonial{
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

.test_img{
  display: flex;
  width: 395px;
  height: 330px;
  object-fit:cover;
    border-radius:9px 9px 0 0;
}

.name{
  font-size: 20px;
  text-align: center;
  padding-top:25px;
  font-weight: bold;
  padding:10px;
}
.relation{
  font-size:20px ;
  margin-top:5px;
   font-weight: bold;
   padding:10px;
}

.description{
  font-size: 17px;
  text-align: center;
  padding-top:25px;
  font-weight: 30px;
  padding:10px;
  
}





.price{
  padding-top:25px;
  color: #f01212;
  padding:10px;
  font-weight: bold;
}
.testimonial:hover{
  transform: scale(1.1); 
  transition: 0.5s;
}


@media only screen and (max-width: 904px){
  .testimonial{
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

.test_img{
  display: flex;
  width: 340px;
  height: 330px;
  object-fit:cover;
    border-radius:9px 9px 0 0;
}
}
</style>