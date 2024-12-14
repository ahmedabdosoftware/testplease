<template>
    <!--==================== OFFERS ====================-->            
    <section class="offer">
      <img v-if="filteredProducts" :src="filteredProducts.imageUrl[0]">
      <div>
        <p>exclusifly avilable on <span class="mark-name">simba store</span></p>
        <p>Dragon brand &</p>
        <pre>There have also been special discounts in the tax charged charged 
           for hybrid with Dragon avilable on</pre>
          <router-link v-if="filteredProducts" :to="{ name: 'ProductDetails', params: { id: filteredProducts.id } }">
              <button>buy now</button>
          </router-link>
      </div>
    </section>
</template>

<script>

// actions 
  import {  mapState , mapActions } from 'pinia'
  //store
  import { useProductsStore } from '@/store/products/products.js'
export default {

  name: "offer",
  computed: {
  ...mapState(useProductsStore, ['products']),
  // ============ filter => start=======================================
        
    // الفلترة النهائية
    filteredProducts() {
      let filteredProducts = this.products;

      // الخطوة 1: الفلترة بناءً على tag أو categoryId
   
        filteredProducts = filteredProducts.filter(product => product.tags?.includes("top"));

      return filteredProducts[0];
    },
  // ============ filter => end=======================================

  },
  
  methods:{
  
    // ============ my actions => start=======================================

    ...mapActions(useProductsStore, ['fetchProducts']),

    // ============ my actions => end==========================================

  

},
  async created(){
    await this.fetchProducts()  
    // console.log("all:", this.products[0].tags)
    console.log("filtred one",this.filteredProducts)
},
data(){
    return{
     
    }
  }
  }
</script>


<style scoped lang="scss">
.offer{
  width: 100%;
  height: 500px;
  margin-top: 70px;
  margin-bottom: 70px;
  // background-color: white;
  background-color: rgb(216, 214, 214);
  overflow: hidden;
  display: flex;
  >img{
    width: 30%;
    height: 100%;
    // clip-path: polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%);
     margin-left: 70px;
    //  background-color: rgb(134, 127, 127);
  }
  >div{
    width: 70%;
    height: 100%;
    background-color: rgb(243, 238, 238);
    clip-path: circle(600px at 80% 10%);
    p:first-child{
      font-size: 20px;
      text-transform: capitalize;
      padding-top: 35px;
      
    }
    p:nth-child(2){
      padding-top: 35px;
      font-size: 40px;
      font-weight: 600;
      text-transform: capitalize;
      color: black;
    }
    pre{
      padding-top: 35px;
      font-size: 18px;
      text-transform: capitalize;
      padding-left: 140px;
      // background-color: red;
      
    }
    button{
      margin-top: 35px;
      width: 160px;
      height: 38px;
      background-color: green;
      // background-color: rgb(127, 6, 6);

      text-transform: capitalize;
      cursor: pointer;
      position: relative;
      border-radius: 15px;
      font-size: 17px;
      color: white ;
      >a{
      }
    }
    button::after{
      content: "buy now";
      border-radius: 15px;
      text-align: center;
      background-color: rgb(16, 65, 16);
      background-color: rgb(88, 3, 3);

      line-height: 35px;
      width:  160px;
      height: 38px;
      position: absolute;
      left: 0px;
      top: 0px;
      clip-path: circle(0px);
      transition: all 1s ease-in-out;
    }
    button:hover::after{
      clip-path: circle(400px);
    }
    
  }
}
.mark-name{
    color: rgb(52 178 68);
    // color: rgb(127, 6, 6);

    // font-size: 20px;
}
 
@media(max-width:1025px){
    .offer{
    >div{
        clip-path: circle(400px at 80% 10%);
        pre{
        padding-right: 95px;
        font-size: 14px;
        }

    }
}

}
@media(max-width:820px){
    .offer{
    >div{
        clip-path: circle(320px at 80% 10%);
        pre{
        padding-left: 95px;
        font-size: 14px;
        }

    }
    }
}
@media(max-width:799px){
    .offer{
    >div{
    clip-path: circle(430px at 80% 10%);
    pre{
        padding-left: 10px;
        font-size: 14px;
    }

    }
    }
}

/* media => phone */
@media(max-width:460px){
    .offer{
        position: relative;
        >img{
            width: 150px;
            height: 150px;
            margin-left: 10px;
            // background-color: rgb(134, 127, 127);
            position: absolute;
            bottom: 10px;
            left: 10px;
        }
    >div{
        // background-color: red;
        clip-path: circle(350px at 80% 10%);
        width: 100%;
        // height: 170px;
        pre{
        // padding-right: 95px;
        font-size: 12px;
        // color: red;
        }

    }
    }
}
</style>
