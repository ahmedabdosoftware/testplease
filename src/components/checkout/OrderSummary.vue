<template>
    <div class="order-summary">
      <div class="title-box">
        <h3>Order summary</h3>
      </div>
      <div class="order-head">
        <div>
            <span>Product</span>
        </div>
        <div>
            <p>Qty</p>
            <p>price</p>
        </div>
      </div>
      <div class="order-items">
        <div class="order-item" v-for="item in cartItems" :key="item.id">
            <img :src="item.imageUrl[0]" alt="product image" class="item-image" />
            <div class="item-details">
            <p class="item-name">{{ item.name }}</p>
            <p class="item-info"> {{ categoryName(item) }} </p>
            <p class="item-info"> Size: ---  </p>
            </div>
            <div class="item-quantity">
            <p class="item-name">{{ item.quantity }}</p>
            </div>
            <p class="item-price">{{ item.priceMaterial.toFixed(2) }} €</p>
        </div>
      </div>
      <div class="order-totals">
        <p>Subtotal <span>{{ totalPrice.toFixed(2) }} €</span></p>
        <p>Shipping cost <span>{{ shippingCost }} €</span></p>
        <p class="total">Total <span>{{ totalPriceWithShipping }} €</span></p>
      </div>
    </div>
  </template>
  
  <script>

    // mixins 
    import categoryName from '@/mixins/categoryName';
   
   // state , Actions
   import { mapState, mapActions } from "pinia";

   // store
   import { useCartStore } from '@/store/cart/cart.js';
   import { useCategoriesStore } from '@/store/categories/categories.js';

   export default {
    name: "SummaryBox",
    mixins: [categoryName],

      data() {
      return {   
      };
    },
    computed: {
      ...mapState(useCartStore, ['cartItems']),
      ...mapState(useCartStore, ['shippingCost']),
      ...mapState(useCategoriesStore, ['categories']),

      totalPrice() {
      // حساب المجموع الإجمالي بدون الشحن
      return this.cartItems.reduce(
        (sum, item) => sum + item.priceMaterial * item.quantity,
        0
      );
    },
      totalPriceWithShipping() {
      // إضافة تكلفة الشحن إلى الإجمالي
      return this.totalPrice + Number(this.shippingCost);
    },
  },
    methods: {
        ...mapActions(useCategoriesStore, ['fetchCategories']),
      removeData(){
        this.code = ""
      }

    },
    async created() { 
     await this.fetchCategories();

  },


  };
  </script>
  
  <style scoped lang="scss">
  .order-summary {
      width: 35%;
      border: 1px solid #ddd;
      border-radius: 5px;
      /* background-color: red; */
    }
    .title-box{
      /* width: 35%; */
      height: 40px;
      /* background-color: gold; */
      text-align: start;
      padding: 20px 0px 0px 20px;
  
    }
  
  .order-head{
    // background-color: #ddd;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    padding: 20px 0px 20px 20px;
    >div:first-child{
        width: 20%;
        // background-color: skyblue;
        }
    >div:nth-child(2){
        width: 40%;
        // background-color: seagreen;
        display: flex;
        justify-content: space-evenly;
        span{
            // background-color: red;
            margin-left: 35px;
        }

    }
  }
  .order-items{
      border-bottom: 1px solid rgb(161, 159, 159);
      padding-bottom: 30px;
      
    }
    .order-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 50px;
        padding-left: 20px ;
        padding-right: 20px ;
    /* background-color: green; */
  }
  .item-image {
    width: 50px;
    height: 50px;
    object-fit: cover;
    /* background-color: blue; */
  }
  .item-details {
    margin-right: 140px;
    /* background-color: #888; */
  }
  .item-name {
    font-weight: bold;
  }
  .item-info {
    color: #888;
    font-size: 10px;
    margin-top: 5px;
  }
  .order-totals{
    margin-top: 50px;
    
}
.order-totals p {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px ;
    font-weight: bold;

  }
  .total {
    font-size: 18px;
    padding-left: 0px;
    height: 80px;
    line-height: 80px;
    border-top: 1px solid rgb(161, 159, 159);

  }
  @media (max-width: 480px) {
    .order-summary {
      width: 100%;
    }
  .item-details {
    margin-right: 40px;
  }
  .order-head{
    >div:nth-child(2){
        width: 37%;
        justify-content: space-between;
        p:nth-child(2){
          
           margin-right: 30px;
        }

    }
  }
}
  </style>
  