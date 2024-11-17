// mixins/categoryName.js

export default {
  methods: {
   // ============ get category Name => start==========================================
  categoryName(product){
    const categoryProductName = this.categories.find(category => category.id === product.categoryId) 
    console.log(categoryProductName);
    if(categoryProductName){
      return categoryProductName.name
    }
  },
  // ============ get category Name => end ==========================================

},

computed: {
  categoryNameById() {
      const category =  this.categories.find(category => category.id === this.id);
      if(category){
        return category.name

      }else{
        return ""
      }
    }

},
};






