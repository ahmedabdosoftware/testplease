<template>
    <!-- <div>
      <h1>pay by Wallet</h1>
      <button @click="payWithWallet">ادفع باستخدام المحفظة</button>
      <div v-if="walletResponse">
        <h2>تم إرسال طلب الدفع</h2>
        <pre> Loading ...</pre>
      </div>
    </div> -->
    <div v-if="isLoading" class="loading">
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
  import { usePaymenWallettStore } from '@/store/payments/wallet.js';
  import { useCartStore } from '@/store/cart/cart.js';


  // components
  import CircleLoader from "@/shared/components/loading/CircleLoader.vue";

  export default {
    data() {
    return {
      isLoading:false,
    };
  },
  components: {
    CircleLoader,
  },
    computed: {
        ...mapState(usePaymenWallettStore, ['paymentKey', 'walletResponse']),
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
    methods: {
      ...mapActions(usePaymenWallettStore, ['fetchToken', 'createOrder', 'initiatePaymentKey', 'initiateWalletPayment']),
      ...mapActions(useCartStore, ['clearCart']),
    },
    async created() {
        this.isLoading = true;
      if (!this.paymentKey) {
        await this.fetchToken();
        await this.createOrder(this.totalPriceWithShipping, {
          apartment: '6',
          email: 'user@example.com',
          floor: '1',
          first_name: 'Ahmed',
          last_name: 'Ali',
          street: 'Tahrir Street',
          building: '1',
          phone_number: '+201001234567',
          country: 'EGY',
          state: 'Cairo',
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
        await this.initiateWalletPayment('01010101010'); // رقم الهاتف
        this.isLoading = false;
        this.clearCart()


      }
    },
  };
  </script>
  <style>
  .loading{
    width: 100%;
    height: 60vh;
  }

  </style>
  