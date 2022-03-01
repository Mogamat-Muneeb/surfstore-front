<template>
  <div class="container">
    <div class="row">
      <div class="name col">
  
        <h1  style="font-size:80px;">SURF STORE</h1>
        <h6 style="font-size:20px;color:#1e90ff;">Your local surf store</h6>

     
      </div>
      <div class="col">
        <img src="https://i.postimg.cc/V6jhwtmD/maysym-removebg-preview.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
 

      
}

 
        
</script>

<style scoped>
/* .blink {

   display:flex;
  justify-content: center;
  flex-direction: column;
  
 
} */

.blink-hard {
  animation: pulse 4s infinite;
}

@keyframes pulse {
  50% {
    opacity: 0;
  }
}

.container {
   /* height:100vh; */
  padding-top: 150px;
  margin-bottom:50px;
 
}
/* .row{
    display: flex;
  flex-wrap:wrap;
} */
.name{
  padding-top:135px;
  /* padding-left: 135px; */
}
img{
  height:550px;
  object-fit: cover;
  
  
}
h6{
  font-weight: 700;
}
h1{
  font-weight:700;
}
@media screen and (max-width: 494px){
.name{
  padding-top:10px;
  padding-left:10px;
}
img{
  height:450px;
  object-fit: cover;
  padding-top: 30px;
  /* padding-right: 130px; */
  /* padding-left:58px; */
  
}
.container {
   height:90vh;
   
  /* padding-top: 150px; */
 
}
.row {
  overflow-x: hidden;
}
}

</style>