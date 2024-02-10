<template>
    <div class="contPro">
      <!-- <router-link :to="{ name: 'ProductDetails', params: { id: oneProduct.id } }"> -->
        <div>
          <div>
            <router-link :to="{ name: 'ProductDetails', params: { id: oneProduct.id } }">
              <img :src="oneProduct.images[0]" />
            </router-link>
        </div>
        <div>
          <span> {{ oneProduct.title }}</span>
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
          <span> $ {{ oneProduct.price }}</span>
          <img
              class="shoppingCart"
              src="https://images.all-free-download.com/images/graphiclarge/green_shopping_cart_icon_vector_280755.jpg"
            />
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
     
    },
    methods: {

    },
  };
  </script>
  <style scoped>
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
    /* background-color: red; */
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  
  /* cont img =>flower */
  .contPro > div > div:first-child {
    width: 90%;
    height: 59%;
    background-color: rgb(194, 191, 191);
    /* background-color:rgb(141, 28, 28); */
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
    color: #088178;
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
  .descrption {
    font-size: 14px;
  }
  .dark-mode {
    background-color: black !important;
    box-shadow: 0 0 5px rgb(34, 34, 34) !important;
  }
  .shoppingCart {
    width: 37px;
    height: 37px;
    position: absolute;
    right: 10px;
    bottom: 14px;
  }
  </style>
  