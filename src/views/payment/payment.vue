<template>
    <div v-if="paymentKey">
      <iframe
        :src="`https://accept.paymob.com/api/acceptance/iframes/884770?payment_token=${paymentKey}`"
        frameborder="0"
        width="100%"
        height="600px"
      ></iframe>

    </div>
    <div class="form-container loading">
      <CircleLoader
        :show="isLoading"
      >
    </CircleLoader>
  </div>
  </template>
  
  <script>
  // state , Actions
  import { mapState, mapActions } from 'pinia';
  // store
  import { usePaymentStore } from '@/store/payments/payment.js';
  import { useCartStore } from '@/store/cart/cart.js';
  // components
  import CircleLoader from "@/shared/components/loading/CircleLoader.vue";

  export default {
    data() {
    return {
      isLoading:false,
    };
  },
    computed: {
      ...mapState(usePaymentStore, ['paymentKey']),  
      ...mapState(useCartStore, ['cartItems']),
      ...mapState(useCartStore, ['shippingCost']),
      totalPrice() {
        return this.cartItems.reduce((sum, item) => {
          const price = item.offerPrice? item.offerPrice : item.priceMaterial;
          console.log(price)
          return sum + price * item.quantity;
        }, 0);
      },
      totalPriceWithShipping() {
      // إضافة تكلفة الشحن إلى الإجمالي
      return this.totalPrice + Number(this.shippingCost);
    },
    },
    components: {
    CircleLoader,

  },
  
    methods: {
      
      ...mapActions(usePaymentStore, ['fetchToken', 'createOrder', 'initiatePaymentKey']),  // ربط الـ actions من الـ store
      ...mapActions(useCartStore, ['clearCart']),
    },
  
    async created() {
      // تأكد من أنك قمت بإنشاء الطلب وتخزين التوكن
      if (this.paymentKey === null) {
        this.isLoading = true;
        await this.fetchToken(); // استرجاع التوكن
           // تسجيل الإجمالي
        console.log("Total Price:", this.totalPrice);
        console.log("Total Price with Shipping:", this.totalPriceWithShipping);

        await this.createOrder(this.totalPriceWithShipping, { // بيانات الفاتورة
            apartment: "6",
            email: "user@example.com",
            floor: "1",
            first_name: "Ahmed",
            last_name: "Ali",
            street: "Tahrir Street",
            building: "1",
            phone_number: "+201001234567",
            country: "EGY",
            state: "Cairo"

        }, 
          this.cartItems.map(item => ({
          name: item.name,
          amount_cents: Math.round((item.offerPrice || item.priceMaterial) * item.quantity * 100),
          quantity: item.quantity
        }))
      );
        await this.initiatePaymentKey(this.totalPriceWithShipping,{ // بيانات الفاتورة
            apartment: "6",
            email: "user@example.com",
            floor: "1",
            city:"cairo",
            first_name: "Ahmed",
            last_name: "Ali",
            street: "Tahrir Street",
            building: "1",
            phone_number: "+201001234567",
            country: "EGY",
            state: "Cairo"

        }); // إنشاء مفتاح الدفع
        this.isLoading = false;
        this.clearCart()


      }
    },
    
  };
  </script>
  