<template>
  <!-- SingUP And SingIn view -->
  <div id="singUpCountner" class="singUpCountner">
    <div id="cont-sign" class="cont-sign">
      <div class="sing sing-in">
        <h2>sign in</h2>
        <form @submit.prevent="singIn">
          <div>
            <font-awesome-icon :icon="['fas', 'user']" />
            <input  v-model="email" type="email" placeholder="enter email" required>
          </div>
          <div>
            <font-awesome-icon :icon="['fas', 'lock']" />
            <input v-model="password" placeholder="password" type="password" required>
          </div>
          <button>login</button>
        </form>
        <p> or sign in with social platform</p>
        <div class="social-cont">
          <div>
            <font-awesome-icon :icon="['fab', 'facebook-f']" />        
          </div>
          <div>
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </div>
          <div>
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </div>
          <div>
            <font-awesome-icon :icon="['fab', 'x-twitter']" />
          </div>
        </div>
      </div>
      <div class="sing sing-up">
        <h2>sign up</h2>
        <form @submit.prevent="singUp">
          <div>
            <font-awesome-icon :icon="['fas', 'user']" />
            <input  v-model="name" type="text" placeholder="user name" required>
          </div>
          <div>
            <font-awesome-icon :icon="['fas', 'envelope']" />
            <input  v-model="email" type="email" placeholder="enter email" required>
          </div>
          <div>
            <font-awesome-icon :icon="['fas', 'lock']" />
            <input  v-model="password" placeholder="password" type="password" required>
          </div>
          <button >sign up</button>
        </form>
        <p> or sign in with social platform</p>
        <div class="social-cont">
          <div>
            <font-awesome-icon :icon="['fab', 'facebook-f']" />      
          </div>
          <div>
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </div>
          <div>
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </div>
          <div>
            <font-awesome-icon :icon="['fab', 'x-twitter']" />
          </div>
        </div>
      </div>
      <button v-on:click="animatedFromLift()" id="panel-lift-sign" class="solved-sign-in">sign up</button>
      <button  v-on:click="animatedFromRight()"  id="panel-right-sign" class="solved-sign-up">sign in</button>
    </div>
    <div class="panel-cont">
      <div class="panel panel-lift">
        <div class="content-lift">
          <h2>new here ?</h2>
          <pre>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Nostrum dolor officiis quo.</pre>
          <button >sign up</button>
        </div>
        <div  class="cont-imge-lift">
          <img src="../assets/undraw_maker_launch_re_rq81.svg">
        </div>
      </div>
      <div class="panel panel-right">
        <div  class="content-right">
          <h2>new here ?</h2>
          <pre>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Nostrum dolor officiis quo.</pre>
          <button  >sign in</button>
        </div>
        <div class="cont-imge-right">
          <img src="../assets/undraw_winter_designer_a-2-m7.svg">
        </div>
      </div>
    </div>
  </div>
   <div id="loader">
      <div class="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
</template>
<script>
//   import BoxProduct from "@/components/BoxProduct.vue";
//   import BoxCategory from "@/components/BoxCategory.vue";
import sweetalert from "sweetalert";
export default{
  name: "SingUPAndSingIn",
  components: {
  
  },
  data(){
  return{
  name: "",
  email: "",
  password: "",
  avatar: "https://picsum.photos/800",
  
}
},
methods:{
  // ============animated => start=============================================
  animatedFromLift(){
    document.getElementById('singUpCountner').classList.add("sign-up-mode")
    document.getElementById('panel-lift-sign').classList.add("sign-up-mode-solved")
    document.getElementById('panel-right-sign').classList.add("sign-in-mode-solved")
  },
  animatedFromRight(){
    document.getElementById('singUpCountner').classList.remove("sign-up-mode")
    document.getElementById('panel-lift-sign').classList.remove("sign-up-mode-solved")
    document.getElementById('panel-right-sign').classList.remove("sign-in-mode-solved")
  },
    // ============animated => end=============================================
  // ============singUp => start=============================================
  singUp(){
   this.loaderToggle(true)
    this.$store.dispatch('singUp',{
      name: this.name,
      email:this.email,
      password:this.password,
      avatar:"https://picsum.photos/800",
    }).then((res) => {
      console.log("sucssed")
      sweetalert({
            text: "created",
            icon: "success",
          });
      this.loaderToggle(false)
      this.animatedFromRight()
      this.name= ''
      this.email= ""
      this.password= ""
    })
    .catch((error) => {
      this.name= ''
      this.email= ""
      this.password= ""
      sweetalert({
                text: "try again",
                icon: "error",
              });
      console.log(error);
    });
    
  },
  // ============singUp => end=============================================
  // ============singIn => start=============================================
  singIn(){
    this.loaderToggle(true)
    this.$store.dispatch('singIn',{
      email:this.email,
      password:this.password,
    }).then((res) => {
      console.log("sucssed login")
      this.loaderToggle(false)
      sweetalert({
            text: "created",
            icon: "success",
          });
          this.$router.push({ name: "shop" });
          this.email= ""
          this.password= ""
        })
        .catch((error) => {
          this.email= ""
          this.password= ""
          sweetalert({
                text: "try again",
                icon: "error",
              });
          this.loaderToggle(false)
          console.log(error);
    })
    
    
  },
  // ============singIn => end=============================================
    // ============loader => start=============================================
    loaderToggle: function (show) {
      let loader = document.getElementById("loader");
      if (show) {
        loader.style.visibility = "visible";
      } else {
        loader.style.visibility = "hidden";
      }
    },
    // ============loader => end=============================================
  

},
  
}

