<template>
    <div class="contPro">
      <!-- <router-link :to="{ name: 'ProductDetails', params: { id: oneProduct.id } }"> -->
      <div>
        <div>
            <router-link :to="{ name: 'ProductDetails', params: { id: oneProduct.id } }">
              <img :src="oneProduct.imageUrl[0]" />
            </router-link>
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
          <span> $ {{ oneProduct.priceMaterial }}</span>
          <router-link :to="{ name: 'ProductDetails', params: { id: oneProduct.id } }">
              <font-awesome-icon class="icon shoppingCart" :icon="['fas', 'cart-shopping']" />
          </router-link>

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
    async created() {

}

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
    color:  rgb(196, 196, 196);
    color:  rgb(158, 108, 108);
    color:  rgb(176, 151, 151);
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
  
}
  </style>
  