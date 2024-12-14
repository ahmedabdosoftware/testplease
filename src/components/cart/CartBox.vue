<template>
    <div class="contCart">
      <!-- Image and product info -->
      <div class="image-cont">
        <div>
          <img class="imge" :src="oneProduct.imageUrl[0]" />
        </div>
        <div>
          <p class="category-name">{{ categoryNameById }}</p>
          <p class="name">{{ oneProduct.name }}</p>
        </div>
      </div>
  
      <!-- Quantity controls -->
      <div class="quantity-controls">
        <button @click="decreaseQuantity">-</button>
        <!-- <button>-</button> -->
        <span>{{ oneProduct.quantity }}</span>
        <button @click="increaseQuantity">+</button>
        <!-- <button >+</button> -->
      </div>
  
      <!-- Price -->
      <div v-if="oneProduct.offerPrice" class="price">
         {{ oneProduct.offerPrice.toFixed(2) }} 
        </div> 
        <div v-else class="price">
         {{ oneProduct.priceMaterial.toFixed(2) }}
        </div>
      <!-- Delete -->
      <div class="delete">
        <button @click="deleteProduct">×</button>
      </div>
    </div>
  </template>
  
  <script>
  
  // mixins 
  import categoryNameById from '@/mixins/categoryName';

  // actions 
   import {  mapState , mapActions } from 'pinia'

  //store
  import { useCategoriesStore } from '@/store/categories/categories.js';
  import { useCartStore } from '@/store/cart/cart.js';

  export default {
    name: "BoxProduct",
    props: ["oneProduct"],
    mixins: [categoryNameById],
    data() {
    return {
      id:'',
      
    };
  },
  async created() { 
    await this.fetchCategories();
     this.id = this.oneProduct.categoryId;

  },
  
  computed: {
    ...mapState(useCategoriesStore, ['categories']),
  },
    methods: {
      ...mapActions(useCategoriesStore, ['fetchCategories']),
      ...mapActions(useCartStore, ['addToCart','removeFromCart']),
        // ============ add one item to cart  => start ==========================================
      increaseQuantity() {
          this.addToCart(this.oneProduct, 1); // إضافة المنتج للسلة
          alert("added one item to cart!");
        },
       // ============== add one item to cart  => end ==========================================
      // ============ remove  one item  from cart  => start ==========================================
      decreaseQuantity() {
          this.addToCart(this.oneProduct, -1); // تقليل المنتج من السله
          alert("removed one item from cart!");
        },
       // ============ remove one item from cart  => end ==========================================
      // ============ remove from cart  => start ==========================================
      deleteProduct() {
        this.removeFromCart(this.oneProduct.id); // إزالة المنتج من السلة
        alert("Product removed from cart!");
      },
   // ============ remove from cart  => end ==========================================
    },
  };
  </script>
  
  <style scoped lang="scss">
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
  }
  .contCart::after{
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    left: 0px;
    bottom: 0px;
    background-color: rgb(150, 147, 147);
  }
  .contCart {
    position: relative;
    width: 90%;
    height: 90px;
    display: flex;
    align-items: center;
    // background-color: rgb(213, 149, 21);
    justify-content: space-between;
  
    > div {
      height: 100%;
      display: flex;
      align-items: center;
    }
  
    .image-cont {
      width: 30%;
      display: flex;
  
      > div:first-child {
        width: 40%;
        height: 100%;
        // background-color: rgb(114, 103, 103);
        display: flex;
        align-items: center;
        justify-content: center;
  
        .imge {
          width: 70%;
          height: 70%;
        }
      }
  
      > div:nth-child(2) {
        width: 60%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 8px;
  
        p:first-child {
          font-size: 12px;
          color: rgb(223, 224, 224);
          margin-bottom: 5px;
        }
  
        p:last-child {
          font-size: 15px;
          color: black;
          font-weight: bold;
        }
      }
    }
  
    .quantity-controls {
      width: 20%;
      display: flex;
      justify-content: center;
      align-items: center;
  
      button {
        width: 30px;
        height: 30px;
        background-color: white;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 18px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
  
      span {
        margin: 0 10px;
        font-size: 16px;
      }
    }
  
    .price {
      width: 15%;
      font-size: 16px;
      text-align: center;
    }
  
    .delete {
      width: 10%;
      display: flex;
      justify-content: center;
  
      button {
        font-size: 20px;
        background: none;
        border: none;
        color: red;
        cursor: pointer;
      }
    }
  }
  @media (max-width: 460px) {
    .contCart {
    width: 100%; 
  }
  .image-cont {
    width: 35% !important;
    // background-color: red;
  }
  .price {
        width: 10% !important;
        font-size: 16px;
        text-align: center;
        // background-color: red;
      }
      .name{
        font-size: 12px !important;
      }
      .category-name{
        font-size: 10px !important;
        margin-bottom: 8px !important;

      }
      .imge {
          width: 60% !important;
          height: 60% !important;
        }
}
  </style>
  