</script>
<style lang="scss" scoped>
.singUpCountner{
width: 100%;
height:90vh;
overflow: hidden;
// background-color: rgb(52, 22, 173);
position: relative;
// .animated-sign{
//   animation-name: solvedProblem-sign !important;
//   animation-duration: 2s;
// }
>div:first-child{
  width:100%;
  height:100%;
  // background-color: rgb(12, 165, 165);
  position: absolute;
  z-index: 30;
.solved-sign-in,.solved-sign-up{
  width: 150px;
  height: 49px;
  color: white;
  background-color:  rgb(84, 84, 202);
  text-transform: uppercase;
  border: 1px solid rgb(199, 197, 197);
  border-radius: 25px;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  transition: transform 1s 0.2s ease-in-out;
  
}
.solved-sign-in{
  position: absolute;
  left: 348px;
  top: 171px;
}
.solved-sign-up{
  position: absolute;
  right: 348px;
  top: 171px;
  transform: translateX(800px);

}
.sing-in{
    // background-color: seagreen ;
    z-index: 1;
    // transition: opacity  0s 6s ease-in-out;
    // not important
    // transition: z-index  0s 6s ease-in-out ;
  }
  .sing-up{
    // background-color: rgb(55, 21, 150) ;
    height: 66% ;
    z-index: -1;
    opacity: 0;
    // transition: opacity  0s 6s ease-in-out ;
    // transition: transform 1s 6s ease-in-out ;
    // not important
    // transition: z-index  0s 6s ease-in-out;
  }
  .sing {
    position: absolute;
    right: 5%;
    top: 16%;
    width: 40%;
    height: 58%;
    // background-color: rgb(201, 35, 35);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    transition: all 1s 0.3s ease-in-out ;
    // transition: opacity 0s 5s ease-in-out !important;
    // transition: z-index 0s 5s ease-in-out!important;

    p{
      font-size: 19px;
      color: black;
    }
    h2{
      font-size: 40px;
      font-weight: 600;
    }
    .social-cont{
      display: flex;
      justify-content: space-evenly;
      width: 300px;
      height: 50px;
      background-color: white;
      >div{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 45px;
        height: 45px;
        background-color:white;
        border-radius: 50%;
        border: 2px solid rgb(94, 92, 92);
        cursor: pointer;
      }
    }
    form{
      width: 100%;
      height: 55%;
      // background-color: rgb(236, 225, 225);
      // background-color: rgb(94, 14, 14);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      >div{
        width:370px;
        height: 55px;
        border-radius: 20px;
        background-color: rgb(235, 235, 235);
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        
      }
      input{
        background-color: rgb(235, 235, 235);
        height: 100%;
        font-weight: 600;
        font-size: 18px;
        // background-color: rgb(84, 84, 202);
      }
      button{
        width: 150px;
        height: 49px;
        color: white;
        text-transform: uppercase;
        background-color: rgb(84, 84, 202);
        border-radius: 25px;
        font-size: 16px;
        font-weight: 600;
        text-align: center;
        cursor: pointer;
        
      }
    }
  }
  
}
}
.singUpCountner::after{
  content: "";
  font-size: 30px;
  position: absolute;
  z-index: 10;
  left: -1000px;
  top: -1000px;
  width: 2000px;
  height: 2000px;
  border-radius: 50%;
  background-color:  rgb(84, 84, 202);
  transition: transform 1s ease-in;
  // animation-name: solvedProblem;
  // animation-duration: 4s;
}

