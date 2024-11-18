<template>
  <div  class="BackgroundApp">
   <!--==================== HOME ====================-->
      <div class="home__container container ">
        <div class="home__data" ref="homeData">
            <h2 class="home__subtitle">MAKE YOUR</h2>
            <h1 class="home__title">BODY SHAPE</h1>
            <p class="home__description">
                In here we will help you to shape and build your ideal
                body and live your life to the fullest.
            </p>
            <a href="#Toproducts" class="button button__flex">
              Shop Now <font-awesome-icon :icon="['fas', 'arrow-right']" />
            </a>
        </div>
          
        <div class="home__images">
            <!-- <img  :src="require('@/assets/img/home-img.png')"  alt="home image"  ref="homeImage" class="home__img"> -->
            <img  :src="require('@/assets/products/product7.png')"  alt="home image"  ref="homeImage" class="home__img">
            
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
      observer: null
    };
  },
  mounted() {

    // تحديد العنصر الذي نريد مراقبته
    const target = this.$refs.homeData;
    // إعداد Intersection Observer
    this.observer = new IntersectionObserver(this.handleIntersection); 
    // بدء المراقبة
    this.observer.observe(target);



    // مراقبة العنصر الخاص بالصورة
    const homeImageTarget = this.$refs.homeImage;
      // إعداد Intersection Observer للصورة
    this.imageObserver = new IntersectionObserver(this.handleImageIntersection);
      // بدء المراقبة على الصورة
    this.imageObserver.observe(homeImageTarget);
  },
  methods: {
    handleIntersection(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // إضافة كلاس لتحريك العنصر عند الوصول له
          entry.target.classList.add('show-left');
          console.log("here")
        } else {
          // إزالة الكلاس عندما يختفي
          entry.target.classList.remove('show-left');
        }
      });
    },
    handleImageIntersection(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // إضافة كلاس لتحريك الصورة من الجهة اليمنى
          entry.target.classList.add('show-right');
        } else {
          // إزالة الكلاس عندما يختفي
          entry.target.classList.remove('show-right');
        }
      });
    }
  },
  destroyed() {
    // تأكد من إيقاف المراقبة عند تدمير المكون
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
    opacity: 0;
    transition: opacity 1s ease, transform 1s ease;
    transform: translateX(-100%); /* العنصر يبدأ مخفيًا */


  }
  .home__data.show-left {
  opacity: 1;
  transform: translateX(0); /* يتحرك للموضع الطبيعي عند ظهوره */
}
  .home__subtitle{
    font-size:44px;
    -webkit-text-stroke: 1px rgb(127, 120, 120);
    color: transparent;
  }
  
  .home__title{
    font-size: 44px;
    font-weight: 600 ;
    margin: .5rem 0;
    color: rgb(129, 6, 6);

  }
  
  .home__subtitle,
  .home__title{
    letter-spacing: 1.5px;
  }
  
  .home__description{
    margin-bottom: 2.5rem;
    color: rgb(129, 6, 6);

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
    background-color: rgba(139, 0, 0, 0.9); /* لون أحمر داكن مع شفافية طفيفة */

  }
  
  .home__triangle-2{
    width: 305px; 
    background-color:  hsl(79, 67%, 52%);
    background-color: rgba(128, 0, 0, 0.85); /* لون أحمر مع شفافية خفيفة */

  }
  
  
  
  .home__triangle-3{
    width: 505px;
    background-color:  hsl(79, 63%, 50%);
    background-color: rgba(120, 0, 0, 0.8); /* لون أحمر داكن مع شفافية أكثر */

  }
 
  
    /*=============== BUTTON ===============*/
    
    .button{
      // display: inline-block;
      // background-color:  hsl(79, 72%, 55%);
      padding: 18px 32px;
      // border: 2px solid hsl(79, 97%, 77%);
      // color:  hsl(180, 4%, 12%);
      color: white;
      border: 2px solid red;
      font-weight:600 ;
      border-radius: 4px;
      cursor: pointer;
      // transition: background .3s;
      background-color: rgba(120, 0, 0, 0.8); /* لون أحمر داكن مع شفافية أكثر */

    }
    .button:hover{
      background-color: red;
    }
  
    .button i{
      font-size: 1.25rem;
      transition: transform .3s;
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
    margin-bottom: 65px;
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
    margin-bottom: 105px;
    width: 60%;

  }
  
  }


  @media(max-width:395px){
   
  .home__img{
    margin-bottom: 160px;
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
