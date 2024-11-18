<template>
  <!-- shop view -->
  <div class="shop">
    
      <!-- Background section -->
      <div class="Background" >
        <backgroundApp></backgroundApp>
      </div> 
      <!-- Sponcers section -->
      <Sponcers>
      </Sponcers>
      <!-- servies section -->
      <Servies>
      </Servies>
      <!-- catogery section -->
      <CategoryList
      :CategoryList="categories"
      >
      </CategoryList>
      <!-- product section -->
      <ProductList
       tag="top"
       id="Toproducts"
      >
      </ProductList>
      <!-- offer section -->
      <offer> 
      </offer>
      <!-- product section -->
      <ProductList tag="best">
        <template #section-title>
          Best <span class="mark-it">Deals</span>
        </template>
      </ProductList>
      <!-- BannerSection section -->
      <BannerSection>
      </BannerSection> 
      <!-- product section -->
      <ProductList tag="best">
        <template #section-title>
          Hot <span class="mark-it">Deals</span>
        </template>
      </ProductList>
      <!-- Reviews section -->
      <Reviews>
      </Reviews> 
  </div>
</template>
<script>

//componnents  Vue.js components

  // ProductList
  import ProductList from "@/components/products/ProductList.vue";
  // CategoryList
  import CategoryList from "@/components/category/CategoryList.vue";
  // backgroundApp
  import backgroundApp from "@/components/background/backgroundApp.vue";
  // offer
  import offer from "@/components/offers/offer.vue";
  // Sponcers
  import Sponcers from "@/components/sponcers/Sponcers.vue";
  // Reviews
  import Reviews from "@/components/reviews/Reviews.vue";
  // Servies
  import Servies from "@/components/servies/Servies.vue";
  // BannerSection
  import BannerSection from "@/components/baners/BannerSection.vue";


   // actions 
   import {  mapState , mapActions } from 'pinia'
  //store
  import { useCategoriesStore } from '@/store/categories/categories.js';

export default{
  name: "Shop",
  components: {
    CategoryList,
    ProductList,
    backgroundApp,
    Sponcers,
    offer,
    Reviews,
    Servies,
    BannerSection,
  },
  methods: {
      
    // ============ my actions => start=======================================

    ...mapActions(useCategoriesStore, ['fetchCategories']),


    // ============ my actions => end==========================================

   
  },
  computed: {
  ...mapState(useCategoriesStore, ['categories']),

  },
  created(){
       this.fetchCategories();
       console.log(this.categories)
  
    },
  data(){
    return{
       // بيانات وهمية لتجربة الصور كفئات
       testCategories: [
        { id: 1, name: 'Pre Workout', imgSrc: require('@/assets/categoris/PRO1.png') },
        { id: 2, name: 'Mass Gainer', imgSrc: require('@/assets/categoris/Pro2.png') },
        { id: 3, name: 'Amino Acids', imgSrc: require('@/assets/categoris/pro3.png') },
        { id: 4, name: 'Fat Burners', imgSrc: require('@/assets/categoris/pro4.png') },
        ],
       
    }
  }
}

</script>
<style lang="scss" scoped>
// all the view
.shop{
  min-height: 1000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: hidden;
  
}
// Background section
.Background{
  height: 90vh;
  width: 100%;
  // made by canva app
  // background-image: url("@/assets/backgroundC.png");
  // background-color:blue;
}
.mark-it{
  color: white;
  // background-color: rgb(22, 175, 22);
  // background-color:  hsl(79, 63%, 50%);
  background-color: rgb(127, 6, 6);
  display: inline-block;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 5px;
  clip-path: polygon(0% 0% , 100% 0% , 92% 50%, 100% 100% ,0% 100%,8% 50%);

}

</style>