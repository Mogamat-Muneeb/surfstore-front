<template>
  <div class="bruh" @click.self="toggleModal">
      <div class="card">
        <Form @submit="updateProduct" :validation-schema="schema">
          <div class="form-group">
            <label for="title" style="padding-top:13px">title</label>
            <Field name="title" type="text" class="form-content" :value="updateContent.title"/>
            <div class="form-border"></div>
            <ErrorMessage name="title" class="error-feedback" />
          </div>
          <div class="form-group">
            <label for="category" style="padding-top:13px">category</label>
            <Field name="category" as="select" class="form-content" :value="updateContent.category">
                <option value="Crewneck">Wet Suits</option>
                <option value="Hoodie">Surf Boards</option>
  
            </Field>
            <div class="form-border"></div>
            <ErrorMessage name="category" class="error-feedback" />
          </div>
          <div class="form-group">
            <label for="description" style="padding-top:13px">description</label>
            <Field name="description" type="text" class="form-content" :value="updateContent.description"/>
            <div class="form-border"></div>
            <ErrorMessage name="description" class="error-feedback" />
          </div>
          <div class="form-group">
            <label for="img" style="padding-top:13px">img</label>
            <Field name="img" type="text" class="form-content" :value="updateContent.img"/>
            <div class="form-border"></div>
            <ErrorMessage name="img" class="error-feedback" />
          </div>
          <div class="form-group">
            <label for="price" style="padding-top:13px">price</label>
            <Field name="price" type="text" class="form-content" :value="updateContent.price"/>
            <div class="form-border"></div>
            <ErrorMessage name="price" class="error-feedback" />
          </div>
          <div class="form-group">
            <button id="submit-btn" class="btn btn-primary btn-block" :disabled="loading">
              <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
              ></span>
              <span>Update</span>
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
  props: [
    'updateContent'
  ],
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
        updateProduct(product){
            let _id = this.updateContent._id
            this.loading = true;
            this.$store.dispatch("product/update", {...product, _id }).then(
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

<style>
    .bruh {
        position: fixed;
        top: 0;
        width: 100%;
        height: 100vh;
        background: rgba(0, 0, 0, 0.3);
        display: flex;
        align-items: center;
    }
    .form-content {
        width: 100%;
    }
    .bruh .card {
        height: fit-content;
        padding: 2rem;
        margin: 0 auto;
    }
</style>