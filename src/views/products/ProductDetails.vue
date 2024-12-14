<template>
  <div v-if="product" class="contner content">
    <section>
      <div>
       <!-- الصورة الرئيسية -->
       <div class="mainPicture">
          <img :src="mainImage" class="fullPicture" /> 
        </div>

        <!-- الصور الصغيرة -->
        <div>
          <div v-for="(image, index) in product.imageUrl" :key="index">
            <img 
              :src="image" 
              class="smallPicture" 
              @click="mainImage = image" 
            />           
          </div>
        </div>
      </div>

      <div>
        <span>home/ {{ categoryName(product) }}</span>
        <p>{{ product.name }}
        </p>
        <p v-if="product.offerPrice" class="price">
            <span class="old-price"> {{ product.priceMaterial }}</span>
            <span class="offer-price">{{ product.offerPrice }}</span>
        </p>
        <p v-else class="price">
          <span>{{ product.priceMaterial }}</span>
        </p>
        <!-- <span>${{ product.priceMaterial }}</span> -->
        <select >
          <option>select size</option>
          <option>small</option>
          <option>mediam</option>
          <option>large</option>
        </select>
        <div class="number"> 
          <input type="number" v-model="quantity">
          <button class="add-to-cart" @click="addToCartHandler">add to cart</button>
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
          <div class="cont-product" v-for="s in productsRelatedAfterCut " :key="s.id">
            <BoxProduct
              :oneProduct="s"
              ></BoxProduct>
            </div>
          </div>
        </div>
      </section>
    </div> 
    <div v-else class="contner loading">
      <CircleLoader
        :show="isLoading"
      >
    </CircleLoader>
  </div>

</template>
  
<script>

// components
  import BoxProduct from "@/components/products/BoxProduct.vue";
  import CircleLoader from "@/shared/components/loading/CircleLoader.vue";

  // actions 
  import {  mapState , mapActions } from 'pinia'

  //store
  import { useProductsStore } from '@/store/products/products.js'
  import { useCategoriesStore } from '@/store/categories/categories.js';
  import { useCartStore } from '@/store/cart/cart.js';
  
  // mixins 
  import categoryName from '@/mixins/categoryName';

  export default {
    name: "ProductDetails",
    mixins: [categoryName],
    components: {
    BoxProduct,
    CircleLoader,
  },
    data() {
    return {
      id:'',
      isLoading:false,
      product:'',
      quantity:1,
      productsRelated:[],
      mainImage: "", // الصورة الرئيسية

    };
  },
     computed: {
      ...mapState(useProductsStore, ['products']),
      ...mapState(useCategoriesStore, ['categories']),

  
      productsRelatedAfterCut () {
      
        return this.productsRelated.slice(0,Math.min(this.productsRelated.length,4))
      },
          
    },
    methods:{
  
  // ============ my actions => start=======================================

  ...mapActions(useProductsStore, ['fetchProducts']),
  ...mapActions(useCategoriesStore, ['fetchCategories']),
  ...mapActions(useCartStore, ['addToCart']),

  // ============ my actions => end==========================================
  
  // ============ load details product  => start ==========================================
    loadProductDetails() {
      // تحميل المنتج الحالي
      this.product = this.products.find((product) => product.id == this.id);
      if (this.product) {
        
        this.mainImage = this.product.imageUrl[0]; // تعيين الصورة الرئيسية
        // تحميل المنتجات ذات الصلة
        this.productsRelated = this.products.filter(
            (product) => product.categoryId == this.product.categoryId && product.id != this.product.id
          );
        }
      },
    // ============ load details product  => end ==========================================
    
    // ============ add to cart  => start ==========================================
    addToCartHandler() {
      this.addToCart(this.product, this.quantity); // إضافة المنتج للسلة
      alert("Product added to cart!");
    },
    // ============ add to cart  => end ==========================================
  


    },
    async created() {
      this.isLoading = true;
      await this.fetchProducts();
      await this.fetchCategories();
      this.id = this.$route.params.id;
      this.loadProductDetails();
      this.isLoading = false;

  },

    watch: {
    "$route.params.id": {
      immediate: true, // تشغيل عند الإنشاء أيضًا
      handler(newId) {
        this.id = newId; // تحديث `id`
        this.loadProductDetails(); // إعادة تحميل المنتج والمنتجات ذات الصلة
      },
    },
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
  width: 100%;
  height: 750px;
  // background-color: red;
  display: flex;
  flex-wrap: wrap;
  >div{
    width: 50%;
    height: 100%;
  }
  >div:first-child{
    // background-color: aqua; 
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
     padding-left: 35px;
    //  background-color: forestgreen;
     div{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      width: 30%;
      height: 90%;
      background: linear-gradient(135deg, #f5f5f5, #ddd); /* خلفية هادئة */
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
        // background-color: orangered;
        // background-color: rgb(127, 6, 6);
        background-color: green;

        font-size: 19px;
        color: white;
      }
     }
  }
}

.smallPicture{
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.3s;

}
.smallPicture:hover {
  transform: scale(1.1);
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
.number{
  display: flex;
  justify-content: space-evenly;
  // background-color: red;
  input{
    width: 40px;
    height: 40px;
    padding-left: 10px;
    border: 1px solid rgb(122, 122, 122);
    border-radius: 4px;
  }
}
.add-to-cart{
  cursor: pointer;
}
.price {
  display: flex;
  align-items: center;
  gap: 10px; 
}

.old-price {
  text-decoration: line-through; 
  color: #b0b0b0; 
  font-size: 14px; 
}


@keyframes pulsePrise {
  0% {
    color: #e63946;
  }
  50% {
    color: #b47b85; 
  }
  100% {
    color: #e63946; 
  }
}

.offer-price {
  color: #e63946 ; 
  font-size: 16px; 
  font-weight: bold; 
  animation: pulsePrise 1.5s infinite; 
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
  