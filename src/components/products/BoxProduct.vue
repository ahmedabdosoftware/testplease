<template>
    <div class="contPro">
      <!-- <router-link :to="{ name: 'ProductDetails', params: { id: oneProduct.id } }"> -->
      <div>
        <div class="image-container">
          <router-link  v-if="!oneProduct.displayOutOfStock" :to="{ name: 'ProductDetails', params: { id: oneProduct.id } }">
            <img :src="oneProduct.imageUrl[0]" />
            <div v-if="oneProduct.offerPrice" class="sale-badge">
              {{ discountPercentage }}% OFF
            </div>
          </router-link>
          <div class="out-stock-cont" v-else>
            <img :src="oneProduct.imageUrl[0]" style="cursor: not-allowed; opacity: 0.6;" />
            <div class="out-of-stock-badge">Out of Stock</div>
          </div>
        </div>

        <div>
          <span class="title"> {{ oneProduct.name }}</span>
          <!-- <p class="descrption">{{ oneProduct.description.substring(0, 22)}}</p> -->
          <p class="descrption">{{ oneProduct.description.substring(0, 22)}}</p>
          <div class="cont-star">
            <img
              class="star"
              src="https://img.freepik.com/free-vector/start_53876-25533.jpg"
            />
            <img
              class="star"
              src="https://img.freepik.com/free-vector/start_53876-25533.jpg"
            />
            <img
              class="star"
              src="https://img.freepik.com/free-vector/start_53876-25533.jpg"
            />
            <img
              class="star"
              src="https://img.freepik.com/free-vector/start_53876-25533.jpg"
            />
            <img
              class="star"
              src="https://img.freepik.com/free-vector/start_53876-25533.jpg"
            />
          </div>
          <p v-if="oneProduct.offerPrice" class="price">
            <span class="old-price"> {{ oneProduct.priceMaterial }}</span>
            <span class="offer-price">{{ oneProduct.offerPrice }}</span>
          </p>
          <p v-else class="price">
            <span>{{ oneProduct.priceMaterial }}</span>
          </p>    
          <router-link 
            v-if="!oneProduct.displayOutOfStock" 
            :to="{ name: 'ProductDetails', params: { id: oneProduct.id } }">
            <font-awesome-icon class="icon shoppingCart" :icon="['fas', 'cart-shopping']" />
          </router-link>
          <div v-else >
            <font-awesome-icon class="icon shoppingCart disabled-cart" :icon="['fas', 'cart-shopping']" />
          </div>



        </div>
      </div>
    <!-- </router-link> -->
    </div>
  </template>
  
  <script>
  export default {
    name: "BoxProduct",
    props: ["oneProduct"],
    computed: {
      discountPercentage() {
        if (this.oneProduct.priceMaterial && this.oneProduct.offerPrice) {
          const originalPrice = this.oneProduct.priceMaterial;
          const discountedPrice = this.oneProduct.offerPrice;
          const discount = ((originalPrice - discountedPrice) / originalPrice) * 100;
          return Math.round(discount);
        }
        return 0;
      }
    },

    methods: {

    },
    async created() {

}

  };
  </script>
  <style scoped lang="scss">
 
  * {
    padding: 0%;
    margin: 0px;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
  }
  .contPro {
    width: 100%;
    height: 100%;
    /* background-color: red; */
  }
  /* cont one product */
  .contPro > div {
    width: 100%;
    height: 100%;
    background-color: white;
    box-shadow: 0 0 5px rgb(210, 205, 205);
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  
  /* cont img =>flower */
  .contPro > div > div:first-child {
    width: 90%;
    height: 59%;
    background: linear-gradient(135deg, #f5f5f5, #ddd); /* خلفية هادئة */
    border-radius: 15px;
    position: relative;
  }
  /*img => flower */
  .contPro > div > div:first-child img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
  }
  
  /* cont all descrption */
  .contPro > div > div:nth-child(2) {
    width: 100%;
    height: 27%;
    /* background-color:rgb(210, 49, 49) ; */
    padding-right: 60px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    position: relative;
  }
  /* marka */
  .contPro > div > div:nth-child(2) span:nth-of-type(1) {
    color: rgb(91, 89, 89);
  }
  /* price and  short descrption */
  .contPro > div > div:nth-child(2) span:nth-of-type(2) {
    text-transform: capitalize;
    color: rgb(91, 89, 89);
    font-size: 18px;
  }
  .cont-star {
    margin-left: 15px;
  }
  /* star */
  .star {
    width: 20px;
    height: 20px;
    margin-left: -5px;
  }
  .contPro > div > div:nth-child(2) span:nth-of-type(1),
  .contPro > div > div:nth-child(2) p,
  .contPro > div > div:nth-child(2) span:nth-of-type(2) {
    padding-left: 15px;
  }
  .descrption,.title {
  font-size: 14px;
  display: block;
  /* width: 100%; */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.shoppingCart {
    width: 37px;
    height: 37px;
    position: absolute;
    right: 10px;
    bottom: 14px;
    // color:  rgb(196, 196, 196);
    // color:  rgb(158, 108, 108);
    color:  rgb(176, 151, 151);
  }
  .disabled-cart {
    color: gray;
    opacity: 0.5;
    cursor: not-allowed;
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


.image-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.image-container img {
  width: 100%;
  height: 100%;
  border-radius: 15px;
}

.sale-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #e63946;
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.9;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
.out-of-stock-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #ccc;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;
  opacity: 0.8;
  cursor: not-allowed;

}
.out-stock-cont{
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: center;

}
@media (max-width: 460px) {
  .descrption,.title {
    font-size: 12px; 
    max-width: 100%; 
  }
  /*img => flower */
  .contPro > div > div:first-child img {
    width: 80%;
    height: 80%;
    border-radius: 15px;
    margin-top: 20px;
  }
  .shoppingCart {
    width: 30px;
    height: 30px;
  }
  .outOfStock{
    position: absolute;
    right: 10px;
    bottom: 14px;
    font-size: 10px;
  }
  
}
@media (max-width: 325px) {
  .star{
    display: none;
  }
  .shoppingCart {
    width: 20px;
    height: 20px;
  }
}
  </style>
  