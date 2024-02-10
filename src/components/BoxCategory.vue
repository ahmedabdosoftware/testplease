<template>
    <div class="contPro">
      <div>
        <div>
          <img :src="oneProduct.image" />
        </div>
        <div>
          <span> {{ oneProduct.name }}</span>
        </div>
      </div>
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
  //  console.log(pro)
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
    /* background-color: forestgreen; */
    display: flex;
    align-items: center;
    justify-content: center;
  }
  /* cont one product */
  .contPro > div {
    width: 100%;
    height: 100%;
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
    width: 80%;
    height: 69%;
    /* background-color: rgb(194, 191, 191); */
  }
  /*img => flower */
  .contPro > div > div:first-child img {
    width: 100%;
    height: 100%;
  }
  
  /* cont all descrption */
  .contPro > div > div:nth-child(2)  {
    width: 100%;
    height: 17%;
    /* background-color:rgb(210, 49, 49) ; */
}
.contPro > div > div:nth-child(2) span{
    text-align: center;
  }
 
  .dark-mode {
    background-color: black !important;
    box-shadow: 0 0 5px rgb(34, 34, 34) !important;
  }
  
  </style>
  