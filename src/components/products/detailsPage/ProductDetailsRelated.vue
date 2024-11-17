<template>
    <!--==================== PRODUCTS DETAILS REALTED ====================-->  
    <section>
      <div>
        <h2> related products</h2>
      </div>
      <div>
         <!-- {{productsRelatedAfterCut[0].price  }} -->
        <div>
          <div class="cont-product" v-for="s in productsRelatedAfterCut " :key="s.id">
            <BoxProduct
              :oneProduct="s"
            ></BoxProduct>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import BoxProduct from "@/components/products/BoxProduct.vue";
export default {  
    name: "ProductDetailsRelated",
    components: {
    BoxProduct,
  },
   props: {
    productsRelatedAfterCut: {
      default: null,
    },
  },
}


  
</script>

<style scoped lang="scss">

section:nth-child(2){
  width: 70%;
  height: 600px;
  // background-color: rgb(199, 15, 15);
  display: flex;
  flex-wrap: wrap;
  >div:first-child{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 13%;
    // background-color: green;

    h2{
          text-transform: capitalize;
          font-size: 30px;
    }

  }
  >div:nth-child(2){
    width: 100%;
    height: 90%;
    // background-color: rgb(0, 255, 64) !important;
    >div{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-items: center;
      width: 100%;
      height: 100%;
      // background-color: red;
      >div{
        width: 24%;
        height: 80%;
        // background-color: rgb(0, 38, 255);

      }
    }


  }
}
@media(max-width:460px){

.contner{
height:2300px;

}

div >section:first-child{
  width: 100%;
 >div:first-child{
  width: 100%;
  >div:first-child{
    width: 100%;
  }
  >div:nth-child(2){
   width: 100%; 
 }
}
>div:nth-child(2){
  width: 100%;        
}
}

div > section:nth-child(2){
width: 85%;
margin-top: 700px;
margin-bottom: 200px;
>div:nth-child(2){
  width: 100%;
}
}
.cont-product{
width: 50% !important;
height: 260px !important;
}
}
</style>
