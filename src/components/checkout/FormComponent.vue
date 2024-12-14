<template>
  <div class="form-container">
    <h2>Address details</h2>
    <p class="description">
      Dynamically whiteboard frictionless models for client-centric architectures.
    </p>
    <!-- Use Form component -->
    <Form @submit="creatNewOrder">
      <div class="row">
        <div class="form-group half-width">
          <label for="first-name">First Name</label>
          <!-- Use Field component with validation rules -->
          <Field
            id="first-name"
            name="firstName"
            v-model="formData.firstName"
            :rules="requiredRule"
            type="text"
          />
          <!-- Use ErrorMessage component to display validation errors -->
          <ErrorMessage name="firstName" class="error-message" />
        </div>
        <div class="form-group half-width">
          <label for="second-name">Second Name</label>
          <Field
            id="second-name"
            name="secondName"
            v-model="formData.secondName"
            :rules="requiredRule"
            type="text"
          />
          <ErrorMessage name="secondName" class="error-message" />
        </div>
      </div>

      <div class="form-group">
        <label for="street-address">Street Address</label>
        <Field
          id="street-address"
          name="streetAddress"
          v-model="formData.streetAddress"
          :rules="requiredRule"
          type="text"
        />
        <ErrorMessage name="streetAddress" class="error-message" />
      </div>

      <div class="row">
        <div class="form-group half-width">
          <label for="city">City</label>
          <Field
            id="city"
            name="city"
            v-model="formData.city"
            :rules="requiredRule"
            type="text"
          />
          <ErrorMessage name="city"  class="error-message"/>
        </div>
        <div class="form-group half-width">
          <label for="zip-code">Town</label>
          <Field
            id="zip-code"
            name="zipCode"
            v-model="formData.zipCode"
            :rules="requiredRule"
            type="text"
          />
          <ErrorMessage name="zipCode" class="error-message" />
        </div>
      </div>

      <div class="row">
        <div class="form-group half-width">
          <label for="country">Country</label>
          <input
            id="country"
            type="text"
            readonly
            class="readOnlyInput"
            v-model="formData.country"
          />
        </div>
      </div>

      <div class="row">
        <div class="form-group half-width">
          <label for="phone-number">Phone Number</label>
          <Field
            id="phone-number"
            name="phoneNumber"
            v-model="formData.phoneNumber"
            :rules="phoneNumberRule"
            type="text"
          />
          <ErrorMessage name="phoneNumber" class="error-message" />
        </div>
      </div>
      <!-- Payment Methods Section -->
      <div class="payment-methods">
            <h3>Payment Methods</h3>
            <div class="payment-options">
              <label class="payment-option">
                <input type="radio" name="paymentMethod" value="Cash" v-model="formData.paymentMethod" />
                <div class="payment-icon cash"> <img src="../../assets/payments/cash.png"></div>
                <span>Cash</span>
              </label>

              <label class="payment-option">
                <input type="radio" name="paymentMethod" value="Wallet" v-model="formData.paymentMethod" />
                <div class="payment-icon wallet"> <img src="../../assets/payments/wallet.png"></div>
                <span>Wallet</span>
              </label>

              <label class="payment-option">
                <input type="radio" name="paymentMethod" value="Card" v-model="formData.paymentMethod" />
                <div class="payment-icon card"> <img src="../../assets/payments/credit-card.png"> </div>
                <span>Card</span>
              </label>
            </div>
            <ErrorMessage name="paymentMethod" class="error-message" />
          </div>

      <button type="submit" class="submit-button">Confirm Order</button>
     
    </Form>
  </div>
  <div v-if="isLoading" class="form-container loading">
      <CircleLoader
        :show="isLoading"
      >
    </CircleLoader>
  </div>
</template>

<script>

   // sweetalert 
   import sweetalert from "sweetalert";

   // Import vee-validate components
   import { Form, Field, ErrorMessage } from 'vee-validate'; 
   // components
   import CircleLoader from "@/shared/components/loading/CircleLoader.vue";

   // state , Actions
   import { mapState, mapActions } from "pinia";
   // store
   import { useCartStore } from '@/store/cart/cart.js';
   import { useOrdersStore } from '@/store/order/orders.js';

