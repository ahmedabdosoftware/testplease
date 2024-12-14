<template>
  <div  class="BackgroundApp">
   <!--==================== HOME ====================-->
      <div class="home__container container ">
        <div class="home__data" ref="homeData">
          <h2 class="home__subtitle typewriter-text" ref="subtitle"></h2>
          <h1 class="home__title typewriter-text" ref="title"></h1>
          <p class="home__description typewriter-text" ref="description">
          </p>
            <a href="#Toproducts" class="button button__flex">
             <span> Shop Now</span> <font-awesome-icon class="icon" :icon="['fas', 'arrow-right']" />
            </a>
        </div>
          
        <div class="home__images">
            <!-- <img  :src="require('@/assets/img/home-img.png')"  alt="home image"  ref="homeImage" class="home__img"> -->
            <img  :src="images[currentImageIndex]"  alt="home image"  ref="homeImage" class="home__img">
            
            <div class="home__triangle home__triangle-3"></div>
            <div class="home__triangle home__triangle-2!"></div>
            <div class="home__triangle home__triangle-1"></div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'BackgroundApp',
  data() {
    return {
      observer: null,
      images: [
      require('@/assets/products/product7.png'),
      require('@/assets/products/product1.png'),
      require('@/assets/products/product2.png'),
      require('@/assets/products/product4.png'),
      require('@/assets/products/product5.png'),
      require('@/assets/products/product6.png'),
      // require('@/assets/products/product8.png'),
    ],
    currentImageIndex: 0,
    };
  },
  mounted() {

    // texts from left, but canceled right Now
      // const target = this.$refs.homeData;
      // this.observer = new IntersectionObserver(this.handleIntersection); 
      // this.observer.observe(target);

    // startImageRotation
      this.startImageRotation();

    // type texts
      this.startTypewriterEffects(); 

    // image from right
      const homeImageTarget = this.$refs.homeImage;
      this.imageObserver = new IntersectionObserver(this.handleImageIntersection);
      this.imageObserver.observe(homeImageTarget);
  },
  methods: {
    
    // texts from left, but canceled right Now
      // handleIntersection(entries) {
      //   entries.forEach(entry => {
      //     if (entry.isIntersecting) {
      //       entry.target.classList.add('show-left');
      //       console.log("here")
      //     } else {
      //       entry.target.classList.remove('show-left');
      //     }
      //   });
      // },
      startImageRotation() {
        setInterval(() => {
          this.currentImageIndex =
            (this.currentImageIndex + 1) % this.images.length;
        }, 3000); // تغيير الصورة كل 3 ثوانٍ
      },
    // type texts
        async typewriterEffect(element, text, speed, applyTransform = true) {
          const words = text.split(" "); // تقسيم النص إلى كلمات
          element.textContent = ""; // تفريغ العنصر قبل الإضافة
          for (let i = 0; i < words.length; i++) {
            const span = document.createElement("span"); // إنشاء عنصر لكل كلمة
            span.textContent = words[i]; // إضافة الكلمة
            span.style.opacity = "0"; // البداية شفافة
            
            // إذا كان applyTransform صحيحًا، يتم تطبيق التأثيرات
            if (applyTransform) {
              span.style.transform = "translateY(20px) scale(0.9)"; // بداية الكلمة أسفل وأصغر
            } else {
              span.style.transform = "none"; // عدم تطبيق التأثير في الجملة الثالثة
            }

            span.style.transition = `opacity ${speed}ms ease-in-out, transform ${speed}ms ease-in-out`; // تأثير الشفافية والحركة
            element.appendChild(span);
            span.style.display = "inline-block";
            element.appendChild(document.createTextNode(" ")); // إضافة مسافة بين الكلمات
            
            // التأخير لإظهار الكلمة
            setTimeout(() => {
              span.style.opacity = "1";
              span.style.transform = "translateY(0) scale(1)"; // العودة إلى الوضع الطبيعي
            }, i * speed);
          }
          // انتظار انتهاء تأثير آخر كلمة قبل البدء بالسطر التالي
          await new Promise((resolve) =>
            setTimeout(resolve, words.length * speed + 500)
          );
        },

        async startTypewriterEffects() {
          // التأثير على الجمل واحدة تلو الأخرى
          await this.typewriterEffect(this.$refs.subtitle, "BUILD  YOUR BODY,", 200); // الجملة الأولى
          await this.typewriterEffect(this.$refs.title, "BUILD YOUR DREAM", 200); // الجملة الثانية
          await this.typewriterEffect(
            this.$refs.description,
            "In here we will help you to shape and build your ideal body and live your life to the fullest.",
            100,
            false // لا تطبيق تأثير translateY على الجملة الثالثة
          ); // الجملة الثالثة
        },


    // image from right
      handleImageIntersection(entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show-right');
          } else {
            entry.target.classList.remove('show-right');
          }
        });
      }
  },
  destroyed() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
};
</script>


