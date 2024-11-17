<template>
    <!-- singUp view -->
    <div class="singUp">
      <section class="login registerr">
        <!-- form => login -->
        <div>
            <span>signup</span>
        </div>
        <div>
            <input id="username-signup" type="text" placeholder="username" value="said10">
            <!-- <div> -->
                <img class="eyee shHi" src="https://icons-for-free.com/iconfiles/png/512/hidden+icon-1320183614047893754.png">
                <input id="password-signup" type="password" placeholder="password" value="123456">
                <input  id="name-signup" type="text" placeholder="name" value="said">
                <input  id="file" type="file" >
            <!-- </div> -->
        </div>
        <div>
            <button onclick="signup()" id="signup">signup</button>
            <span>do not have an account?<a href="../social/login.html"> login</a></span>
        </div>
        <div>
        <div>
            <div>
                <div><span>f</span></div>
                <p>login with facebook</p>
            </div>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png">
                <p>login with google</p>
            </div>
        </div>
        </div>
    </section>
    </div>
  </template>
  <script>
//   import BoxProduct from "@/components/BoxProduct.vue";
//   import BoxCategory from "@/components/BoxCategory.vue";
  export default{
    name: "SingUP",
    components: {
    
    },
    data(){
    return{
     
    }
  },
  methods:{

  },
    
  }
  
  </script>
  <style lang="scss" scoped>
  .singUp{
  width: 100%;
  height:1000px;
  background-color: white;
 }
    /* section => login */
section:first-child{
    margin-top: 40px;
    margin: auto;
    width: 360px;
    height:550px;
    background-color:white;
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
    border: 2px solid rgb(231, 228, 228);
}
/* cont => login */
section >div:first-child{
    width: 100%;
    height: 60px;
    /* background-color: rgb(255, 208, 0); */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 23px;
    font-weight: 700;
    text-transform: capitalize; 
}

/* cont => inputs */
section >div:nth-child(2){
    width: 100%;
    height: 200px;
    /* background-color: firebrick; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: space-around;
}
section >div:nth-child(2) input{
    width: 85%;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #CACACA;
    padding-left: 15px;
    /* font-size: 16px; */
    /* font-weight: 400; */
}
section >div:nth-child(2) a::first-letter,
section >div:nth-child(3) span::first-letter{
    text-transform: capitalize;
}
section >div:nth-child(2) a{
    color: #0171d3;
    font-size: 15px;
}
/* cont => buttom */
section >div:nth-child(3){
    width: 100%;
    height: 110px;
    /* background-color: skyblue; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    
}
section >div:nth-child(3)::after{
    content: "";
    position: absolute;
    bottom: 0px;
    width: 85%;
    height: 1px;
    background-color: #CACACA ;
    /* background-color: #9c2a2a ; */
}
section >div:nth-child(3)::before{
    content: "or";
    position: absolute;
    bottom: -15px;
    /* for center => start */
    left: 50%;
    transform: translate(-50%);
    /* for center => end */
    width: 30px;
    height: 30px;
    border-radius: 15px;
    color: #a9a0a0 ;
    background-color: white ;
    text-transform: capitalize;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
}
section >div:nth-child(3) button{
    width: 85%;
    height:40px;
    background-color: #0171d3;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 500;
    text-transform: capitalize;
    margin-top: 12px;
    color: white;
}
section >div:nth-child(3) span{
    font-size: 13px;
    font-weight: 700;
    padding-bottom: 20px;
    opacity: 0.6;
}
section >div:nth-child(3) span a{
    text-transform: capitalize;
    color: #0171d3;
    font-size: 13px;
    font-weight: 600;
}

/* cont => login with */
section >div:nth-child(4){
    width: 100%;
    height: 160px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    /* background-color: sandybrown; */
}
section >div:nth-child(4) >div{
    width: 100%;
    height: 110px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: space-around;
    /* background-color: hotpink; */
    margin-bottom: 20px;
    cursor: pointer;
}
section >div:nth-child(4) >div div{
    width: 85%;
    height: 40px;
    border-radius: 5px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
section >div:nth-child(4) >div div p{
    color: white;
    font-size: 15px;
    font-weight: 500;
    text-transform: capitalize;
}
section >div:nth-child(4) >div >div:first-child{
    background-color: #033f74;
}
section >div:nth-child(4) >div >div:first-child div{
    background-color: white;
    width: 25px;
    height: 25px;
    border-radius: 12.5px;
    font-size: 20px;
    font-weight: 600;
    color: #033f74;
    margin-left: -35px;
}
section >div:nth-child(4) >div div:nth-child(2){
    border: 1px solid  #CACACA ;
}
section >div:nth-child(4) >div div:nth-child(2) p{
    color: #CACACA;
}
section >div:nth-child(4) >div div:nth-child(2) img{
    width: 20px;
    height: 20px;
   margin-left: -42px;
}
/* section >div:nth-child(2) input:nth-child(2){
    position: relative;
    width: 100%;
} */
.eye,.eyee{
    position: absolute;
    right:35px;
    top:135px;  
    width: 25px;
    height: 25px;
    cursor: pointer;
    mix-blend-mode: multiply;
}    
.eyee{
    top:125px;  
   
}
input[type="file"]{
    position: relative;
}
input[type="file"]::-webkit-file-upload-button{
    /* style goes here */
    background-color: rgb(198, 195, 195);
    border: none;
    width: 120px;
    height: 40px;
    cursor: pointer;
    position: absolute;
    left: 0px;
}
  </style>