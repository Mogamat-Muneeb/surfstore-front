<template>
  <div class="container">
    <header class="jumbotron">
      <h1>PROFILE</h1>
    </header>
     <div>
      <strong class="name">Fullname:</strong>
      <h6>{{ currentUser.playername }}</h6>
    </div>
    <div>
      <strong class="name">Token:</strong>
      <h6>{{ currentUser.accessToken.substring(0, 20) }} ...</h6>
      <h6>{{ currentUser.accessToken.substr(currentUser.accessToken.length - 20) }}</h6>
    </div>
    <div>
      <strong class="name">User ID:</strong>
      <h6>{{ currentUser._id }}</h6>
    </div>
    <div>
      <strong class="name">Email:</strong>
      <h6>{{ currentUser.email}}</h6>
    </div>
     <!-- <div>
      <strong class="name">Phone Number:</strong>
      <h6>{{ currentUser.number }}</h6>
    </div> -->
  </div>
</template>
<script>
export default {
  name: "Profile",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/Login");
    }
  },
};
</script>

<style scoped>
.container {
    /* display: flex; */
    /* justify-content: flex-start; */
    text-align: center;
    margin-top: 130px;
   
}
.name{
  color: #1e90ff;
   padding-right: 10px;
}
.jumbotron{
  display: flex;
  justify-content:center;
}
h6{ 
  padding-right: 10px;
}
</style>