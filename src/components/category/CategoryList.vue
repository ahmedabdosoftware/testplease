<template>
    <!--==================== CATEGORY LIST ====================-->  
    <section id="Category" class="catogery">
      <div class="titleCatogery">
          <h1>our <span>catogery</span> </h1>
      </div>
      <div class="allContent allContentCatogery">
        <div v-for="category in CategoryList" :key="category.id">
           <BoxCategory
                :oneProduct="category"
                >
            </BoxCategory>
        </div>
      </div>
    </section>          
</template>

<script>

// componnents  Vue.js components
  import BoxCategory from "@/components/category/BoxCategory.vue";

export default {
  props: ["CategoryList"],
  name: "CtegoryList",
  components: {
    BoxCategory,
  },
  
  }
</script>

<style scoped lang="scss">
.products,.catogery{
  min-height: 400px;
  // background-color: rgb(209, 157, 52);
  display: flex;
  flex-wrap: wrap;
  width: 85%;
  justify-content: space-evenly;
  margin-top: 10px;
}
.titleCatogery{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  // background-color: rgb(60, 34, 178);
  h1{
    text-transform: capitalize;
    color: black;
    font-weight: 800;
    font-size: 33px;
    span{
      // background-color:  hsl(79, 63%, 50%);
      background-color: rgb(127, 6, 6);
      display: inline-block;
      padding-left: 25px;
      padding-right: 25px;
      padding-bottom: 5px;
      clip-path: polygon(0% 0% , 100% 0% , 92% 50%, 100% 100% ,0% 100%,8% 50%);
      color: white;
    }
  }
  
}
.titleProducts{
  width: 100%;
  height: 200px ;
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  // background-color: firebrick;
  
  >div:first-child{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    // background-color: chocolate;
    height: 44%;
    width: 100%;
    >h1{
      text-transform: capitalize;
      color: black;
      font-weight: 800;
      font-size: 33px;
      span{
        color: white;
        // background-color: rgb(22, 175, 22);
        background-color:  hsl(79, 63%, 50%);

        display: inline-block;
        padding-left: 25px;
        padding-right: 25px;
        padding-bottom: 5px;
        clip-path: polygon(0% 0% , 100% 0% , 92% 50%, 100% 100% ,0% 100%,8% 50%);

      }
    
    }
  }
  >div:nth-child(2){
    // background-color: seagreen;
    height: 50%;
    width: 40%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    select {
        border-radius: 5px;
        height: 40px;
        width: 100px;
        text-transform: capitalize;
        color: black;
        border: solid 2px rgb(233, 230, 230);
        padding-left: 10px;
      }
      input {
        height: 40px;
        width: 270px;
        padding-left: 15px;
        color: black;
        border: solid 2px rgb(233, 230, 230);
        border-radius: 5px;
      }
      input:focus {
        outline: none;
      }
  }
}
.allContentProduct,.allContentCatogery {
  width: 100%;
  min-height: 300px;
  // background-color: red;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: flex-start;
  margin-top: 10px;
}
.allContentProduct > div {
  width: 350px;
  height: 450px;
  margin-top: 15px;
  margin-bottom: 15px;
  //  background-color: blue;
}
.allContentCatogery >div{
  margin-top: 15px;
  margin-bottom: 15px;
  width: 250px;
  height: 250px;
  //  background-color: red;
}

 /* media => ipad */
 @media(max-width:799px){

  .titleProducts{
  
  >div:nth-child(2){
    width: 100%;
    select {
        width: 60px;
      }
      input {
        width: 150px;
      }
   
  }
}
 
 }
</style>
