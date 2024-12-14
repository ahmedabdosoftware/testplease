import { defineStore } from 'pinia';
import axios from 'axios'; // استيراد axios

// src/stores/payment.js
export const usePaymenWallettStore = defineStore('payment', {
    state: () => ({
      token: null,
      paymentStatus: null,
      orderId: null,
      paymentKey: null,  // إضافة متغير لتخزين paymentKey
      walletResponse: null, // إضافة لتخزين استجابة المحفظة
      redirectUrl: null, // إضافة متغير لتخزين رابط التوجيه


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
            integration_id: 4889756,
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
      async initiateWalletPayment(phoneNumber) {
        if (!this.paymentKey) {
          this.paymentStatus = 'لم يتم إعداد مفتاح الدفع';
          return;
        }
  
        try {
          const response = await axios.post('https://accept.paymobsolutions.com/api/acceptance/payments/pay', {
            source: {
              identifier: phoneNumber, // رقم الهاتف المرتبط بالمحفظة
              subtype: 'WALLET',
            },
            payment_token: this.paymentKey, // مفتاح الدفع
          });
  
          this.walletResponse = response.data; // حفظ استجابة الدفع
          console.log('Wallet Payment Initiated:', this.walletResponse);
          this.paymentStatus = 'تم إرسال طلب الدفع بنجاح';
            // إذا كانت المعاملة ناجحة أو بحاجة لإعادة توجيه
        if (this.walletResponse.iframe_redirection_url) {
            this.redirectUrl = this.walletResponse.iframe_redirection_url; // تخزين الرابط
            window.location.href = this.redirectUrl; // إعادة التوجيه إلى الرابط الخاص بالدفع
          }
        } catch (error) {
          console.error('Error initiating wallet payment:', error);
          this.paymentStatus = 'حدث خطأ أثناء إرسال طلب الدفع';
        }
      },
    },
  });
  