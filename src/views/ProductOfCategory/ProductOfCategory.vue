<template>
    <!-- shop view -->
    <div class="productsOfCategory">
        <!-- product section -->
        <ProductList :categoryId="id">
          <template #section-title>
           <p class="category-name"> {{ categoryNameById }} </p>
          </template>
        </ProductList>
          <!-- product section -->
        <!-- <ProductList tag="best">
          <template #section-title>
            New <span class="mark-it">Arrival</span>
          </template>
        </ProductList> -->
        <!-- product section -->
        <!-- <ProductList tag="top">
          <template #section-title>
            Featured <span class="mark-it">Products</span>
          </template>
        </ProductList> -->
    </div>
  </template>
  <script>
  
  //componnents  Vue.js components
  
    // ProductList
    import ProductList from "@/components/products/ProductList.vue";
    // actions 
    import {  mapState , mapActions } from 'pinia'
    //store
    import { useCategoriesStore } from '@/store/categories/categories.js';
    // mixins 
    import categoryNameById from '@/mixins/categoryName';
  
  export default{
    name: "ProductOfCategory",
    components: {
      ProductList
    },
    mixins: [categoryNameById],

    methods: {
      ...mapActions(useCategoriesStore, ['fetchCategories']),

    },
    computed: {
      ...mapState(useCategoriesStore, ['categories']),
    },

     async created(){
      this.id = this.$route.params.id;  
      await this.fetchCategories();
  
      },
  
    data(){
      return{
        id:'',
      }
    }
  }
  
  </script>
  <style lang="scss" scoped>
  // all the view
  .productsOfCategory{
    min-height: 300px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow: hidden;
    
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
::v-deep(.titleProducts > div:first-child) {
  // color: red;
  font-size: 20px;
  // height: 50px;
  align-items: flex-end;
  justify-content: flex-start;
  // background: linear-gradient(135deg, #f5f5f5, #ddd); /* خلفية هادئة */
  // box-shadow: 0 0 5px rgb(210, 205, 205);

}
.category-name{
 color: rgb(127, 6, 6);
}
  
  </style>