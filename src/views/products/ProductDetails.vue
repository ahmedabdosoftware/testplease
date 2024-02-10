<template>
  <div>
    <section>
      <div>
        <div class="mainPicture">
          <img :src="product.images[0]" class="fullPicture" /> 
        </div>
        <div>
          <div>
            <img :src="product.images[0]" class="smallPicture" /> 
          </div>
          <div>
            <img :src="product.images[1]" class="smallPicture" /> 
          </div>
          <div>
            <img :src="product.images[2]" class="smallPicture" /> 
          </div>
        </div>
      </div>
      <div>
        <span>home/ {{ product.category.name }}</span>
        <p>{{ product.title }}
        </p>
        <span>${{ product.price }}</span>
        <select >
          <option>select size</option>
          <option>small</option>
          <option>mediam</option>
          <option>large</option>
        </select>
        <div> 
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <button>add to cart</button>
        </div>
        <h2>product details</h2>
        <p> {{ product.description }}!</p>
      </div>
    </section>
    <section>
      <div>
        <h2> related products</h2>
      </div>
      <div>
         <!-- {{productsRelatedAfterCut[0].price  }} -->
        <div >
          <div v-for="s in productsRelatedAfterCut " :key="s.id">
            <BoxProduct
              :oneProduct="s"
            ></BoxProduct>
          </div>
        </div>
      </div>
    </section>
  </div>  
</template>
  
<script>
import BoxProduct from "@/components/BoxProduct.vue";

  export default {
    name: "BoxCategory",
    components: {
    BoxProduct,
    // ReviewCostomer
  },
    data() {
    return {
      id:'',
      product:'',
      productsRelated:[],
    };
  },
     computed: {
      products () {
      return this.$store.state.products
    },
    productsRelatedAfterCut () {
    
      return this.productsRelated.slice(0,Math.min(this.productsRelated.length,4))
    },
    
     
    },
    beforeMount(){
    this.id = this.$route.params.id
    this.product = this.products.find(product => product.id == this.id)
    this.productsRelated =this.products.filter(product =>{
     return product.category.id == this.product.category.id
    }
      )
      
    console.log("this all products")
    console.log(this.products)
    console.log("this id this product")
    console.log(this.id)
    console.log(" this is the right now product")
    console.log(this.product)
    console.log(" this is category id for the right now product")
    console.log(this.product.category.id)
    // console.log(this.product.images[0])
    console.log("this Related products")
    console.log(this.productsRelated)
    console.log("length Related product")
    console.log(this.productsRelated.length)
    console.log("after cut the product")
    console.log(this.productsRelated.slice(0, 4))
    console.log("one product after cut the product")
    console.log(this.productsRelated[0])
    console.log("id for one product after cut the product")
    console.log(this.productsRelated[2].id)
    
  },
  mounted() {
    // for (let i = 0; i < Math.min(this.productsRelatedAfterCut.length, 4); i++) {
    //   const productPassed = this.productsRelatedAfterCut[i];
    //     this.$refs[`boxProduct${i}`].oneProduct = productPassed;
     
    // }
  },
  
  };
</script>

<style lang="scss" scoped>
div{
  width: 100%;
  height:1500px;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
div >section:first-child{
  width: 70%;
  height: 750px;
  // background-color: red;
  display: flex;
  flex-wrap: wrap;
  >div{
    width: 50%;
    height: 100%;
    // background-color: aqua; 
  }
  >div:first-child{
    display: flex;
    flex-wrap: wrap;
    >div:first-child{
      width: 100%;
      height: 77%;
      // background-color: red;
      .fullPicture{
        width: 100%;
        height: 100%;
      }
    }
    >div:nth-child(2){
     display: flex;
     flex-wrap: wrap;
     justify-content: space-between;
     align-items: flex-end;
     width: 100%;
     height: 23%;
     // background-color: forestgreen;
     div{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      width: 30%;
      height: 90%;
      background-color: rgb(119, 114, 114);
      .smallPicture{
          width: 100%;
          height: 100%;
        }
    }
   }
  }
  >div:nth-child(2){
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    padding-left: 35px;
    // background-color: rgb(40, 14, 110);
      >select:first-of-type{
        width: 140px;
        height: 40px;
        text-align: center;
        border-radius: 4px;
        font-size: 19px;
        
      }
      h2{
        text-transform: capitalize;
      }
      p:first-of-type{
        text-transform: capitalize;
      font-size: 38px;
      font-weight: 600;
      height: 90px;
      // background-color: red;
      text-align:start;
      }
      span{
        font-size: 19px;
        text-transform: capitalize;
        font-weight: 600;
      }
      p:nth-of-type(2){
        text-transform: capitalize;
        font-size: 19px;
        font-weight: 600;
        // background-color: red;
        line-height: 30px;
        text-align: start;
      }
      >div{
      width: 280px;
      height: 70px;
      // background-color: red;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      select{
        width: 50px;
        height: 43px;
        border-radius: 4px;
      }
      button{
        text-transform: capitalize;
        width: 200px;
        height: 43px;
        border-radius: 20px;
        background-color: orangered;
        font-size: 19px;
        color: white;
      }
     }
  }
}



div > section:nth-child(2){
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
</style>
  