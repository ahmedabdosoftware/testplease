import { defineStore } from 'pinia';
import axios from 'axios'; // استيراد axios

// src/stores/payment.js
export const usePaymentStore = defineStore('payment', {
    state: () => ({
      token: null,
      paymentStatus: null,
      orderId: null,
      paymentKey: null,  // إضافة متغير لتخزين paymentKey
    }),
  
    actions: {
      async fetchToken() {
        try {
          const response = await axios.post('https://accept.paymobsolutions.com/api/auth/tokens', {
            api_key: 'ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmpiR0Z6Y3lJNklrMWxjbU5vWVc1MElpd2ljSEp2Wm1sc1pWOXdheUk2TVRBd09UUXpOaXdpYm1GdFpTSTZJbWx1YVhScFlXd2lmUS41TFZmSDdoR290V1JJMDJxLTAtcC0yLVhkYXpEYlFRY1VSWFU3V2MtU2FMS1dEc200ZDVVTWVMMzdxNXh1aURwelJ5SUduX0xFZEJ3VVprRVc5RlVSZw==',
          });
          this.token = response.data.token;
          console.log("token done", this.token)
        } catch (error) {
          console.error('Error getting token', error);
          this.paymentStatus = 'خطأ في الحصول على التوكن';
        }
      },
  
      async createOrder(amount, billingData, items) {
        if (!this.token) {
          this.paymentStatus = 'لم يتم الحصول على التوكن بعد';
          return;
        }
  
        try {
          const response = await axios.post('https://accept.paymobsolutions.com/api/ecommerce/orders', {
            merchant_id: 1009436,
            amount_cents: amount * 100,
            currency: 'EGP',
            billing_data: billingData,
            items: items,
          }, {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          });
  
          this.orderId = response.data.id;
          localStorage.setItem('paymentOrderId', this.orderId);
          console.log("orderId done", this.orderId)

        } catch (error) {
          console.error('Error creating order', error);
          this.paymentStatus = 'حدث خطأ أثناء إنشاء الطلب';
        }
      },
  
      async initiatePaymentKey(amount,billingData) {
        if (!this.token || !this.orderId) {
          this.paymentStatus = 'لم يتم الحصول على التوكن أو الطلب';
          return;
        }
  
        try {
          const response = await axios.post('https://accept.paymobsolutions.com/api/acceptance/payment_keys', {
            auth_token: this.token,
            amount_cents: amount * 100,
            expiration: 3600,
            order_id: this.orderId.toString(), // تحويل orderId إلى string
            currency: 'EGP',
            integration_id: 4889543,
            billing_data: billingData,
          }, {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          });
  
          this.paymentKey = response.data.token;  // تخزين التوكن
          console.log("paymentKey done", this.paymentKey)

        } catch (error) {
          console.error('Error initiating payment', error);
          this.paymentStatus = 'حدث خطأ أثناء إعداد الدفع';
        }
      },
    },
  });
  