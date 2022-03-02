<template>
  <div class="mod" @click.self="toggleModal">
      <div class="card">
        <Form @submit="createProduct" :validation-schema="schema">
          <div class="form-group">
            <label for="title" style="padding-top:13px"></label>
            <Field name="title" type="text" class="form-control" placeholder="title"/>
            
            <ErrorMessage name="title" class="error-feedback" />
          </div>
          <div class="form-group">
            <label for="category" style="padding-top:13px"></label>
            <Field name="category" type="category" class="form-control" placeholder="category"/>
            
            <ErrorMessage name="category" class="error-feedback" />
          </div>
          <div class="form-group">
            <label for="description" style="padding-top:13px"></label>
            <Field name="description" type="description" class="form-control" placeholder="description"/>
            
            <ErrorMessage name="description" class="error-feedback" />
          </div>
          <div class="form-group">
            <label for="img" style="padding-top:13px"></label>
            <Field name="img" type="img" class="form-control" placeholder="img"/>
            
            <ErrorMessage name="img" class="error-feedback" />
          </div>
          <div class="form-group">
            <label for="price" style="padding-top:13px"></label>
            <Field name="price" type="price" class="form-control" placeholder="price"/>
            
            <ErrorMessage name="price" class="error-feedback" />
          </div>
          <div class="form-group b text-center margin-top-25">
            <button id="submit-btn" class="btn btn-mod btn-border btn-large" :disabled="loading">
              <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
              ></span>
              <span>Add Product</span>
            </button>
          </div>
          <div class="form-group">
            <div v-if="message" class="alert alert-danger" role="alert">
              {{ message }}
            </div>
          </div>
        </Form>
      </div>
  </div>
</template>
<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
     components: {
        Form,
        Field,
        ErrorMessage,
    },
    data() {
        const schema = yup.object().shape({
          title: yup.string().required("title is required!"),
          category: yup.string().required("category is required!"),
          description: yup.string().required("description is required!"),
          img: yup.string().required("img is required!"),
          price: yup.string().required("price is required!")
        });
        return {
          loading: false,
          message: "",
          schema,
          showModal: false
        };
    },
    methods: {
        toggleModal(){
            this.$emit('clicked')
        },
        createProduct(product){
            this.loading = true;
            this.$store.dispatch("product/create", product).then(
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

        }
    },
}
</script>
<style scoped>
    .mod {
        position: fixed;
        top: 0;
        width: 100%;
        height: 100vh;
        background: rgba(0, 0, 0, 0.3);
        display: flex;
        align-items: center;

    }

    .mod .card {
        height: fit-content;
        padding: 2rem;
        margin: 0 auto;
    }
 .card{
    display:flex;
    justify-content:center;
}
    a {
  text-decoration: none;
  
}
.signUp{
    padding-top: 30px;
}

.card {
  /* background: #fbfbfb; */
  /* border-radius: 8px; */
  /* box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.65); */
  height: 460px;
  margin: 6rem auto 8.1rem auto;
  width: 330px;
}
.card-content {
  padding: 12px ;
}
.card-title {
  /* font-family: "Raleway Thin", sans-serif; */
  /* letter-spacing: 4px; */
  padding-bottom: 23px;
  padding-top: 13px;
  text-align: center;
}
#submit-btn {
  /* background: -webkit-linear-gradient(right, #a6f77b, #2dbd6e); */
  border: none;
  /* border-radius: 21px; */
  box-shadow: 0px 1px 8px #1e90ff;
  cursor: pointer;
  /* color: white; */
  
  height: 42.3px;
  margin: 0 auto;
  margin-top: 50px;
  transition: 0.25s;
  width: 100%;
}
#submit-btn:hover {
  box-shadow: 0px 1px 18px #1e90ff;
}
.form {
  align-items: left;
  display: flex;
  flex-direction: column;
}
.form-border {
  background:#1e90ff;
  height: 1px;
  width: 100%;
}
.form-control {
  /* background: #fbfbfb; */
  border: none;
  outline: none;
  padding-top: 14px;
}



textarea#message.form-control {
    height: 120px;
}
h1.headin{
    padding-top:110px;
}
:required:hover{
  background-color:none;
}

*{
  scroll-behavior: smooth;
}
.containe {
  display:flex;
  padding: none;
  margin-bottom:50px;
}
/* contact */
#success-message {
  opacity: 0;
}

.col-xs-12.col-sm-12.col-md-12.col-lg-12 {
  padding: 0 20% 0 20%;
}

.margin-top-25 {
  margin-top: 25px;
}

.form-title {
  padding: 25px;
  font-size: 30px;
  font-weight: 300;
  /* font-family: "Helvetica Neue",Helvetica,Arial,sans-serif; */
}

.form-group .form-control {
   display: block;
    border-radius: 0;
    width: 100%;
    height: 48px;
    padding: 10px 24px;
    font-size: 15px;
    font-weight: 400;
    border-radius: 25px;
    line-height: 1.6;
    color: #333;
    background-color: #fff;
    background-image: none;
    border: solid 1px #9dd8e0;
    -webkit-box-shadow: none;
    /* box-shadow: none; */
     box-shadow:8px 8px 15px #e4e4e4;
}


.form-group .form-control:hover {
	border: solid 1px#1e90ff;
}

/* textarea {
  resize: none;
} */

.btn-mod.btn-large {
    height: auto;
    padding: 13px 52px;
    font-size: 15px;
    
}

.btn-mod.btn-border {
    color: #fff;
    border: 1px solid #1e90ff;
    background: #1e90ff;
}

.btn-mod, a.btn-mod {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 4px 13px;
    color: #fff;
    background: rgba(34,34,34, .9);
    border: 1px solid transparent;
    font-size: 11px;
    font-weight: 400;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 2px;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    -webkit-transition: all 0.2s cubic-bezier(0.000, 0.000, 0.580, 1.000);
    -moz-transition: all 0.2s cubic-bezier(0.000, 0.000, 0.580, 1.000);
    -o-transition: all 0.2s cubic-bezier(0.000, 0.000, 0.580, 1.000);
    -ms-transition: all 0.2s cubic-bezier(0.000, 0.000, 0.580, 1.000);
    transition: all 0.2s cubic-bezier(0.000, 0.000, 0.580, 1.000);
}

.btn-mod.btn-border:hover, .btn-mod.btn-border:active, .btn-mod.btn-border:focus, .btn-mod.btn-border:active:focus {
    color: white;
    border-color:#9dd8e0 ;
    background:#9dd8e0;
    outline: none;
    
}

@media only screen and (max-width: 500px) {
    .btn-mod.btn-large {
       padding: 11px 15px;
       font-size: 14px;
    }
  
    .form-title {
        font-size: 20px;
  }
  .containe{
    padding: 80px;
  }
}
/* .call{
  margin-left: 35%;
} */

.fas{
  display:flex;
  justify-content: center;
  font-size:35px;
  /* padding-bottom:10px; */
  /* color:#2c3e50; */
  
}

.call-me{
  display:flex;
  justify-content: center;
  color:#9dd8e0;
}

.call-me-1{
  display:flex;
  justify-content: center;
  /* padding-top: 10px; */
}
.call-holder{
  padding-top: 15px;
}
.fas{
  color:#1e90ff;
}
.b{
  display:flex;
  justify-content: space-around;
  
  
}

.btn{
    
    padding: 25px 43px;
    border-radius: 30px;

    


}




@media only screen and (max-width: 494px) {
    h1.headin{
    padding-top:50px;
}
}  


</style>