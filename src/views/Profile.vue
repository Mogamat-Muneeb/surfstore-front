<template>
  <div class="container">
    <header class="jumbotron">
      <h1>
        PROFILE
      </h1>
    </header>
     <p>
      <strong>Name:</strong>
      {{ currentUser.fullname }}
    </p>
    <p>
      <strong>Token:</strong>
      {{ currentUser.accessToken.substring(0, 20) }} ...
      {{ currentUser.accessToken.substr(currentUser.accessToken.length - 20) }}
    </p>
    <p>
      <strong>Id:</strong>
      {{ currentUser._id }}
    </p>
    <p>
      <strong>Email:</strong>
      {{ currentUser.email }}
    </p>
     <p>
      <strong>Phone Number:</strong>
      {{ currentUser.phone_number }}
    </p>
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
      this.$router.push("/login");
    }
  },
};
</script>

<style scoped>
.container {
    /* display: flex;
    justify-content: center; */
    margin-top: 130px;
}
</style>