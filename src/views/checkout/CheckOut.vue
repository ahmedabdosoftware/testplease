<template>
    <div class="checkout-page">
      <!-- Progress Steps -->
      <ProgressSteps :step="2" />
  
      <!-- Main Content -->
      <div class="checkout-content">
        <FormComponent />
        <OrderSummary />
      </div>
    </div>
  </template>
  
  <script>

  // components

    import ProgressSteps from "@/components/cart/ProgressSteps.vue"; 
    import FormComponent from "@/components/checkout/FormComponent.vue";
    import OrderSummary from "@/components/checkout/OrderSummary.vue";
  
  export default {
    name: "CheckoutPage",
    components: {
      ProgressSteps,
      FormComponent,
      OrderSummary,
    },
  };
  </script>
  
  <style scoped>
  .checkout-page {
    padding: 20px;
  }
  .checkout-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  </style>
  