.panel-cont{
  width: 100%;
  height: 100%;
  // background-color: red;
  position: absolute;
  z-index: 20;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  >div{
    width:47%;
    height:100%;
  }
  >div{
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    // background-color: greenyellow;
    >div{
      width: 100%;
      height: 50%;
    }
    >div:nth-child(2){
      // background-color: red;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: transform 1s  ease-in-out;
    img{
      width: 80%;
      height: 80%;
    }
    }
    >div:first-child{
      height: 25%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;      
      // background-color: rgb(131, 69, 69);
      transition: transform 1s 0.2s ease-in-out;
      h2{
        color: white;
      }
      h2::first-letter{
        text-transform: capitalize;
      }
      pre{
        color: white;
        font-size: 18px;
      }
      button{
        width: 150px;
        height: 49px;
        color: white;
        background-color:  rgb(84, 84, 202);
        text-transform: uppercase;
        border: 1px solid rgb(199, 197, 197);
        border-radius: 25px;
        font-size: 16px;
        text-align: center;
        cursor: pointer;
        
      }
     
    }
    
  }

}


.panel-right .cont-imge-right, .panel-right .content-right{
  transform: translateX(800px);
}
// @keyframes solvedProblem{
//   0%{
    
//     z-index: 10;
//   }
//   }
// @keyframes solvedProblem-sign{
//   0%{
//     position: relative;
//     z-index: 30;
//   }

// }
// @keyframes solvedProblem-circle{
//   0%{
//     position: relative;
//     z-index: 40;
//   }
 

// }
// @keyframes solvedProblem-panel{
//   0%{
//     position: relative;
//     z-index: 50;
// }

// }

// animation mode start
.sign-up-mode::after{
  transform: translate(90%,-10%);
}
.sign-up-mode .panel-cont .panel-lift .content-lift {
  transform: translateX(-800px);
}
.sign-up-mode .panel-cont .panel-lift .cont-imge-lift{
  transform: translateX(-800px);
}
.sign-up-mode .panel-cont .panel-right .content-right {
  transform: translateX(0px);
}
.sign-up-mode .panel-cont .panel-right .cont-imge-right{
  transform: translateX(0px);
}
.sign-up-mode .cont-sign .sing-in {
  z-index: -3 !important;
  opacity:0!important;
  
}
.sign-up-mode .cont-sign .sing-up {
  // background-color: rgb(29, 136, 26) !important;
  transform: translateX(-140%)!important;
  opacity:1 !important;


}
// solved button
.sign-up-mode-solved {
  transform: translateX(-800px);
}
.sign-in-mode-solved {
  transform: translateX(0px) !important;
}


/* loader => start  */
.lds-spinner {
  color: official;
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-spinner div {
  transform-origin: 40px 40px;
  animation: lds-spinner 1.2s linear infinite;
}
.lds-spinner div:after {
  content: " ";
  display: block;
  position: absolute;
  top: 3px;
  left: 37px;
  width: 6px;
  height: 18px;
  border-radius: 20%;
  background: rgb(27, 25, 25);
}
.lds-spinner div:nth-child(1) {
  transform: rotate(0deg);
  animation-delay: -1.1s;
}
.lds-spinner div:nth-child(2) {
  transform: rotate(30deg);
  animation-delay: -1s;
}
.lds-spinner div:nth-child(3) {
  transform: rotate(60deg);
  animation-delay: -0.9s;
}
.lds-spinner div:nth-child(4) {
  transform: rotate(90deg);
  animation-delay: -0.8s;
}
.lds-spinner div:nth-child(5) {
  transform: rotate(120deg);
  animation-delay: -0.7s;
}
.lds-spinner div:nth-child(6) {
  transform: rotate(150deg);
  animation-delay: -0.6s;
}
.lds-spinner div:nth-child(7) {
  transform: rotate(180deg);
  animation-delay: -0.5s;
}
.lds-spinner div:nth-child(8) {
  transform: rotate(210deg);
  animation-delay: -0.4s;
}
.lds-spinner div:nth-child(9) {
  transform: rotate(240deg);
  animation-delay: -0.3s;
}
.lds-spinner div:nth-child(10) {
  transform: rotate(270deg);
  animation-delay: -0.2s;
}
.lds-spinner div:nth-child(11) {
  transform: rotate(300deg);
  animation-delay: -0.1s;
}
.lds-spinner div:nth-child(12) {
  transform: rotate(330deg);
  animation-delay: 0s;
}
@keyframes lds-spinner {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
#loader {
  width: 500px;
  height: 500px;
  visibility: hidden;
  /* background-color: slategray; */
  position: fixed;
  z-index: 100;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
}
/* loader => end  */



</style>