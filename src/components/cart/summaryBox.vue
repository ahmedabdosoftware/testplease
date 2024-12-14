<template>
    <div class="summary-box">
      <h3 class="summary-title">Summary</h3>
      <div class="summary-item">
        <span>ITEMS</span>
        <span>{{ cartItems.length }}</span>
      </div>
      <div class="summary-item summary-item--label">
        <p>SHIPPING</p>
        <select 
          class="summary-select"
          v-model="selectedShipping"
          @change="updateShipping"
         >
          <option value="55">Cairo, Giza - 55 pound</option>
          <option value="60">Around Giza - 60 pound</option>
          <option value="60">New cities like Madinaty - 60 pound</option>
          <option value="70">Delta cities like Tanta, Alex - 70 pound</option>
          <option value="70">Al Qanah cities like Suez - 70 pound</option>
          <option value="85">Southern Egypt like Aswan, Luxor - 85 pound</option>
          <option value="100">Cities like Hurghada - 100 pound</option>
          <option value="125">South Sinai - 125 pound</option>
      </select>
      </div>
      <div class="summary-item summary-item--label">
        <p>GIVE CODE</p>
        <div class="code-input">
          <input v-model="code" type="text" placeholder="Enter your code" />
          <button @click="removeData"  > &rarr; </button>
        </div>
      </div>
      <div class="summary-item">
        <span>TOTAL PRICE</span>
        <span>{{ totalPriceWithShipping }}</span>
      </div>
      <router-link :to="{ name: 'CheckOut'}">      
        <button class="checkout-button">CHECKOUT</button>
      </router-link>
    </div>
  </template>
  <script>

   // state , Actions
   import { mapState, mapActions } from "pinia";
   // store
   import { useCartStore } from '@/store/cart/cart.js';
   export default {
    name: "SummaryBox",
      data() {
      return {
        code: "",     
        selectedShipping: 55, // القيمة الافتراضية للشحن
   
      };
    },
    computed: {
      ...mapState(useCartStore, ['cartItems']),
      totalPrice() {
        return this.cartItems.reduce((sum, item) => {
          const price = item.offerPrice? item.offerPrice : item.priceMaterial;
          console.log(price)
          return sum + price * item.quantity;
        }, 0);
      },
      totalPriceWithShipping() {
      // إضافة تكلفة الشحن إلى الإجمالي
      return this.totalPrice + Number(this.selectedShipping);
    },
  },
    methods: {
      ...mapActions(useCartStore, ["updateShippingCost"]),

      removeData(){
        this.code = ""
      },
      updateShipping() {
      this.updateShippingCost(Number(this.selectedShipping));
      },
  

    }


  };
  </script>
  
  <style scoped lang="scss">
  .summary-box {
    background-color: #f9f9f9;
    padding: 20px;
    // border-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    // box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 15px;
    height: 100%;
    // background-color: red;
  
    .summary-title {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 10px;
    //   background-color: red;
    }
    
    .summary-item {
        display: flex;
        justify-content: space-between;
        // background-color: red;
        align-items: center;
        font-size: 14px;
        height: 130px;
  
      span {
        font-weight: 500;
      }
    }
  
    .summary-select {
      width: 100%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 14px;
      background-color: white;
    }
  
    .code-input {
      display: flex;
      gap: 5px;
      width: 100%;
  
      input {
        flex: 1;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 14px;
      }
  
      button {
        padding: 8px 12px;
        background-color: black;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
        // margin-top: 30px;
      }
    }
  
    .checkout-button {
      width: 100%;
      padding: 10px;
      background-color: black;
      color: white;
      font-size: 16px;
      font-weight: bold;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      text-transform: uppercase;
      transition: background-color 0.3s ease;
  
      &:hover {
        background-color: #333;
      }
    }
  }
  .summary-item--label{
    // background-color: red;
    flex-direction: column !important;
    align-items: flex-start !important;
    
  }
  </style>
  