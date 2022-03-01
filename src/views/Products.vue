<template>
   <div class="container-title">
              <h1>PRODUCTS</h1>
          </div>
  <div class="container">
      
       <div class="col">
          <label for="catergorySort" class="form-label"> Sort by catergory:</label>
          <select name="catergorySort" id="catergorySort" onchange="catergorySort()">
            <option value="all">all</option>
            <option value="fruit">fruit</option>
            <option value="vegetables">vegetables</option>
          </select>
          
        </div>
      
       <div class="col">
         <label for="priceSort" class="form-label">Sort by price:</label>
         <select name="priceSort" id="priceSort" onchange="priceSort()">
          <option value="ascending">ascending</option>
          <option value="descending">descending</option>
        </select>
       </div>

       <div class="col">
        <label for="sortName" class="form-label">Sort by name:</label>
        <select name="sortName" id="sortName" onchange="sortName()">
          <option value="ascending">ascending</option>
          <option value="descending">descending</option>
        </select>
       </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container{
    display: flex;
    justify-content:center;
   

}
.container-title {
   
    padding-top: 120px;
    text-align: center;
    
}

.form-label{
    padding-top:40px;
}
</style>