<style scoped lang="scss">

/*=============== GOOGLE FONTS ===============*/
@import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Red+Hat+Display:wght@400;700;900&display=swap");



/*=============== REUSABLE CSS CLASSES ===============*/

.BackgroundApp{
  width: 100%;
  height: 100%;
  // background-color: #8B0000; /* لون أحمر داكن لخلفية التطبيق */


}
.home__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  // background-color: rgba(139, 0, 0, 0.8); /* خلفية شبه شفافة لتداخل اللون الأحمر */

  // background-color: rebeccapurple;
}

  .home__data{
    text-align: center;
    // background-color: red;
    width: 55%;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 60px;
    // opacity: 0;
    // transition: opacity 1s ease, transform 1s ease;
    // transform: translateX(-100%); /* العنصر يبدأ مخفيًا */


  }
  .home__data.show-left {
  opacity: 1;
  transform: translateX(0); /* يتحرك للموضع الطبيعي عند ظهوره */
}
  .home__subtitle{
    font-size:28px;
    -webkit-text-stroke: 1px rgb(127, 120, 120);
    color: transparent;
  }
  
  .home__title{
    font-size: 28px;
    font-weight: 600 ;
    margin: .5rem 0;
    // color: rgb(129, 6, 6);

  }
  
  .home__subtitle,
  .home__title{
    letter-spacing: 1.5px;
  }
  
  .home__description{
    margin-bottom: 2.5rem;
    // color: rgb(129, 6, 6);

  }

  .home__img{
    position: relative;
    z-index: 102;
    width: 70%;
    margin-bottom: 15px;
    opacity: 0;
    transform: translateX(100%); /* إخفاء الصورة ناحية اليمين */
    transition: opacity 1s ease, transform 1s ease;
  }
  .home__img.show-right {
  opacity: 1;
  transform: translateX(0); /* تحريك الصورة إلى مكانها الطبيعي */
}
  // height:500px;
  .home__images{
    height:500px;
    width: 45%;
    // background-color: brown;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }
  
  .home__triangle{
    height: 100%;
    position: absolute;
    // background-color: red;
    z-index: 101;
    right: 0;
    bottom: 0;
    clip-path: polygon(100% 0, 0 100%, 100% 100%);
  }
  .home__triangle-1{
    width: 405px;
    background-color:  hsl(79, 72%, 55%);
    // background-color: rgba(139, 0, 0, 0.9); /* لون أحمر داكن مع شفافية طفيفة */

  }
  
  .home__triangle-2{
    width: 305px; 
    background-color:  hsl(79, 67%, 52%);
    // background-color: rgba(128, 0, 0, 0.85); /* لون أحمر مع شفافية خفيفة */

  }
  
  
  
  .home__triangle-3{
    width: 505px;
    background-color:  hsl(79, 63%, 50%);
    // background-color: rgba(120, 0, 0, 0.8); /* لون أحمر داكن مع شفافية أكثر */

  }
 
  
    /*=============== BUTTON ===============*/
    
    .button{
      // display: inline-block;
      // background-color:  hsl(79, 72%, 55%);
      padding: 18px 32px;
      // border: 2px solid hsl(79, 97%, 77%);
      // color:  hsl(180, 4%, 12%);
      color: white;
      border: 2px solid hsl(79, 89%, 34%);
      font-weight:600 ;
      border-radius: 4px;
      cursor: pointer;
      // transition: background .3s;
      background-color: hsl(79, 96%, 32%); /* لون أحمر داكن مع شفافية أكثر */

    }
    .button:hover{
      background-color:rgb(1, 86, 1);
    }
  
    .button i{
      font-size: 1.25rem;
      transition: transform .3s;
    }
    .typewriter-text span {
      opacity: 0;
      transform: translateY(10px); /* حركة بسيطة للأسفل */
    }


    @media(max-width:1030px){
    .home__triangle{
      height: 90%;
      // background-color: red;
    }
    .home__images{
      width: 100% ;
      // background-color: blue;    
    }
    .home__img{
      margin-left: 80px;
    }
    .home__data{
      // height:500px;
      width: 100%;
      // background-color: rgb(69, 69, 94);    

    }
  }

  @media(max-width:780px){
    .home__triangle{
      height: 50%;
      // background-color: red;
  }
  .home__images{
    width: 100% ;
    // background-color: blue;    
  }
  .home__img{
    // margin-bottom: 65px;
  }
  .home__data{
    // height:500px;
    width: 100%;
    // background-color: rgb(69, 69, 94);    

  }
  }


  @media(max-width:460px){
    .home__triangle{
      height: 50%;
      // background-color: red;
  }
  .home__images{
    width: 100% ;
    // background-color: blue;    
  }
  .home__img{
    margin-bottom: 85px;
  }
  .home__data{
    // height:500px;
    width: 100%;
    // background-color: rgb(69, 69, 94);    

  }
  }

  @media(max-width:415px){
   
  .home__img{
    margin-bottom: 190px;
    width: 60%;

  }
  
  }
  @media (min-width:410px) and (max-width:412px) and (max-height: 732px){
   
  .home__img{
    margin-bottom: 265px;
    width: 60%;

  }
  
  }


  @media(max-width:395px){
   
  .home__img{
    margin-bottom: 200px;
    width: 60%;
  }
 
  }
  @media(max-width:380px){
    .home__triangle{
      height: 40%;
      // background-color: red;
  }
  .home__img{
    margin-bottom: 260px;
    width: 60%;
  }
 
  }
  @media(max-width:377px){
    .home__triangle{
      height: 40%;
      // background-color: red;
  }
  .home__img{
    margin-bottom: 360px !important;
    width: 50%;
    // height: 100px !important;
  }
  .home__data{
    // height:500px;
    padding-left: 20px;
    // background-color: rgb(69, 69, 94);    

  }
 
  }

  @media (max-width: 361px)  and (max-height: 742px){
  .home__img {
    margin-bottom: 300px !important;
  }

}

@media (max-width: 361px) and (max-height: 642px){
  .home__img {
    margin-bottom: 360px !important;
  }
  .home__data {
    padding-left: 20px;
  }
  .home__description {
    font-size: 12px;
  }
}
@media (max-width: 355px) {
  .home__img {
    margin-bottom: 290px !important;
  }
}
@media (max-width: 345px) {
  .home__img {
    margin-bottom: 180px !important;
  }
}



@media (max-width: 325px) {
  .BackgroundApp{
    // width: 100%;
    // height: 80%;
    // overflow: hidden;
    // background-color: #8B0000; /* لون أحمر داكن لخلفية التطبيق */


  }
  .home__data{
    height: 300px;
    .home__subtitle,
    .home__title{
      font-size: 20px;
    }
  }
  .button{
    .button {
        width: 100px;
        height: 40px;
        display: flex;
        align-items: center;
        font-size: 15px;
        padding-left: 10px;
    }
    .icon{
      width: 10px;
      height: 10px;
    }
  }
  .home__img {
    width: 35%;
    margin-bottom: 430px !important;
  }
  .home__triangle{
      height: 30%;
      // background-color: red;
  }
}




@media (max-width: 322px) and (min-height: 655px){
  .home__img {
    margin-bottom: 300px !important;
  }
 
}






// .button__flex{
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   column-gap: .5rem;
// }
// .button__flex:hover i{
//   transform: translateX(.25rem) ;
// }
  
 



 
</style>