export default {
  name: "AddressForm",
  components: {
    Form,
    Field,
    ErrorMessage,
    CircleLoader,

  },
  data() {
    return {
      isLoading:false,
      formData: {
        firstName: "",
        secondName: "",
        streetAddress: "",
        city: "",
        zipCode: "",
        country: "Egypt",
        phoneNumber: "",
        paymentMethod: "Cash", // New field for payment method

      },
    };
  },
  computed: {
    ...mapState(useCartStore, ['cartItems','shippingCost'])
  },
  methods: {
    ...mapActions(useOrdersStore, ['addOrder']),
    ...mapActions(useCartStore, ['clearCart']),
    
    // ============ validation rules => start =====================================
    requiredRule(value) {
      
      if(value.trim() == ''){
        return "Field is required"
      }
       // All is good
       return true;
    },
    phoneNumberRule(value) {

      if(value.trim() == ''){
        return "Field is required"
      }
      const phoneRegex = /^\d{11}$/;  
      if(!phoneRegex.test(value)){
        return "Enter valid number please"
      }
       // All is good
       return true;
    },
    // ============ validation rules => end =====================================
     // ============ creat New oredr => start =====================================

     async creatNewOrder() {
     this.isLoading = true;

    try {
      if (this.cartItems.length === 0) {
        sweetalert("لا يمكن إنشاء الطلب بدون منتجات.", "يرجى إضافة منتجات قبل إنشاء الطلب.", "error");
        this.isLoading = false;
        return;
      }

      // إنشاء مصفوفة المنتجات بصيغة مطابقة لهيكل البيانات المطلوب
      const products = this.cartItems.map(item => {
        return {
          id: item.id,
          name: item.name,
          price_offer: 0, // استخدام السعر إذا كان متوفراً
          quantity: item.quantity,
          productInfo: {
            // buyPrice: item.priceMaterial || 0,
            categoryId: item.categoryId,
            description: item.description,
            displayOnSite: item.displayOnSite,
            id: item.id,
            // imageUrl: item.imageUrl,
            name: item.name,
            // offerPrice: item.offerPrice || 0,
            priceMaterial: item.priceMaterial || 0,
            unitId: item.unitId,
            unitName: {
              id: item.unitName?.id || "",
              allowShorthand: item.unitName?.allowShorthand || false,
              name: item.unitName?.name || "",
              shorthand: item.unitName?.shorthand || "",
            },
          },
        };
      });

      const newOrder = {
        products: products,
        customerName: `${this.formData.firstName} ${this.formData.secondName}`,
        address: {
          streetAddress: this.formData.streetAddress,
          city: this.formData.city,
          town: this.formData.zipCode,
          country: this.formData.country,
          phoneNumber: this.formData.phoneNumber,
        },
        paymentMethod: this.formData.paymentMethod,
        shipping: this.shippingCost, 
        status:'0',
        date: new Date().toISOString().split("T")[0], // تاريخ اليوم

        };

      console.log("قبل الإرسال:", newOrder);

      await this.addOrder(newOrder);
      
      console.log("بعد الإرسال");
      
      this.isLoading = false;
      // توجيه بناءً على طريقة الدفع
      switch (this.formData.paymentMethod) {
        case "Cash":
          sweetalert("Order Has Been Sent", "we will conect you soon!", "success");
          this.$router.push({ name: 'shop' });
          this.clearCart()
          break;
          case "Wallet":
          sweetalert("Order Has Been Sent", "go to complete payment by Wallet!", "success");
          this.$router.push({ name: 'wallet' });
          break;
          case "Card":
          sweetalert("Order Has Been Sent", "go to complete payment by payment!", "success");
          this.$router.push({ name: 'payment' });
          break;
        default:
          this.$router.push({ name: 'shop' });
          break;
      }
      
    } catch (error) {
      console.error("order has not sent  ", error);
      this.isLoading = false;
      this.clearCart()
      this.$router.push({ name: 'shop'});
      sweetalert("خطأ", "حدث خطأ أثناء العملية: " + error.message, "error");
    }
  },
    // ============ creat New oredr => end =======================================
    

  },
};
</script>

<style scoped lang="scss">
.form-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
h2 {
  font-size: 24px;
  margin-bottom: 10px;
  text-align: start;
  margin-bottom: 20px;
}
.description {
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 70px;
  text-align: start;
}
.row {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}
.form-group {
  margin-bottom: 20px;
  flex: 1;
}
.half-width {
  flex: 0 0 calc(50% - 10px);
}
label {
  display: block;
  /* font-size: 1px; */
  font-weight: bold;
  margin-bottom: 5px;
  color: #374151;
  /* background-color: red; */
  text-align: start;
}
input,
select {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  outline: none;
}
input:focus,
select:focus {
  border-color: rgb(127, 6, 6);
  box-shadow: 0 0 0 1px rgb(127, 6, 6);
}
.helper-text {
  font-size: 12px;
  color: #6b7280;
  margin-top: 5px;
}
.submit-button {
  background-color:black;
  color: white;
  font-size: 14px;
  font-weight: bold;
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.submit-button:hover {
  background-color:  rgb(127, 6, 6);
}
.error-message {
  color: red;
  font-size: 14px;
  font-weight: bold;
  margin-top: 5px;
  text-align: start;
  background-color: rgba(255, 0, 0, 0.1);  /* خلفية خفيفة باللون الأحمر لتمييز الرسالة */
  padding: 5px;
  border-radius: 4px;
}
.payment-methods {
  margin-top: 30px;
  margin-bottom: 30px;
}

.payment-methods h3 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: start;
}

.payment-options {
  display: flex;
  gap: 15px;
}

.payment-option {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.payment-option input {
  display: none;
}

.payment-option .payment-icon {
  width: 60px;
  height: 60px;
  border: 2px solid #d1d5db;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.3s ease;
  img{
    width: 70%;
    height: 70%;
  }
  
}

.payment-option .payment-icon.cash {
  /* background: url("path-to-cash-icon.svg") no-repeat center center; */
  background-size: contain;
}

.payment-option .payment-icon.wallet {
  /* background: url("path-to-wallet-icon.svg") no-repeat center center; */
  background-size: contain;
}

.payment-option .payment-icon.card {
  // background: url("../../assets/payments/credit-card.png") no-repeat center center;
  background-size: contain;
}

.payment-option span {
  margin-top: 8px;
  font-size: 14px;
  font-weight: bold;
  color: #374151;
}

.payment-option input:checked + .payment-icon {
  border-color: rgb(127, 6, 6);
}
/* 
<!-- <img  :src="require('@/assets/background/bg (3).png')"  alt="home image"  ref="homeImage" class="home__img"> -->
width: 80%;
height: 300px; */
</style>
