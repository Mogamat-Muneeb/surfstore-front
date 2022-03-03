<template>
<Navbar />
<main>
  <router-view :key="$route.fullPath"/>
 </main>
 <!-- <Footer /> -->
</template>
<script>
import Navbar from "./components/Navbar.vue";
// import Footer from "./components/Footer.vue";
export default {
  components: { Navbar } 
  };
</script>

<style>

@import url( "http://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900&display=swap");
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* font-family:"Nunito,sans-serif" ; */
  /* background-color:#f5f5f5; */
  /* overflow-x: hidden; */
  /* width:100vw; */
}

#app {
  font-family: "Nunito",sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:  #012966;
  
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #012966;
  text-decoration:none;
}

#nav a.router-link-exact-active {
  color: #00bfff;
  text-decoration: none;
}

.btn {
  font-weight: bold;
  color: #012966;
  text-decoration:none; 
  margin-top: -7px;
}



</style>
