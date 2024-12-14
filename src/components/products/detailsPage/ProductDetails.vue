<template>
    <!--==================== PRODUCTS DETAILS  ====================-->  
    <section>
      <div>
        <div class="mainPicture">
          <img :src="product.imageUrl" class="fullPicture" /> 
        </div>
        <div>
          <div>
            <img :src="product.imageUrl" class="smallPicture" /> 
          </div>
          <div>
            <img :src="product.imageUrl" class="smallPicture" /> 
          </div>
          <div>
            <img :src="product.imageUrl" class="smallPicture" /> 
          </div>
        </div>
      </div>
      <div>
        <span>home/ {{ categoryName(product) }}</span>
        <p>{{ product.name }}
        </p>
        <span>${{ product.priceMaterial }}</span>
        <select >
          <option>select size</option>
          <option>small</option>
          <option>mediam</option>
          <option>large</option>
        </select>
        <div> 
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <button class="add-to-cart">add to cart</button>
        </div>
        <h2>product details</h2>
        <p> {{ product.description }}!</p>
      </div>
    </section>
</template>

<script>

export default { 
    
    props: {
    product: {
      default: null,
    },
  },
}


  
</script>

<style scoped lang="scss">

section:first-child{
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
     // background-color: forestgreen;
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
        background-color: green !important;

        font-size: 19px;
        color: white;
      }
     }
  }
}
.add-to-cart{
  background-color: green !important;

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
