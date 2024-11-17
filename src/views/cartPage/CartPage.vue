<template>
    <div class="page">
        <div class="cont-products">
            <div class="title">
                <h2>shipping cart</h2>
                <p>{{ cartItems.length }} items</p>
            </div>
            <div class="cart">
                <!-- عرض المنتجات باستخدام v-for -->
                <CartBox v-for="item in cartItems" :key="item.id" :oneProduct="item" />
            </div>
            <div class="back-to-shop">
                <router-link exact to="/">     
                  <font-awesome-icon class="arrow-left" icon="arrow-left" /> Back to shop
                </router-link>
            </div>  
        </div>
        <div class="summary">
          <summaryBox />
        </div>
    </div>
  </template>
  
  <script>

    import CartBox from "@/components/cart/CartBox.vue";
    import summaryBox from "@/components/cart/summaryBox.vue";

    // state
    import {  mapState } from 'pinia'
    // store
    import { useCartStore } from '@/store/cart/cart.js';

  export default {
    name: "CartPage",
    components: {
    CartBox,
    summaryBox
  
  },
  computed: {
    ...mapState(useCartStore, ['cartItems']),

  },

    methods: {

    },
    async created() {

}

  };
  </script>
  <style scoped lang="scss">
 
 .page{
     min-height: 600px;
    //  background-color: slategrey;
     display: flex;
     flex-wrap: wrap;
     justify-content: center;
     align-items: flex-start;
     margin-top: 20px;
 }

.cont-products{
    width: 65%;
}


.title{
    position: relative;
    width: 90%;
    height: 100px;
    // background-color: red;
    display: flex;
    justify-content: space-between;
    padding-left: 40px;
    padding-right: 20px;
    p,h2{

        line-height: 60px;
    }
    h2{
        // background-color: forestgreen;
        text-transform: capitalize   ;

    }
    
}
.title::after{
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    left: 40px;
    bottom: 0px;
    background-color: rgb(150, 147, 147);
  }
.cart{
    width: 100%;
    min-height: 100px;
    // background-color: red;
    padding-left: 30px;
}
.back-to-shop {
    // background-color: red;
    margin-top: 20px;
    font-size: 16px;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100px;
    padding-left: 30px;
}

.back-to-shop a {
    text-decoration: none;
    color: #000;
    font-weight: bold;
    display: flex;
    align-items: center;
}

.back-to-shop .arrow-left {
    margin-right: 8px;
}

.summary{
    width: 35%;
    height: 430px;
    // background-color: slateblue;
}



@media (max-width: 460px) {
    .title{
    position: relative;
    width: 100%;
    }
  .cont-products{
    width: 100%;
  }
  .summary{
    width: 100%;
  }
}
  </style>
  